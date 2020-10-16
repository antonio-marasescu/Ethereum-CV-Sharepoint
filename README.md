# Ethereum-CV-Sharepoint
An introduction application to using Ethereum with Angular, Truffle, Ganache and IPFS. It will represent a sharepoint for saving and sharing 
files (in our case CV's) onto the blockchain. More specifically storing their hash in the contract and saving the actual file onto IPFS.

## Prerequisites
- Node.js
- Docker

## Setup
1. clone the repository `git clone https://github.com/antonio-marasescu/Ethereum-CV-Sharepoint.git`
2. run `npm install`
3. run `docker-compose up` in the `docker` folder
4. run `npm run migrate --hard` to deploy and compile the contracts
5. run `npm run ng` to start Angular

## For Issues regarding CORS when using IPFS on docker
#### After `docker-compose` use in the container console the following commands:
    ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080
    ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'
    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["http://localhost:4200"]'

## Acknowledgements
- IPFS Docker-Compose: https://github.com/rongfengliang/ipfs-docker-compose
- IPFS and Angular: https://medium.com/better-programming/manage-the-ipfs-image-uploading-with-angular-ngrx-v8-61aaaf0be0d5
- Ganache Compose: https://github.com/digitaldonkey/ganache-cli-docker-compose/blob/master/docker-compose.yml

