/**
 * Fetches the canonical UMA CTF Adapter contract address for a specific version
 * @param version 
 * @returns 
 */
export const getCanonicalContractAddress = (version: number): string => {
    switch (version) {
        case 1:
            return "0xCB1822859cEF82Cd2Eb4E6276C7916e692995130";
        case 2:
            return "0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74";
        case 3:
            return "0x71392E133063CC0D16F40E1F9B60227404Bc03f7";
        default:
            throw new Error(`Unsupported version: ${version}`);
    }
}

