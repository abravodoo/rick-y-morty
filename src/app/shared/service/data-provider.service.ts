import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, ResultCharacter } from '../../models/Character';
import { Episode, ResultEpisode } from '../../models/Episode';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  API_URI = 'https://rickandmortyapi.com/api';

  constructor(private httpclient: HttpClient) { 
    console.log('Data Provider OK!!');
  }

  getEpisodes(page: string = '1'){
    return  this.httpclient.get<Episode>(`${this.API_URI}/episode?page=${page}`);
  }

  getOneEpisode(id: string){
    console.log(`${this.API_URI}/episode/${id}`);
    return this.httpclient.get<ResultEpisode>(`${this.API_URI}/episode/${id}`);
  }

  getCharacters(page: string = '1'){
    return this.httpclient.get<Character>(`${this.API_URI}/character?page=${page}`);
  }

  getOneCharacter(id: string){
    return this.httpclient.get<ResultCharacter>(`${this.API_URI}/character/${id}`);
  }

  getCharacterFromEpisode(episodeId: string[]){
    var character: ResultCharacter[] = [];
    for (let i=0;i<episodeId.length;i++)
      this.getOneCharacter(episodeId[i]).subscribe(
          DataProviderService => {
              character.push(DataProviderService);
          }
      );
    console.log(character);
    return character;
  }
}

