import { JsonRpcSigner } from "@ethersproject/providers";
import { Contract, ContractInterface } from "@ethersproject/contracts";
import { Wallet } from "@ethersproject/wallet";
import { ChainID } from "./chainID";


export class BaseAdapterClient {
    chainID: ChainID;
    signer: JsonRpcSigner | Wallet;
    contract: Contract;

    constructor(signer: JsonRpcSigner | Wallet, chainID: ChainID, abi: ContractInterface, contractAddress: string) {
        BaseAdapterClient._validateChainID(chainID);
        this.chainID = chainID;
        this.signer = signer;
        this.contract = new Contract(contractAddress, abi, signer)
    }

    public getAddress(): string {
        return this.contract.address;
    }

    private static _validateChainID(chainID: number): void {
        if(!(chainID == ChainID.MUMBAI || chainID == ChainID.POLYGON)) {
            throw new Error(`Invalid chainID ${chainID}`);
        }
    }
}