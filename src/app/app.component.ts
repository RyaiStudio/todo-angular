import { Component } from "@angular/core";

import { Tab } from "./models/Util";
import { $tabs } from "./utils/static";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "todo-app";
  tabs: Tab[] = $tabs;

  changeTab({ id }) {
    this.tabs.map(tab => {
      tab.isActive = tab.id == id ? true : false;
      return tab;
    });
  }
}
