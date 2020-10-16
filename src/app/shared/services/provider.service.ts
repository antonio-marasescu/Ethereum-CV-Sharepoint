import {ethers} from 'ethers';
import {Inject, Injectable, InjectionToken} from '@angular/core';

export const MetamaskWeb3Provider = new InjectionToken('Metamask Web3 provider', {
  providedIn: 'root',
  factory: () => (window as any).web3.currentProvider
});

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends ethers.providers.Web3Provider {
  constructor(@Inject(MetamaskWeb3Provider) web3Provider) {
    super(web3Provider);
  }
}
