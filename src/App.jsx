import React, { useState } from 'react';
import Map from './components/Map';
import AddPointForm from './components/AddPointForm';
import { Leaf, PlusCircle, MapPin, Info } from 'lucide-react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [points, setPoints] = useState([
    { id: 1, name: "Recicla Centro", type: "Eletrônicos", lat: -8.7612, lng: -63.9039 },
    { id: 2, name: "Eco Ponto Norte", type: "Óleo/Plástico", lat: -8.7450, lng: -63.8800 }
  ]);

  const addNewPoint = (newPoint) => {
    setPoints([...points, newPoint]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <header className="bg-[#2D5A27] text-white p-4 shadow-lg flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Leaf className="text-[#95C11E]" />
          <h1 className="text-xl font-bold tracking-tight">EcoRota</h1>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#95C11E] hover:bg-green-500 transition-colors px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2"
        >
          <PlusCircle size={18} /> Sugerir Ponto
        </button>
      </header>

      <main className="flex-1 flex flex-col md:row overflow-hidden">
        <div className="w-full md:w-80 bg-white p-4 shadow-xl overflow-y-auto z-10 border-r border-gray-200">
          <h2 className="text-gray-700 font-semibold mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-[#2D5A27]" /> Pontos Ativos
          </h2>
          <div className="space-y-3">
            {points.map(point => (
              <div key={point.id} className="p-3 border border-slate-100 rounded-xl hover:bg-green-50 transition-all">
                <h3 className="font-bold text-gray-800 text-sm">{point.name}</h3>
                <p className="text-[10px] text-[#2D5A27] font-bold uppercase tracking-wider">{point.type}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-2xl border border-green-100">
            <div className="flex items-center gap-2 text-[#2D5A27] mb-2">
              <Info size={16} />
              <span className="font-bold text-xs uppercase">Impacto Social</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed italic">
              "Cada bateria descartada corretamente protege milhares de litros de água potável."
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
          <Map points={points} />
        </div>
      </main>

      <AddPointForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={addNewPoint} 
      />

      <footer className="bg-white border-t p-2 text-center text-[10px] text-gray-400">
        PROJETO COMUNITÁRIO ECO-ROTA 2026 - OPEN SOURCE
      </footer>
    </div>
  );
};

export default App;
