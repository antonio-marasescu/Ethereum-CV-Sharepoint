import {Inject, Injectable, InjectionToken} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import * as IpfsHttpClient from 'ipfs-http-client';
import {IpfsCreateResponseModel} from '../models/ipfs-create-response.model';

export const IpfsToken = new InjectionToken('The IPFS Token', {
  providedIn: 'root',
  factory: () => {
    try {
      return new IpfsHttpClient({
        host: 'localhost', // ipfs.infura.io
        port: '5001',
        protocol: 'http' // https
      });
    } catch (err) {
      console.log('Error', err);
      throw new Error('Unable to access IPFS node daemon on Infura network');
    }
  }
});

@Injectable({
  providedIn: 'root'
})
export class IpfsService {
  constructor(@Inject(IpfsToken) private ipfs) {
  }

  public addFile(file: File): Observable<string> {
    const data = {
      path: file.name,
      content: file
    };
    return from(this.ipfs.add(data)).pipe(
      map((res: IpfsCreateResponseModel) => res.cid.string)
    );
  }

  getFile(hash: string): Observable<Blob> {
    return from(new Promise((async resolve => {
      const chunks = [];
      for await (const chunk of this.ipfs.cat(hash)) {
        chunks.push(chunk);
      }
      resolve(chunks);
    }))).pipe(
      switchMap((bufferArray: Uint8Array[]) => {
        const fileBlob = new Blob(bufferArray);
        return of(fileBlob);
      })
    );
  }
}
