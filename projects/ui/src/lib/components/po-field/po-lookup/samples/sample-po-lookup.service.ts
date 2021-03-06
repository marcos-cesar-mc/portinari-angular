import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@portinari/portinari-ui';

@Injectable()
export class SamplePoLookupService implements PoLookupFilter {

  private url = 'https://thf.totvs.com.br/sample/api/new/heroes';

  constructor(private httpClient: HttpClient) { }

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { page, pageSize } = filteredParams;
    const params = { ...filteredParams, page: page.toString(), pageSize: pageSize.toString() };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(`${this.url}/${value}`);
  }

}
