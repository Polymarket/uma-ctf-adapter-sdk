export const getAdapterAddress = (chainID: number): string => {
    switch (chainID) {
        case 137:
            return ""; // TODO
        case 80001:
            return ""; // TODO
        default:
            throw new Error(`Unsupported chainID: ${chainID}`);
    }
}