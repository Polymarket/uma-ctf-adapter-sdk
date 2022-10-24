# Polymarket UMA CTF Adapter SDK V2

<a href='https://www.npmjs.com/package/@polymarket/uma-ctf-adapter-sdk'>
    <img src='https://img.shields.io/npm/v/@polymarket/uma-ctf-adapter-sdk.svg' alt='NPM'/>
</a>

This SDK is a lightweight wrapper around the `UmaCtfAdapter` contract.

### Usage

```ts
import { Client } from "@polymarket/uma-ctf-adapter-sdk";
const signer = new Wallet("0x" + process.env.KEY);
const client = new Client(signer, 137);

// Initialize question
await client.initialize(
    title, 
    description,
    outcomes, 
    rewardToken, 
    reward, 
    proposalBond
);

// Resolve the question
await client.resolve(questionID);
```
