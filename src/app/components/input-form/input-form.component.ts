import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { $songs, $formInputs, $tabs, randomStr } from "../../utils/static";
import { Song, Tab, UtlFormInput } from "../../models/Util";
import { keyBy, mapValues, chain, flatMap } from "lodash";

@Component({
  selector: "app-input-form",
  templateUrl: "./input-form.component.html",
  styleUrls: ["./input-form.component.scss"]
})
export class InputFormComponent implements OnInit {
  songs: Song[] = $songs;
  tabs: Tab[] = $tabs;
  formInputs: UtlFormInput[] = $formInputs;
  submitForm: FormGroup;

  constructor(private FB: FormBuilder) {
    this.submitForm = this.FB.group({
      artist: ["", [Validators.required]],
      album: ["", [Validators.required]],
      release: [
        "",
        [Validators.required, Validators.minLength(4), Validators.max(2020)]
      ],
      genres: ["", [Validators.required]],
      thumbnailUrl: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    flatMap(this.formInputs, input => {
      input.value = "";
      return input;
    });
  }

  getLoad(loadID) {
    console.log("getLoad", loadID);
  }

  addToPlaylist(inputData): void {
    console.log("inputData", inputData, this.submitForm);
    // try {
    //   const $item = chain(this.formInputs)
    //     .keyBy("inputId")
    //     .mapValues("value")
    //     .value();

    //   this.songs.push({
    //     id: randomStr(),
    //     imgUrl: $item.thumbnailUrl,
    //     artist: $item.artist,
    //     album: $item.album,
    //     release: $item.release,
    //     genres: $item.genres.split(",")
    //   });

    //   flatMap(this.tabs, tab => {
    //     tab.isActive = !tab.isActive;
    //     return tab;
    //   });
    // } catch (error) {
    //   console.log(error);
    //   alert("error ahs been fired");
    // }
  }

  // onSubmit(customerData) {
  //   // Process checkout data here
  //   this.submitForm.reset();

  //   console.warn("Your order has been submitted", customerData);
  // }
}
