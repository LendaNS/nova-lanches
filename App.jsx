
// Lovable - Delivery PRO MVP
// Estrutura base em React com TailwindCSS
// Inclui: Painel do Administrador, Tela do Entregador, Página de Pedido do Cliente

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold">Painel do Administrador</h1>
      <div className="bg-white p-4 rounded-xl shadow">
        <p>Total de Pedidos: 12</p>
        <p>Ticket Médio: R$ 42,90</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl">Ver Pedidos</button>
      </div>
    </div>
  );
}

function DeliveryView() {
  const [location, setLocation] = React.useState({ lat: null, lng: null });

  React.useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Pedidos para Entregar</h1>
      <ul className="space-y-2">
        <li className="bg-white p-4 rounded-xl shadow">
          Pedido #1023 - Rua A, 100
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Rua+A,+100,+São+Paulo,+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 underline text-blue-600"
          >
            Ver Rota
          </a>
        </li>
      </ul>

      <div className="bg-gray-100 p-4 rounded-xl shadow">
        <p className="font-semibold">📍 Sua Localização Atual:</p>
        {location.lat && location.lng ? (
          <>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lng}</p>
            <a
              href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
              target="_blank"
              className="text-blue-600 underline"
              rel="noreferrer"
            >
              Ver no Mapa
            </a>
          </>
        ) : (
          <p>Obtendo localização...</p>
        )}
      </div>
    </div>
  );
}

function CustomerPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Cardápio</h1>
      <ul className="mt-4 space-y-2">
        <li className="bg-white p-4 rounded-xl shadow">
          Pizza Margherita - R$ 29,90 <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-xl">Pedir</button>
        </li>
        <li className="bg-white p-4 rounded-xl shadow">
          Hambúrguer Clássico - R$ 24,90 <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-xl">Pedir</button>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/entregador" element={<DeliveryView />} />
        <Route path="/" element={<CustomerPage />} />
      </Routes>
    </Router>
  );
}
