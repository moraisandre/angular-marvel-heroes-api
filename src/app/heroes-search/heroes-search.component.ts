import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { MarvelHeroService } from '../services/marvel-hero.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.scss']
})
export class HeroesSearchComponent implements OnInit {

  characterName = '';

  charactersArray = [];
  loading = false;

  constructor(private marvelHeroService: MarvelHeroService) {
   }

  ngOnInit(): void {
    this.charactersArray = localStorage['characters'] ? JSON.parse(localStorage['characters']) : [];
  }

  search() {
    this.loading = true;
    this.cleanCharactersArray();

    this.marvelHeroService.searchCharacters(this.characterName)
    .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        if(res?.data?.results) {
          this.charactersArray = res.data.results;
          localStorage.setItem('characters', JSON.stringify(this.charactersArray));
        }
      });
  }

  cleanCharactersArray() {
    this.charactersArray = [];
    localStorage.setItem('characters', '');
  }

}
