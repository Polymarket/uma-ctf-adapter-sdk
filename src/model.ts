import { BigNumber } from "ethers";

export interface QuestionInitializedPayload {
    questionID: string;
    conditionID: string;
}

export interface QuestionDataV1 {
    resolutionTime: BigNumber;
    reward: BigNumber;
    proposalBond: BigNumber;
    settled: BigNumber;
    requestTimestamp: BigNumber;
    adminResolutionTimestamp: BigNumber;
    earlyResolutionEnabled: boolean;
    resolved: boolean;
    paused: boolean;
    rewardToken: string;
    ancillaryData: string;
}

export interface QuestionDataV2 {
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

export interface QuestionDataV3 {
    requestTimestamp: BigNumber;
    reward: BigNumber;
    proposalBond: BigNumber;
    emergencyResolutionTimestamp: BigNumber;
    resolved: boolean;
    liveness: BigNumber;
    paused: boolean;
    reset: boolean;
    rewardToken: string;
    creator: string;
    ancillaryData: string
}