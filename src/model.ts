import { BigNumber } from "ethers";


export interface QuestionInitializedPayload {
    questionID: string;
    conditionID: string;
}

export interface QuestionData {
    requestTimestamp: BigNumber;
    reward: BigNumber;
    proposalBond: BigNumber;
    emergencyResolutionTimestamp: BigNumber;
    resolved: boolean;
    paused: boolean;
    reset: boolean;
    rewardToken: string;
    creator: string;
    ancillaryData: string;
}