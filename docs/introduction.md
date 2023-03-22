---
id: introduction
sidebar_position: 2
sidebar_label: Introduction
---

# Introduction

## Token Protocol
Helix uses two main protocols to implement cross-chain token transfers. One is the mapping token protocol and the other is the EOA account token swap protocol.

### Mapping Token Protocol
For assets that do not exist on the target chain, Helix uses the mapping token protocol to issue mapped token on the target chain. This protocol guarantees that each mapped token on the target chain corresponds to a locked original token on the source chain as an endorsement. The right to issue the mapped token and the right to unlock the backed token is vested in the protocol itself. And the ratio of the two tokens is 1:1 at all time. See section [mapping token protocol](https://docs.helixbridge.app/mapping_token_protocol) for details of the agreement.

### Liquidate Node Protocol
For tokens that already exist on the target chain, which may be mapped by other bridges or by helix, it allows the use of EOA token swap protocol to transfer token. This protocol occurs between two EOA accounts, where the user of the source chain locks original tokens and the Liquidate Provider transfer token to the user on the taget chain. After a certain number of transactions have accumulated, the Liquidate Provider uses the bridge message to retrieve the original token locked on the source chain. This protocol has the advantages of low cost, high speed, and security of the user's assets, please refer to section [liquidate node protocol](https://docs.helixbridge.app/liquidate_node) for details.

## Bridge Aggregation
Helix aggregates some of the best token bridges and provides a unified protal for users to choose freely.

### Cross-Consensus Messaging (XCM)
Helix has integrated XCM function since version 4.2.0（released on Aug 24 2022)    

XCM is a language for building innovative new cross-chain applications and services. Polkadot sets the standard with XCM, a powerful format for secure messaging across Polkadot-native blockchains (called parachains) and with external networks via bridges.
We integrate XCM for the following reasons: 

* **Secure & trustless**: Messages between parachains share the same high security as the entire network, and do not require funds to be deposited with centralized and vulnerable third-party custodians.
* **Cross-consensus**: XCM works not just between different blockchains but also between smart contracts on different virtual machines, between Substrate pallets, and over bridges. It can even connect networks built on different consensus mechanisms.
* **Affordable Fee Cost**   

More information can be found in [Polkadot's Wiki](https://wiki.polkadot.network/docs/learn-xcm)

### Celer cBridge
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

### L2Bridge
Layer2 official bridge, Helix integration from L1 to L2 direction token transfer, currently has access to the Arbitrum L2Bridge.

