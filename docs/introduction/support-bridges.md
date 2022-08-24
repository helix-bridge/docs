---
id: supported_bridges
sidebar_position: 2
sidebar_label: Supported Bridges
---

# Overview

|  Chains Pair                  | Token Protocol | Message Protocol | Tech               |
| ----------------------------- | -------------- | ---------------- | ------------------ |
| Darwinia <\> Crab Smart Chain | Helix(v1)      | Darwinia         | Light Client       |
| Ethereum <\> Darwinia         | Helix(v1)      | Darwinia         | Light Client       | 
| Crab     <\> Crab Smart Chain | Helix          | Darwinia         | Direct Transaction |
| Crab     <\> Crab Parachain   | Helix          | Darwinia         | Light Client       |
| Crab Smart Chain <\> Heco     | cBridge        | cBridge          | External validators|
| Crab Smart Chain <\> Polygon  | cBridge        | cBridge          | External validators|
| Crab Smart Chain <\> Ethereum | cBridge        | cBridge          | External validators|
| Heco <\> Ethereum             | cBridge        | cBridge          | External validators|
| Heco <\> Polygon              | cBridge        | cBridge          | External validators|
| Ethereum <\> Polygon          | cBridge        | cBridge          | External validators|
| Optimism <\> Ethereum         | cBridge        | cBridge          | External validators|
| Optimism <\> Polygon          | cBridge        | cBridge          | External validators|
| Optimism <\> Avalanche        | cBridge        | cBridge          | External validators|
| Optimism <\> BNB Chain        | cBridge        | cBridge          | External validators|
| Optimism <\> Crab Smart Chain | cBridge        | cBridge          | External validators|
| Astar <\> Crab Smart Chain    | cBridge        | cBridge          | External validators|
| Astar <\> Avalanche           | cBridge        | cBridge          | External validators|
| Astar <\> BNB Chain           | cBridge        | cBridge          | External validators|
| Astar <\> Ethereum            | cBridge        | cBridge          | External validators|
| Astar <\> Arbitrum            | cBridge        | cBridge          | External validators|
| Avalanche <\> Arbitrum        | cBridge        | cBridge          | External validators|
| Avalanche <\> Crab Smart Chain| cBridge        | cBridge          | External validators|
| Avalanche <\> Ethereum        | cBridge        | cBridge          | External validators|
| Avalanche <\> Polygon         | cBridge        | cBridge          | External validators|
| Avalanche <\> BNB Chain       | cBridge        | cBridge          | External validators|
| BNB Chain <\> Ethereum        | cBridge        | cBridge          | External validators|
| BNB Chain <\> Polygon         | cBridge        | cBridge          | External validators|

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

Official: Website https://www.celer.network

Twitter: https://twitter.com/CelerNetwork

Github: https://github.com/celer-network

