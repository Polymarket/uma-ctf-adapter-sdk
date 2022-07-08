import { BigNumber } from "ethers";


export interface QuestionInitializedPayload {
    questionID: string;
    conditionID: string;
}

export interface QuestionData {
    reward: BigNumber;
    proposalBond: BigNumber;
    requestTimestamp: BigNumber;
    adminResolutionTimestamp: BigNumber;
    resolved: boolean;
    paused: boolean;
    rewardToken: string;
    creator: string;
    ancillaryData: string;
}