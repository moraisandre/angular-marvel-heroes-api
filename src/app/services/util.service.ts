import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConfig } from '../models/api-config.model';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getAPIConfig(): ApiConfig {
    let ts = new Date().getTime();
    let hashApi = crypto.MD5(ts+environment.pvtkey+environment.pubkey);

    let config: ApiConfig = {
      apikey: environment.pubkey,
      timestamp: ts.toString(),
      hash: hashApi.toString()
    };

    return config;
  }

  cropText(text: string, limit: number) {
    return text.slice(0, limit) + (text.length > limit ? "..." : "");
  }
}
