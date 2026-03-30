import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Leaf, MapPin, PlusCircle, Info } from 'lucide-react';

// Correção para ícones do Leaflet no React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconSize: [25,41], iconAnchor: [12,41] });
L.Marker.prototype.options.icon = DefaultIcon;

const App = () => {
  const [points, setPoints] = useState([
    { id: 1, name: "Recicla Centro", type: "Eletrônicos", lat: -8.7612, lng: -63.9039 },
    { id: 2, name: "Eco Ponto Norte", type: "Óleo/Plástico", lat: -8.7450, lng: -63.8800 }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-eco-green text-white p-4 shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="text-eco-light" />
          <h1 className="text-xl font-bold tracking-tight">EcoRota</h1>
        </div>
        <button className="bg-eco-light hover:bg-green-500 transition-colors px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
          <PlusCircle size={18} /> Sugerir Ponto
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-80 bg-white p-4 shadow-inner overflow-y-auto">
          <h2 className="text-gray-700 font-semibold mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-eco-green" /> Pontos Próximos
          </h2>
          <div className="space-y-3">
            {points.map(point => (
              <div key={point.id} className="p-3 border border-slate-200 rounded-lg hover:border-eco-light cursor-pointer transition-all">
                <h3 className="font-bold text-gray-800">{point.name}</h3>
                <p className="text-xs text-eco-green font-medium uppercase">{point.type}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="flex items-center gap-2 text-eco-green mb-2">
              <Info size={16} />
              <span className="font-bold text-sm">Por que usar?</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Descartar resíduos corretamente evita a contaminação do solo e lençóis freáticos na nossa região.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 h-[400px] md:h-auto z-0">
          <MapContainer center={[-8.7612, -63.9039]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map(point => (
              <Marker key={point.id} position={[point.lat, point.lng]}>
                <Popup>
                  <div className="text-center">
                    <strong className="block">{point.name}</strong>
                    <span className="text-xs text-gray-500">{point.type}</span>
                    <button className="mt-2 block w-full bg-eco-green text-white text-xs py-1 rounded">Como chegar</button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>

      <footer className="bg-white border-t p-3 text-center text-xs text-gray-400">
        &copy; 2026 EcoRota - Tecnologia para um mundo sustentável.
      </footer>
    </div>
  );
};

export default App;
