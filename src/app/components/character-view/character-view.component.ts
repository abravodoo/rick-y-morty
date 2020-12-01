import { Component, OnInit } from '@angular/core';
import { ResultEpisode} from 'src/app/models/Episode';
import { DataProviderService } from '../../shared/service/data-provider.service';
import {Router, ActivatedRoute} from '@angular/router'
import { ResultCharacter } from 'src/app/models/Character';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  characterData : ResultCharacter;
  episodeList: ResultEpisode[];

  constructor( private dataService: DataProviderService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.dataService.getOneCharacter(params.id).subscribe(
      dataService => {
        this.characterData = dataService;
        }
    );
  }

}
