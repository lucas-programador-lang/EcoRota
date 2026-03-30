import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correção de ícones do Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ points }) => {
  // Coordenadas centrais (Porto Velho como exemplo inicial)
  const center = [-8.7612, -63.9039];

  return (
    <div className="h-full w-full z-0">
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point) => (
          <Marker key={point.id} position={[point.lat, point.lng]}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-gray-800">{point.name}</h3>
                <p className="text-xs text-eco-green font-semibold uppercase">{point.type}</p>
                <hr className="my-2" />
                <button 
                  className="w-full bg-eco-green text-white text-[10px] py-1 px-2 rounded hover:bg-opacity-90"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`)}
                >
                  VER ROTA NO GOOGLE
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
