import { BigNumber, ethers } from "ethers";

export interface InitializePayload {
    title: string,
    description: string,
    outcomes: string[],
    rewardToken: string,
    reward: BigNumber,
    proposalBond: BigNumber,
    liveness? : BigNumber,
    overrides?: ethers.Overrides,
}

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