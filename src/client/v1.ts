import { JsonRpcSigner, TransactionReceipt } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import { Interface } from "@ethersproject/abi";
import { ContractInterface } from "@ethersproject/contracts";
import { Contract } from "@ethersproject/contracts";
import { v1Abi } from "../abi";
import { getCanonicalContractAddress } from "../networks";

export class ClientV1 {
    chainID: number;
    signer: JsonRpcSigner | Wallet;
    contract: Contract;

    public static INTERFACE: Interface = new Interface(v1Abi);

    constructor(signer: JsonRpcSigner | Wallet, chainID: number, contractAddress?: string) {
        this.chainID = chainID;
        this.signer = signer;
        const address = contractAddress != null ? contractAddress: getCanonicalContractAddress(1);
        this.contract = new Contract(address, ClientV1.INTERFACE, signer)
    }
}

