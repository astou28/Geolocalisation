import { Component, OnInit, OnDestroy } from "@angular/core";
import * as Leaflet from "leaflet";
@Component({
  selector: "app-localisation",
  templateUrl: "./localisation.page.html",
  styleUrls: ["./localisation.page.scss"],
})
export class LocalisationPage implements OnInit, OnDestroy {
  map: Leaflet.Map;
  constructor() {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = Leaflet.map("mapId").setView([14.693425, -17.447938], 10);
    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "edupala.com © Angular LeafLet",
    }).addTo(this.map);
  }

  ngOnDestroy() {
    this.map.remove();
  }
}
