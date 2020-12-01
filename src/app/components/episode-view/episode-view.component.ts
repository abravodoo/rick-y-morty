import { Component, HostBinding, OnInit } from '@angular/core';
import { ResultEpisode} from 'src/app/models/Episode';
import { DataProviderService } from '../../shared/service/data-provider.service';
import {Router, ActivatedRoute} from '@angular/router'
import { ResultCharacter } from 'src/app/models/Character';

@Component({
  selector: 'app-episode-view',
  templateUrl: './episode-view.component.html',
  styleUrls: ['./episode-view.component.css']
})
export class EpisodeViewComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(
    private dataService: DataProviderService, 
    private activatedRoute: ActivatedRoute) { }

  episodedata : ResultEpisode;
  charactersList: ResultCharacter[];

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.dataService.getOneEpisode(params.id).subscribe(
      dataService => {
        this.episodedata = dataService;
        }
    );
    //this.charactersList = this.dataService.getCharacterFromEpisode(this.episodedata.characters)

  }
}
