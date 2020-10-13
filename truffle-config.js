module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  },
  contracts_directory: "./src/app/ethereum/contracts",
  contracts_build_directory: "./src/app/ethereum/abis",
  migrations_directory: "./src/app/ethereum/migrations",
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
