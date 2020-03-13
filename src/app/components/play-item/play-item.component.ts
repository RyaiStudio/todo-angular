import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Song } from "../../models/Util";

@Component({
  selector: "app-play-item",
  templateUrl: "./play-item.component.html",
  styleUrls: ["./play-item.component.scss"]
})
export class PlayItemComponent implements OnInit {
  @Input() song: Song;
  @Output() removeItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
