import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = () => {
  return (
    <MapContainer center={[53.20143417167909, -6.127012650295532]} zoom={100} scrollWheelZoom={true}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[53.20143417167909, -6.127012650295532]}>
        <Popup>
            Shelbourne & McGuinness Kitchens
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map
