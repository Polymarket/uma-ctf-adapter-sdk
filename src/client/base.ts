import { JsonRpcSigner } from "@ethersproject/providers";
import { Contract, ContractInterface } from "@ethersproject/contracts";
import { Wallet } from "@ethersproject/wallet";
import { ChainID } from "./chainID";


export class BaseAdapterClient {
    chainID: ChainID;
    signer: JsonRpcSigner | Wallet;
    contract: Contract;

    constructor(signer: JsonRpcSigner | Wallet, chainID: ChainID, abi: ContractInterface, contractAddress: string) {
        this.chainID = chainID;
        this.signer = signer;
        this.contract = new Contract(contractAddress, abi, signer)
    }
}