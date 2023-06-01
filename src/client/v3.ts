import { Wallet } from "@ethersproject/wallet";
import { Interface } from "@ethersproject/abi";
import { Zero } from "@ethersproject/constants";
import { JsonRpcSigner, TransactionReceipt } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";

import { ClientV2 } from "./v2";
import { ctfAbi, v3Abi } from "../abi";
import { QuestionInitializedPayload, InitializePayload, QuestionDataV3 } from "../model";
import { createAncillaryData, getEventArgument } from "../utils";
import { getCanonicalContractAddress } from "../networks";


export class ClientV3 extends ClientV2 {

    constructor(signer: JsonRpcSigner | Wallet, chainID: number, contractAddress?: string) {
        super(signer, chainID);
        const address = contractAddress != null ? contractAddress: getCanonicalContractAddress(3);
        this.contract = new Contract(address, ClientV3.INTERFACE, signer);
    }

    /**
     * Initializes a question on the Adapter
     * @param title
     * @param description
     * @param outcomes
     * @param rewardToken
     * @param reward
     * @param proposalBond
     * @param liveness
     */
    public async initialize(payload: InitializePayload): Promise<QuestionInitializedPayload> {
        let { title, description, outcomes, rewardToken, reward,
            proposalBond, liveness, overrides } = payload;
        
        if(overrides == null) {
            overrides = {};
        }

        if(liveness == null) {
            liveness = Zero;
        }
        
        if (outcomes.length != 2) {
            throw new Error("Invalid outcome length! Must be 2!");
        }
        
        console.log(`Initializing...`);

        // Dynamically generate ancillary data with binary resolution data appended
        const ancillaryData = createAncillaryData(title, description, outcomes);

        const txn = await this.contract.initialize(ancillaryData, rewardToken, reward, proposalBond, liveness, overrides);
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

    public async getQuestion(questionID: string): Promise<QuestionDataV3> {
        return this.contract.getQuestion(questionID);
    }
}
