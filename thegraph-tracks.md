Tracks
Why Use Subgraphs
Subgraphs provide efficient, queryable access to on-chain data, enabling dApps to deliver real-time, structured information without directly querying the blockchain. They reduce complexity, improve performance, and are essential for scalable applications.

- First 100,000 queries are free per month.
  Why Use the Token API
  The Token API offers a simple and reliable way to fetch token metadata (e.g. name, symbol, decimals, price) without needing to index each token manually. It’s especially useful on mainnet, where most tokens are registered and supported.
- First 4 million queries are free (25$ worth)

Best Development of a Subgraph
Acceptance Criteria
Create a new Subgraph
Developers must create a Subgraph that indexes on-chain data of supported or unsupported networks. This data must be used in your application.
Developers must provide a GitHub repository with the source code of the Subgraph.
(Nice-to-have) Developers can also convert their Subtreams into Subgraphs for more complex applications.
Use an existing Subgraph
Developers must link to the Subgraph they are using from the mainnet or testnet explorer.
(Bonus) Developers can build and convert Substreams into Subgraphs.
Developers must clearly state where they are using the Subgraph in their source code.
(Bonus) Use Token API
Developers must clearly state where and how they are using the Token API in their source code.
Developers must use the Token API to fetch token metadata (e.g., symbol, name, decimals, price) and demonstrate its usage within your application logic.
(Optional) Fallback to a published Subgraph for token metadata if Token API is not applicable on the selected network.
Prizes
🥇1st Prize: 1000 USD
🥇2nd Prize: 500 USD
🥇3rd Prize: 250 USD
🥇4th Prize: 150 USD
🥇5th Prize: 100 USD
Resources for Developers – How to Get Started with Subgraphs & Token API
Subgraph
Subgraphs are an indexing solution provided by The Graph protocol. They allow you to efficiently query on-chain data from supported blockchains like Ethereum, Polygon, Arbitrum, and more. Subgraphs process blockchain data and make it available via GraphQL APIs for your dApp.
🔴 More about How to Build and How to Query a subgraph here
Getting Started
Install the Graph CLI

Use npm install -g @graphprotocol/graph-cli to install the CLI tools.

Set up a Graph Node or use Hosted Service

You can deploy your Subgraph to the Hosted Service or Subgraph Studio for mainnet support.

Initialize your Subgraph

Use graph init to scaffold a new Subgraph project.

Choose your data source

You can:
Index smart contract events and calls

Use templates for dynamic data sources

Connect to mainnet or testnets

Deploy your Subgraph

Push your Subgraph to the Hosted Service or Subgraph Studio using graph deploy.

Query via GraphQL

Once deployed, access your Subgraph through a GraphQL endpoint to fetch structured blockchain data.

Token API
The Token API provides a unified and simplified way to retrieve token metadata like symbol, name, decimals, and price. It’s especially useful when working with tokens across multiple DeFi and NFT protocols.
🔴 More info and examples here
Getting Started
Available on Mainnet

The Token API is most effective on mainnet where tokens are verified and supported at scale.

No indexing required

Unlike Subgraphs, you don’t need to write mapping logic, the Token API returns pre-indexed metadata via a standard API.

Fetch data programmatically

Use the API to retrieve token info in your backend or frontend logic:

GET /token/:address

Returns name, symbol, decimals, and (if available) price.

Combine with Subgraphs

Token API works well alongside Subgraphs. We can use Subgraphs for contract-specific data and the Token API for universal token metadata.

Document usage in your code

Clearly comment and document where the Token API is called in your application.

Judging Criteria
The Graph’s judges will consider the following when reviewing your submission:
Complexness of the Subgraph (e.g. is it auto-generated with graph init?)
Usage and/or consumption of Subgraph/Token API
Innovation of the product/concept
Clarity in business model
UI/UX quality and clarity
Real-world usefulness and market potential
User impact
