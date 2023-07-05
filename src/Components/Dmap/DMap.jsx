import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function UseMapComponent({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView([position.lat, position.lng]);
    console.log(position);
  }, [position]);

  return <></>;
}

const DMap = ({ position }) => {
  return (
    <MapContainer
      style={{ height: "calc(100% - 280px)" }}
      center={[position.lat, position.lng]}
      zoom={17}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <UseMapComponent position={position} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.lat, position.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default DMap;
