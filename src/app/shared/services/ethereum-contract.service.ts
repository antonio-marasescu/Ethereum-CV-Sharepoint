import {Inject, Injectable} from '@angular/core';
import {forkJoin, from, Observable, ReplaySubject} from 'rxjs';
import {MetamaskWeb3Provider, ProviderService} from './provider.service';
import {JsonRpcSigner} from '@ethersproject/providers/lib/json-rpc-provider';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EthereumContractService {
  private _initialized = false;
  private _accounts: string[];
  private _mainAccount: string;
  private _signer: JsonRpcSigner;
  private _networkId: string;
  public serviceInitialized: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(@Inject(MetamaskWeb3Provider) private web3Provider, private providerService: ProviderService) {
  }

  public setup(): Observable<any> {
    this._initialized = false;
    this._signer = this.providerService.getSigner();
    return from(this.web3Provider.enable()).pipe(
      mergeMap(() => forkJoin(
        [
          from(this.providerService.send('net_version', [])),
          from(this.providerService.listAccounts())]
        )
          .pipe(
            map(([networkId, accounts]) => {
              this._networkId = networkId;
              this._accounts = accounts;
              if (accounts && accounts.length > 0) {
                this._mainAccount = accounts[0];
              }
              this._initialized = true;
              this.serviceInitialized.next(true);
            })
          )
      )
    );
  }

  public get isInitialized(): boolean {
    return this._initialized;
  }

  public get mainAccount(): string {
    return this._mainAccount;
  }

  public get accounts(): string[] {
    return this._accounts;
  }

  public get signer(): JsonRpcSigner {
    return this._signer;
  }

  public get networkId(): string {
    return this._networkId;
  }
}
