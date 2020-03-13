import { Component, OnInit } from "@angular/core";
import { Song, Tab } from "../../models/Util";
import { $songs } from "../../utils/static";
import { remove } from "lodash";

@Component({
  selector: "app-playlists",
  templateUrl: "./playlists.component.html",
  styleUrls: ["./playlists.component.scss"]
})
export class PlaylistsComponent implements OnInit {
  songs: Song[] = $songs;

  constructor() {}

  ngOnInit(): void {
    // this.songs = $songs;
  }

  removeItemFunc($key) {
    remove(this.songs, song => song.id === $key);
  }
}
