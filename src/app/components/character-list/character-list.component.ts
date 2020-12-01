import { Component, HostBinding, OnInit } from '@angular/core';
import { InfoCharacter, ResultCharacter } from 'src/app/models/Character';
import { DataProviderService } from '../../shared/service/data-provider.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(private dataService: DataProviderService) { }

  characterInfo: InfoCharacter;
  characterList: ResultCharacter[];
  ngOnInit(): void {
    this.dataService.getCharacters().subscribe(
      dataService => {

        this.characterInfo = dataService.info;
        this.characterList = dataService.results;

        console.log(this.characterInfo);
        console.log(this.characterList);
        
      }
      );
    }
  }
  