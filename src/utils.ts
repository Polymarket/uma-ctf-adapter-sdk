import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";
import { Interface } from "@ethersproject/abi";


/**
 * Build resolution data string to be passed into the UMA Optimistic Oracle
 * E.g [Yes, No] => `p1: 0, p2: 1. Where p2 corresponds to Yes, p1 to a No`
 * @param outcomes 
 * @returns 
 */
export const buildResolutionData = (outcomes: string[]): string => {
    return `p1: 0, p2: 1, p3: 0.5. Where p1 corresponds to ${outcomes[1]}, p2 to ${outcomes[0]}, p3 to unknown/50-50. "Updates made by the question creator via the bulletin board at 0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74 as described by https://polygonscan.com/tx/0xa14f01b115c4913624fc3f508f960f4dea252758e73c28f5f07f8e19d7bca066 should be considered.`;
}

export const OUTCOME_REGEX = /Where p1 corresponds to (\w+), p2 to a (\w+)/;

export const extractOutcomes = (ancillaryDataString: string): string[] | null => {
    const matched = ancillaryDataString.match(OUTCOME_REGEX);
    if (matched && matched.length == 3) {
        const outcomes: string[] = [matched[1], matched[2]];
        return outcomes;
    }
    return null;
}

/**
 * Creates the ancillary data used to resolve questions
 * Appends resolution request information
 * 
 * @param title 
 * @param description
 * @param outcomes 
 * @returns 
 */
export const createAncillaryData = (title: string, description: string, outcomes: string[]): Uint8Array => {
    return ethers.utils.toUtf8Bytes(`q: title: ${title}, description: ${description} res_data: ${buildResolutionData(outcomes)}`);
}

export const getEventArgument = (receipt: TransactionReceipt, iface: Interface, event: string, arg: string): string => {
    let val;
    for(const log of receipt.logs) {
        if(log.topics[0] == iface.getEventTopic(event)){
            const evt = iface.parseLog(log);
            val = evt.args[arg];
        }
    }
    return val;
}