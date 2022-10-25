# Polymarket UMA CTF Adapter SDK

Lightweight wrapper SDK around the [`UmaCtfAdapter`](https://github.com/Polymarket/uma-ctf-adapter).

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
