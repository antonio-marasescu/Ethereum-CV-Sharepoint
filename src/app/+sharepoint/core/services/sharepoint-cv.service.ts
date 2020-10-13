import {Injectable} from '@angular/core';
import {from, of, ReplaySubject} from 'rxjs';
// @ts-ignore
import * as CvSharepoint from '../../../ethereum/abis/CvSharepoint.json';
import {BigNumber, Contract} from 'ethers';
import {EthereumContractService} from '../../../shared/services/ethereum-contract.service';
import {catchError, map} from 'rxjs/operators';
import {CvModel, EthereumCvModel} from '../models/cv.model';
import {EventsTypes} from '../models/events.types';

@Injectable({
  providedIn: 'root'
})
export class SharepointCvService {
  private _contractNetworkAddress: string;
  private _contract: Contract = null;
  private _cvModelList: CvModel[] = [];
  public cvAddedEvent: ReplaySubject<BigNumber> = new ReplaySubject<BigNumber>();
  public cvListDataChanged: ReplaySubject<CvModel[]> = new ReplaySubject<CvModel[]>();

  constructor(private ethereumContractService: EthereumContractService) {
    this.setupService();
  }

  private setupService(): void {
    this._contractNetworkAddress = CvSharepoint.networks[this.ethereumContractService.networkId].address;
    this._contract = new Contract(this._contractNetworkAddress, CvSharepoint.abi, this.ethereumContractService.signer);
    this._contract.on(EventsTypes.CvAdded, data => this.cvAddedEvent.next(data));
    this.cvAddedEvent.asObservable().subscribe((id: BigNumber) => {
      console.log(EventsTypes.CvAdded, id.toNumber());
      this.getCvById(id.toNumber());
    });
  }

  public getCvById(cvId: number): void {
    from(this._contract.getCvById(cvId))
      .pipe(
        map(({id, ipfsAddress, owner}: EthereumCvModel) =>
          new CvModel(
            id.toNumber(),
            ipfsAddress,
            owner
          )
        ),
        catchError(() => of(null))
      )
      .subscribe(data => {
        if (data) {
          this._cvModelList = this._cvModelList.filter(x => x.id !== data.id);
          this._cvModelList.push(data);
          this.cvListDataChanged.next(this._cvModelList);
        }
      });
  }

  public addCv(ipfsAddress: string): void {
    from<string>(this._contract.addCv(ipfsAddress)).pipe(catchError(() => of(null))).subscribe();
  }

  public getCvModelList(): void {
    from(this._contract.getCvModelList())
      .pipe(
        map((data: Array<any>) => data.map(({id, ipfsAddress, owner}: EthereumCvModel) =>
          new CvModel(
            id.toNumber(),
            ipfsAddress,
            owner
          ))
        ),
        catchError(() => of(null))
      )
      .subscribe(data => {
        if (data) {
          this._cvModelList = data;
          this.cvListDataChanged.next(data);
        }
      });
  }
}
