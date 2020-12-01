import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultEpisode, InfoEpisode } from 'src/app/models/Episode';
import { DataProviderService } from '../../shared/service/data-provider.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  
  constructor(private dataService: DataProviderService,
    private activatedRouter: ActivatedRoute){  }

  episodesInfo: InfoEpisode;
  episodesList: ResultEpisode[];

  ngOnInit(): void {
    const params =  this.activatedRouter.snapshot.params;
    let page = '1';
    if (params != {})
      page = params.page;

    this.dataService.getEpisodes(page).subscribe(
      dataService => {

        this.episodesInfo = dataService.info;
        this.episodesList = dataService.results;

        console.log(this.episodesInfo);
        console.log(this.episodesList);
        
      }
    );
  }
}
