import { Contract } from "@ethersproject/contracts";
import { JsonRpcSigner, TransactionReceipt } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import { Interface } from "@ethersproject/abi";
import { BigNumber, ethers } from "ethers";
import { adapterAbi, ctfAbi } from "./abi";
import { getAdapterAddress } from "./networks";
import { createFormattedAncillaryData, getEventArgument } from "./utils";
import { QuestionData, QuestionInitializedPayload } from "./model";
import { BigNumberish } from "@ethersproject/bignumber";


export class UmaCtfAdapterClient {

    readonly chainID: number;
    readonly signer: JsonRpcSigner | Wallet;
    readonly contract: Contract;

    constructor(signer: JsonRpcSigner | Wallet, chainID: number, address?: string) {
        this.signer = signer;
        this.chainID = chainID;
        if(address != null){
            this.contract = new Contract(address, adapterAbi, signer);
        } else {
            this.contract = new Contract(getAdapterAddress(chainID), adapterAbi, signer);
        }
    }

    /**
     * Initializes a question on the adapter
     * @param title
     * @param description
     * @param outcomes
     * @param rewardToken
     * @param reward
     * @param proposalBond
     * @returns questionID: string
     */
     public async initializeQuestion(
        title: string,
        description: string,
        outcomes: string[],
        rewardToken: string,
        reward: BigNumber,
        proposalBond: BigNumber,
        overrides?: ethers.Overrides,
    ): Promise<QuestionInitializedPayload> {
        if( overrides == null) {
            overrides = {};
        }
        
        if (outcomes.length != 2) {
            throw new Error("Invalid outcome length! Must be 2!");
        }

        // Dynamically generate ancillary data with binary resolution data appended
        const ancillaryData = createFormattedAncillaryData(title, description, outcomes);

        const txn = await this.contract.initializeQuestion(ancillaryData, rewardToken, reward, proposalBond, overrides);
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
     * Checks if a question is ready to be resolved
     * @param questionID 
     * @returns boolean
     */
    public async readyToResolve(questionID: string): Promise<boolean> {
        return this.contract.readyToResolve(questionID);
    }

    /**
     * Resolves a question
     * @param questionID 
     * @param overrides 
     * @returns 
     */
    public async resolve(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt> {
        if(overrides == null) {
            overrides = {};
        }
        const txn = await this.contract.resolve(questionID, overrides);
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt = await txn.wait();
        return receipt;
    }

    /**
     * Fetch initialized question data
     * @param questionID
     */
     public async getQuestionData(questionID: string): Promise<QuestionData> {
        return this.contract.questions(questionID);
    }

    /**
     * Determines whether or not a questionID has been initialized
     * @param questionID
     * @returns boolean
     */
    public async isQuestionInitialized(questionID: string): Promise<boolean> {
        return this.contract.isQuestionInitialized(questionID);
    }

    /**
     * Pauses a question and prevents its resolution in an emergency
     * @param questionID
     * @param overrides
     */
     public async pauseQuestion(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt> {
        console.log(`Pausing questionID: ${questionID}...`);
        if( overrides == null) {
            overrides = {};
        }
        
        const txn = await this.contract.pauseQuestion(questionID, overrides);
        
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question paused!`);
        return receipt;
    }

    /**
     * Unpauses a question and allows it to be resolved
     * @param questionID
     * @param overrides
     */
    public async unpauseQuestion(questionID: string, overrides?: ethers.Overrides): Promise<TransactionReceipt> {
        console.log(`Unpausing questionID: ${questionID}...`);
        if( overrides == null) {
            overrides = {};
        }
        const txn = await this.contract.unpauseQuestion(questionID, overrides);
        
        console.log(`Transaction hash: ${txn.hash}`);
        const receipt: TransactionReceipt = await txn.wait();
        console.log(`Question unpaused!`);
        return receipt;
    }

    /**
     * Emergency resolve a question
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
        const wardBn: BigNumberish = await this.contract.wards(address);
        if(wardBn == null) {
            return false;
        }
        return wardBn.toString() == "1";
    }
}