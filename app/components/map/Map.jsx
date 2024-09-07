"use client";
import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const markerPosition = [6.934767364566611, 79.97889151996542];

const Map = () => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current) {
      setMap(mapRef.current.leafletElement);
    }
  }, [mapRef]);

  return (
    <div style={{ height: "40vh", width: "100%", position: "relative" }}>
      <MapContainer
        center={markerPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
        whenCreated={setMap}
        scrollWheelZoom={false} // Disable zoom on mouse wheel
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={markerPosition}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "2rem",
          color: "#ff5722",
        }}
      >
        <AddLocationIcon />
      </div>
    </div>
  );
};

export default Map;
