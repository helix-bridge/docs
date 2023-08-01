---
id: liquidate_node
sidebar_position: 4
sidebar_label: Protocol(Liquidate Node) 
---

# Liquidate Node
Liquidate Node is a cross-chain protocol for tokens based on generic bridge messages, with the advantages of fast, low cost, security and no verification. The implementation principle is that after the user locks token on the source chain, Liquidate Node transfers its own token on the target chain to the user and holds the proof of transfer to unlock the token from the source chain via bridge message, completing the cross-chain swap of tokens.

## Observational view
For the Liquidate Node, it can see the user locking the token on the source chain and does not need to prove it to anyone else. The locking of a token on the source chain is irrevocable once it has happened, so the Liquidate Node can assume that the event will eventually prove valid and that the next action can be done on the target chain without the use of bridge messages.

##  Liquidate Provider
Liquidate Node serves as a liquidity provider, providing temporary loans of its tokens to the system when users need to make cross-chain transfers. These loans are then transferred to the user's receiving account on the target chain, based on the user's asset lock information on the source chain. Once these transfers are completed, ownership of the locked asset is generated on the target chain. The Liquidate Node then uses bridge messages to transfer the proof from the target chain back to the source chain, in order to extract the locked assets. This operation can be performed in bulk.

As an incentive, the Liquidate Node can withdraw the fee paid by the user when redeeming the locked asset.

## Token Bridge Relayer
In order to provide liquidity, the Liquidate Node must monitor user transfer events and send transactions on the target chain to complete the user transfer process. This process is known as relay and typically takes between 1 to 3 minutes, depending on the relay's estimate of the source chain block confirmation time and the efficiency of the indexing service used to obtain the necessary data. Liquidate Node can utilize a relay client, which is available on [Github](https://github.com/helix-bridge/relayer).

Helix provides an official indexing service to provide API access for relays. For security and decentralisation, relayers can also build their own indexing service to provide a secure and reliable API. Please remember not to trust any services provided by third parties at any time.

## Transaction Atomicity
* After the user locks token, user's cross-chain transfer transaction ends when the Liquidate Node completes the relay process by send tokens to user's account on target chain.
* After the user locks token, no Liquidate Node assists in the relay process, at which point the user can retrieve the locked asset with a reverse message on the target chain and the transaction finished.

## Security
The role of the Relayer is critical to the stability of the Token Bridge, but does not affect the security of it, the security of user funds is only related to the protocol. The protocol itself does not hold user tokens and once relayer has completed the exchange of token, the user's tokens are absolutely secure; the security of Relayer's liquidate funds in transit (locked as withdrawn assets) is dependent on the underlying generic messaging protocol used, but this messaging does not affect the security of the relayer's other tokens not locked.

## Run a relayer
Before running a relayer, you need to prepare an account, deposit the corresponding tokens, and call the "approve" interface of the token contract to authorize the bridge contract.
Please refer to [README](https://github.com/helix-bridge/relayer/blob/main/README.md) to get the detail of staring the relay client.
Note that since the private key needs to be written to the configuration file, please run your client program in a secure environment.

