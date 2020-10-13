import {BigNumber} from 'ethers';

export class CvModel {
  id: number;
  ipfsAddress: string;
  owner: string;
  file?: File;

  constructor(id: number, ipfsAddress: string, owner: string, file?: File) {
    this.id = id;
    this.ipfsAddress = ipfsAddress;
    this.owner = owner;
    this.file = file;
  }
}

export interface EthereumCvModel {
  id: BigNumber;
  ipfsAddress: string;
  owner: string;
}
