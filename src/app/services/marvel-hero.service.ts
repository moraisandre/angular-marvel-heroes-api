import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConfig } from '../models/api-config.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroService {

  config = this.utilService.getAPIConfig();

  constructor(
    private http: HttpClient,
    private utilService: UtilService) { }

  searchCharacters(name: string) {
    return this.http.get<any[]>(`${environment.urlbase}/characters?ts=${this.config.timestamp}&apikey=${this.config.apikey}&hash=${this.config.hash}&nameStartsWith=${name}`);
  }

  getCharacterDetail(id: string) {
    return this.http.get<any>(`${environment.urlbase}/characters/${id}?ts=${this.config.timestamp}&apikey=${this.config.apikey}&hash=${this.config.hash}`);
  }

  getCharacterComics(id: string) {
    return this.http.get<any>(`${environment.urlbase}/characters/${id}/comics?ts=${this.config.timestamp}&apikey=${this.config.apikey}&hash=${this.config.hash}`);
  }
}
