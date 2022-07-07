import { Contract } from "@ethersproject/contracts";
import { JsonRpcSigner, TransactionResponse, TransactionReceipt } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import { Interface } from "@ethersproject/abi";
import { BigNumber, ethers } from "ethers";
import { ABI } from "./abi";
import { getAdapterAddress } from "./networks";


export class UmaCtfAdapterClient {

    public static Abi: Interface = new Interface(ABI)

    readonly chainID: number;
    readonly signer: JsonRpcSigner | Wallet;
    readonly contract: Contract;

    constructor(signer: JsonRpcSigner | Wallet, chainID: number) {
        this.signer = signer;
        this.chainID = chainID;
        this.contract = new Contract(getAdapterAddress(this.chainID), UmaCtfAdapterClient.Abi, this.signer);
    }

}