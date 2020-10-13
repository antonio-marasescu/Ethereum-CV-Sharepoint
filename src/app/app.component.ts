import {Component, OnInit} from '@angular/core';
import {EthereumContractService} from './shared/services/ethereum-contract.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  ethServiceInitialized$: Observable<boolean>;

  constructor(private ethService: EthereumContractService) {
  }

  ngOnInit(): void {
    this.ethServiceInitialized$ = this.ethService.serviceInitialized.asObservable();
    this.ethService.setup().subscribe();
  }
}
