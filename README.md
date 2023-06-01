# Polymarket UMA CTF Adapter SDK

Lightweight wrapper SDK around the [`UmaCtfAdapter`](https://github.com/Polymarket/uma-ctf-adapter) contracts.

### Usage

```ts
import { ClientV1, ClientV2, ClientV3 } from "@polymarket/uma-ctf-adapter-sdk";
const signer = new Wallet("0x" + process.env.KEY);
const v2 = new ClientV2(signer, 137);
const v3 = new ClientV3(signer, 137);

// Initialize question on v2 client
await v2.initialize(
    title, 
    description,
    outcomes, 
    rewardToken, 
    reward, 
    bond
);

// Initialize question on v3 client
await v3.initialize(
    title,
    desc,
    outcomes,
    rewardToken,
    reward,
    bond,
    liveness
)

// Resolve the question
await v3.resolve(questionID);
```
