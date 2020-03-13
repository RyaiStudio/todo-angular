import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PlaylistsComponent } from "./components/playlists/playlists.component";
import { PlayItemComponent } from "./components/play-item/play-item.component";
import { InputFormComponent } from "./components/input-form/input-form.component";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlayItemComponent,
    InputFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
