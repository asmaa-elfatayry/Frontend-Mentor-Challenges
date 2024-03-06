import React from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markIcon from '../images/icon-location.svg';
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Map = ({ coordinates }) => {
    const marker = new L.icon({ iconUrl: markIcon });

  
    if (coordinates && coordinates.lat && coordinates.lng) {
        return (
            <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={14} className="w-full h-3/5 z-0">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker icon={marker} position={[coordinates.lat, coordinates.lng]} />
            </MapContainer>
        );
    } else {
        return null; 
    }
};

export default Map;
