import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map} from 'leaflet';
import { tileLayer} from 'leaflet';
@Component({
  selector: "app-localisation",
  templateUrl: "./localisation.page.html",
  styleUrls: ["./localisation.page.scss"],
})
export class LocalisationPage implements OnInit, AfterViewInit {
  map: Map;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.map = new Map("mapId").setView([17.385, 78.4867], 10);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );
  }
}
