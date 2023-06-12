export interface AppGmapMarkerModel {
    position: google.maps.LatLngLiteral,
    icon: string | google.maps.Icon | google.maps.Symbol
    options?: google.maps.MarkerOptions
}
