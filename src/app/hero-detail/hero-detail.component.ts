import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelHeroService } from '../services/marvel-hero.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroDetailComponent implements OnInit {

  character: any;
  comics: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilService: UtilService,
    private marvelHeroService: MarvelHeroService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this.marvelHeroService.getCharacterDetail(id)
        .subscribe((response: any) => {
          
          this.character = response.data.results[0];
        });

        
      this.marvelHeroService.getCharacterComics(id)
        .subscribe((response: any) => {
          this.comics = response.data.results;
        });


      });
  }

  back() {
    this.router.navigate([`hero-search`]);

  }

  cropText(text: string, limit = 150) {
    return this.utilService.cropText(text, limit);
  }

}
