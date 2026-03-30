import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const AddPointForm = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({ name: '', type: 'Eletrônicos', lat: '', lng: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: Date.now(), lat: parseFloat(formData.lat), lng: parseFloat(formData.lng) });
    onClose();
    setFormData({ name: '', type: 'Eletrônicos', lat: '', lng: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Sugerir Ponto de Coleta</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome do Local</label>
            <input 
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-eco-green focus:border-eco-green outline-none"
              placeholder="Ex: Supermercado Eco"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Resíduo</label>
            <select 
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-eco-green outline-none"
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option>Eletrônicos</option>
              <option>Óleo de Cozinha</option>
              <option>Pilhas e Baterias</option>
              <option>Plástico/Papel/Metal</option>
              <option>Móveis/Entulho</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Latitude</label>
              <input required type="number" step="any" className="mt-1 block w-full border border-gray-300 rounded-lg p-2 outline-none" 
                placeholder="-8.76..." onChange={(e) => setFormData({...formData, lat: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Longitude</label>
              <input required type="number" step="any" className="mt-1 block w-full border border-gray-300 rounded-lg p-2 outline-none" 
                placeholder="-63.9..." onChange={(e) => setFormData({...formData, lng: e.target.value})} />
            </div>
          </div>

          <button type="submit" className="w-full bg-eco-green text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
            <Send size={18} /> Enviar Sugestão
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPointForm;
