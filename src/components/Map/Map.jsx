import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css'

const Map = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(53.6880);
  const [lat, setLat] = useState(32.4279);
  const [zoom, setZoom] = useState(7);

  useEffect(() => {

    if (map.current) return;
    map.current = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoia2FtMjBpIiwiYSI6ImNsMW1pYXlxajBrNjQza21tZWprNHo4MGUifQ.F7lC7s2zqONHj5WccpfWuQ',
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = document.createElement('div');
    marker.className = 'marker';
    new mapboxgl.Marker(marker).setLngLat([53.6880, 32.4279]).addTo(map.current)

    map.current.addControl(new mapboxgl.NavigationControl());
    
  })
  return (
    <>
      <div className="map-container" ref={mapContainer} />
    </>
  )
}

export default Map