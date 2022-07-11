# Polymarket UMA CTF Adapter SDK V2

<a href='https://www.npmjs.com/package/@polymarket/uma-binary-adapter-sdk-v2'>
    <img src='https://img.shields.io/npm/v/@polymarket/uma-binary-adapter-sdk-v2.svg' alt='NPM'/>
</a>

This SDK is a lightweight wrapper around the `UmaCtfAdapter` contract.

### Usage
```ts
import { Client } from "@polymarket/uma-binary-adapter-sdk-v2";
const signer = new Wallet("0x" + process.env.KEY);
const client = new Client(signer, 137);

// Initialize question
await client.initializeQuestion(
    title, 
    description,
    outcomes, 
    rewardToken, 
    reward, 
    proposalBond, 
    { gasPrice: ethers.utils.parseUnits("100", 9) }
);

// Resolve the question
await client.resolve(questionID);
```