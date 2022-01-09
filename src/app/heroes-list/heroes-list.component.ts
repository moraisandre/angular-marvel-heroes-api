import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  @Input() characters: any = [];

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
  }

  cropText(text: string, limit = 150) {
    return this.utilService.cropText(text, limit);
  }

}
