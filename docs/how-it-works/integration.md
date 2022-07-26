---
id: integration
sidebar_position: 3
sidebar_label: Integration
---

# Integration

## Self-developed Token Bridge

Helix implements Token Bridge Protocol based on available message bridges.
The Token Bridge Protocol is designed to ensure the atomicity of the bridge asset transactions across the chain. The original token across the chain are hosted in the Helix Backing module, which guarantees the security of the original token hosted and governed by the protocol itself, on the other hand, we use Helix Dao to ensure the security of the assets in case of extreme scenarios.

The security of the messaging bridge service is also critical to the Helix Asset Bridge, so we choose the messaging bridge service after a long observation and audit. For example, we have a long-term partnership with the LCMP messaging bridge implemented by [Darwinia](https://darwinia.network/), which is a light client-based decentralized messaging bridge. Helix will continue to look for low cost, secure and fast messaging services, seeking a better user experience for user assets across the chain.

## Third-Party Token Bridge

As a bridge aggregator, Helix will also integrate excellent third-party asset bridges for users to choose from. For many third-party bridges, Helix will initially filter out some safe and reliable asset bridge integrations and list their basic parameters such as cost and time consumption as a reference for users to choose.
For the third-party token bridge, Helix only provides its transaction portal and does not host the user's assets, so the final asset security is still guaranteed by the third-party asset bridge itself.
