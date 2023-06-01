import { Wallet } from "@ethersproject/wallet";
import { Interface } from "@ethersproject/abi";
import { Zero } from "@ethersproject/constants";
import { JsonRpcSigner, TransactionReceipt, TransactionResponse } from "@ethersproject/providers";

import { ctfAbi, v3Abi } from "../abi";
import { QuestionInitializedPayload, QuestionDataV3 } from "../model";
import { createAncillaryData, getEventArgument } from "../utils";
import { getCanonicalContractAddress } from "../networks";
import { BigNumber, ethers } from "ethers";
import { BaseAdapterClient } from "./base";
import { ChainID } from "./chainID";


export class ClientV3 extends BaseAdapterClient {

    public static INTERFACE: Interface = new Interface(v3Abi);

    constructor(signer: JsonRpcSigner | Wallet, chainID: ChainID, contractAddress?: string) {
        const address = contractAddress != null ? contractAddress: getCanonicalContractAddress(3);
        const abi = ClientV3.INTERFACE;
        super(signer, chainID, abi, address);
    }

    /**
     * Initializes a question on the Adapter
     * @param title
     * @param description
     * @param outcomes
     * @param rewardToken
     * @param reward
     * @param proposalBond
     * @param liveness - In seconds
     */
    public async initialize(
        title: string,
        description: string,
        outcomes: string[],
        rewardToken: string,
        reward: BigNumber,
        proposalBond: BigNumber,
        customLiveness: BigNumber,
        overrides?: ethers.Overrides,
    ): Promise<QuestionInitializedPayload> {
        if(overrides == null) {
            overrides = {};
        }

        if(customLiveness == null) {
            customLiveness = Zero;
        }
        
        if (outcomes.length != 2) {
            throw new Error("Invalid outcome length! Must be 2!");
        }
        
        console.log(`Initializing...`);

        const ancillaryData = createAncillaryData(title, description, outcomes);

        const txn: TransactionResponse = await this.contract.initialize(ancillaryData, rewardToken, reward, proposalBond, customLiveness, overrides);
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        
        const questionID = getEventArgument(receipt, this.contract.interface, "QuestionInitialized", "questionID");
        const conditionID = getEventArgument(receipt, new Interface(ctfAbi), "ConditionPreparation", "conditionId");
        
        console.log(`Question initialized!`);
        return {
            questionID,
            conditionID
        }
    }

    /**
     * Fetches the QuestionData struct for a questionID
     * @param questionID 
     * @returns 
     */
    public async getQuestion(questionID: string): Promise<QuestionDataV3> {
        return this.contract.getQuestion(questionID);
    }

    /**
     * Checks if a question is ready to be resolved
     * @param questionID 
     * @returns boolean
     */
     public async ready(questionID: string): Promise<boolean> {
        return this.contract.ready(questionID);
    }

    /**
     * Resolves a question
     * @param questionID 
     * @param overrides 
     * @returns 
     */
    public async resolve(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt | void> {
        const data = await this.getQuestion(questionID);
        
        if(data.resolved) {
            console.log(`QuestionID: ${questionID} has already been resolved!`);
            return;
        }

        if(!(await this.ready(questionID))) {
            console.log(`QuestionID: ${questionID} is not ready to be resolved!`);
            return;
        }

        if(overrides == null) {
            overrides = {};
        }
        console.log(`Resolving questionID: ${questionID}...`);
        const txn = await this.contract.resolve(questionID, overrides);
        console.log(`Transaction hash: ${txn.hash}`);
        return txn.wait();
    }

    public async getExpectedPayouts(questionID: string): Promise<BigNumber[]> {
        return this.contract.getExpectedPayouts(questionID);
    }

    /**
     * Determines whether or not a question has been initialized
     * @param questionID
     * @returns boolean
     */
    public async isInitialized(questionID: string): Promise<boolean> {
        return this.contract.isInitialized(questionID);
    }

    /**
     * Pauses a question and prevents its resolution in an emergency
     * Only available to admins
     * @param questionID
     * @param overrides
     */
     public async pause(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt> {
        console.log(`Pausing questionID: ${questionID}...`);
        if( overrides == null) {
            overrides = {};
        }
        
        const txn = await this.contract.pause(questionID, overrides);
        
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question paused!`);
        return receipt;
    }

    /**
     * Unpauses a question and allows it to be resolved
     * Only available to admins 
     * @param questionID
     * @param overrides
     */
    public async unpause(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt> {
        console.log(`Unpausing questionID: ${questionID}...`);
        if( overrides == null) {
            overrides = {};
        }
        const txn = await this.contract.unpause(questionID, overrides);
        
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question unpaused!`);
        return receipt;
    }

    /**
     * Emergency resolve a question
     * Only available to admins
     * @param questionID
     * @param payouts
     */
    public async emergencyResolve(
        questionID: string,
        payouts: number[] | BigNumber[],
        overrides?: ethers.Overrides,
    ): Promise<TransactionReceipt> {
        console.log(`Emergency resolving question...`);
        if( overrides == null ){
            overrides = {};
        }
        const txn = await this.contract.emergencyResolve(questionID, payouts, overrides);
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question resolved!`);
        return receipt;
    }

    /**
     * Flag question for emergency resolution
     * Only available to admins
     * @param questionID
     */
    public async flag(
        questionID: string,
        overrides?: ethers.Overrides,
    ): Promise<TransactionReceipt> {
        console.log(`Flagging ${questionID} for emergency resolution...`);
        if( overrides == null ){
            overrides = {};
        }

        const txn = await this.contract.flag(questionID, overrides);
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question flagged for emergency resolution!`);
        return receipt;
    }

    /**
     * Reset a question
     * Only available to admins
     * @param questionID
     * @param overrides
     */
     public async reset(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt> {
        console.log(`Resetting questionID: ${questionID}...`);
        if( overrides == null) {
            overrides = {};
        }
        const txn = await this.contract.reset(questionID, overrides);
        
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question reset!`);
        return receipt;
    }

    /**
     * Checks if a question is flagged
     * @param questionID
     * @returns
     */
    public async isFlagged(questionID: string): Promise<boolean> {
        console.log(`Checking if question has been flagged for emergency resolution...`);
        return this.contract.isFlagged(questionID);
    }

    /**
     * Checks if an address has admin authorization
     * @param address 
     * @returns boolean
     */
    public async isAdmin(address: string): Promise<boolean> {
        return this.contract.isAdmin(address);
    }
}
