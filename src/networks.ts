export const getAdapterAddress = (chainID: number): string => {
    switch (chainID) {
        case 137:
            return "0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74";
        case 80001:
            return "0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74";
        default:
            throw new Error(`Unsupported chainID: ${chainID}`);
    }
}