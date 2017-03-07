const L = require('leaflet')
require('whatwg-fetch') // Monkey-patch global environment with fetch
require('drmonty-leaflet-awesome-markers') // Monkey-patch Leaflet
const lat = 47.4979
const lon = 19.0402
const map = L.map('mapcanvas').setView([lat, lon], 15)

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map)

let baseUrl = 'http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/bicycle-rental.json'
let httpsProxy = 'https://cors-anywhere.herokuapp.com/'

window.fetch(httpsProxy + baseUrl)
  .then((data) => data.json())
  .then((data) => {
    const locs = data.data.list
    locs.forEach((location) => {
      let colour = 'red'

      if (location.bikes > 3) {
        colour = 'green'
      } else if (location.bikes > 1) {
        colour = 'yellow'
      }

      let bikeMarker = L.AwesomeMarkers.icon({
        icon: 'bicycle',
        prefix: 'fa',
        markerColor: colour
      })
      let marker = L.marker([location.lat, location.lon], {icon: bikeMarker}).addTo(map)
      marker.bindPopup('<h1>' + location.name + '</h1><div style="float: right" id="directions"><a href="https://maps.google.com/maps?saddr=here&daddr=' + location.lat + ',' + location.lon + '&dirflg=w" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i></a></div><strong>Available:</strong> ' + location.bikes + '<br /><strong>Capacity:</strong> ' + location.spaces)
    })
  })
  .catch((err) => {
    console.error(err)
  })
