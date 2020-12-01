import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataProviderService } from './shared/service/data-provider.service';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { EpisodeViewComponent } from './components/episode-view/episode-view.component';
import { CharacterViewComponent } from './components/character-view/character-view.component';


const routes: Route[] = [
  {path: 'episodes' , component: EpisodeListComponent},
  {path: 'characters', component: CharacterListComponent},
  {path: 'episodes/:page' , component: EpisodeListComponent},
  {path: 'episode/:id', component: EpisodeViewComponent},
  {path: 'characters/:page', component: CharacterListComponent},
  {path: 'character/:id', component: CharacterViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    EpisodeListComponent,
    CharacterListComponent,
    EpisodeViewComponent,
    CharacterViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
