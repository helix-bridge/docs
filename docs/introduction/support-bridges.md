---
id: supported_chains_tokens_bridges
sidebar_position: 2
sidebar_label: Supported Chains, Tokens, Bridges
---

# Supported Chains, Tokens, Bridges


|  Supported Chains             | Supported Tokens | Bridges| Tech    |
| ----------------------------- | -------------- | ---------------- | ------------------ |
| Ethereum, Darwinia, Crab Smart Chain, Crab Parachain | RING, KTON, CRAB, xRING | Helix(v1) | Light Client       |
| Ethereum, Crab Smart Chain, Heco, Polygon, Optimism, Avalanche, BNB Chain, Astar, Arbitrum   |  USDT, USDC, BUSD, RING  | cBridge  |External validators|


# Bridge Aggregation
## Celer cBridge
 Helix supported cBridge from version 4.0.2(released on Aug 2 2022)

 Celer cBridge is a decentralized and non-custodial asset bridge that supports 110+ tokens across 30+ blockchains and layer-2 rollups. It use State Guardian Network called SGN to verify bridge event. And it also supports generic across chains messages.
 We support cBridge aggregation for the following reasons
 * It has deep liquidity to support much larger transfer sizes.
 * It's easy to use, single click to transfer cross chain and only one more click to refund.
 * cBridge is built on top of Celer IM, which support a hybrid model to provide higher security according to different scenarios.
 * The costs are not very high.

Although we believe that cBridge is a quality security asset bridge due to the above analysis, Helix only provides access to the bridge and users should be aware of their own security risks when choosing a bridge.

Official Website: https://www.celer.network

Twitter: https://twitter.com/CelerNetwork

Github: https://github.com/celer-network

## Cross-Consensus Messaging (XCM)
Helix has integrated XCM function since version 4.2.0（released on Aug 24 2022)    

XCM is a language for building innovative new cross-chain applications and services. Polkadot sets the standard with XCM, a powerful format for secure messaging across Polkadot-native blockchains (called parachains) and with external networks via bridges.
We integrate XCM for the following reasons: 

* **Secure & trustless**: Messages between parachains share the same high security as the entire network, and do not require funds to be deposited with centralized and vulnerable third-party custodians.
* **Cross-consensus**: XCM works not just between different blockchains but also between smart contracts on different virtual machines, between Substrate pallets, and over bridges. It can even connect networks built on different consensus mechanisms.
* **Affordable Fee Cost**   

More information can be found in [Polkadot's Wiki](https://wiki.polkadot.network/docs/learn-xcm)