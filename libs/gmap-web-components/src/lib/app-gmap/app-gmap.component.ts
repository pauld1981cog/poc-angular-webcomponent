import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AppGmapMarkerModel } from './models/app-gmap-marker-model';
import { CommonFlightDetailsModel } from 'libs/common-web-components/src/lib/common-flight-details/models/common-flight-details-model';


@Component({
  selector: 'app-gmap',
  templateUrl: './app-gmap.component.html',
  styleUrls: ['./app-gmap.component.scss'],
})
export class AppGmapComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerList: AppGmapMarkerModel[] = [];
  flightDtlModel: CommonFlightDetailsModel = new CommonFlightDetailsModel();

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      var marker: AppGmapMarkerModel = {
        position: event.latLng.toJSON(),
        icon: 'assets/flight-marker.png'
      }     
      this.markerList.push(marker);
    }
  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) {
      this.flightDtlModel = new CommonFlightDetailsModel();
      this.flightDtlModel.id = 'FlightID10001';
      this.flightDtlModel.fNo = 'FlithtNo20001';
      this.flightDtlModel.name = 'Flight Name 30001'
      this.flightDtlModel.desc = 'Description of FlithtNo20001';
      this.flightDtlModel.type = 'Passenger Flight';
      this.infoWindow.open(marker);
    }
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
