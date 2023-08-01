---
id: fee
sidebar_position: 7
sidebar_label: Fee
---
# Fee
## Fee Structure：
The Helix bridge fee includes two parts:

|  Fees | Explanation | Tip |
| ------------------------| ----------- | -----------|
| Gas Fee                            | the transaction fee paid in your wallet to miners.                   | This is just like any transaction on a blockchain network.       |   
| Msg Bridging Fee| the fee paid to bridging provider for relaying the msg across chains | The cost of this part varies according to the integrated bridge. |        
Helix doesn't charge any more fees than these two parts from a user.   
The only fees you need to pay are Gas fees (for transactions), and Msg Bridging fees (fee paid to bridging provider).  

- **Msg Bridging Fee for each type of bridge**



|  From-To                        | Provider | Pay with_token | Fee cost |
| -----------------------------| -------------- | ----------------| ----------------|
| Darwinia <\>Crab Smart Chain           Crab Chain <\> Crab Parachain | Helix                  | NativeToken      | Prices are totally determined by the market `FeeMarket`. For specific msg bridging fees of the transactions,  refer to the interface display of the Helix App. |  
|Crab Chain<\>Crab Smart Chain| Helix | - | free |   
|Ethereum → Darwinia *| Helix | RING | 10 RING per transaction |   
|Darwinia → Ethereum *| Helix | RING | 50 RING per transaction |   
|Heco<\> Crab Parachain| cBridge |   |    |    

- Note: Since transactions (Ethereum<\>Dariwinia) are involved on the Ethereum network, there will be a relatively high cost of gas fee to pay. The users can decide when to initiate the transaction based on the real-time gas price on the Ethereum chain.     

  You can calculate Ethereum gas fees by multiplying the ** gas limit** of a transaction with the existing **gas price**.   
`gas Fee = gas limit * gas price`   

  **Getting the gas limit**

  |  from-to                        |  gas limit | 
| -----------------------------| -------------- |
|Ethereum → Darwinia |100,000～130,000 |
|Darwinia → Ethereum |500,000~600,000 |

  **Getting the gas price**

  If you are on Ethereum mainnet you can check [Etherscan's gas tool](https://etherscan.io/gastracker) to estimate today's gas price. Please note the gas price fluctuates; always refer to the gas station to see the current gas prices. (1 gwei=0.000000001 ETH)  

  So with all that in mind, here is an example of a basic gas fee calculation.   

  Let’s say that Alice wants to make a transaction from Ethereum to Darwinia on Helix.
The current gas price is 18 gwei. The live Ethereum price today is $1,000 USD per ETH.

  The gas calculation formula is: 130,000 (gas limit) \* 18 (gwei) \* 0.000000001 (ETH) =0.00234 ETH   
or you can say that Alice has to pay US$2.34 for the transaction from Ethereum to Darwinia.
