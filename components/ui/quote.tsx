'use client';
import React, { useState } from 'react';

const Quote = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    detalhes: '',
    prazo: '',
    preferenciaDesign: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xrbpqedb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      console.log(status);
      setFormData({ nome: "", email: "", telefone: "", detalhes: "", prazo: "daqui 1 semana", preferenciaDesign: ""});
    } else {
      setStatus("error");
    }
  };

  return (
    <div id="quote" className="max-w-4xl w-full mx-auto p-6 bg-white shadow-lg rounded-md mt-6 mb-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Solicitar Orçamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Seu e-mail"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Seu telefone"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="detalhes" className="block text-sm font-medium text-gray-700">Detalhes do Projeto</label>
          <textarea
            id="detalhes"
            name="detalhes"
            value={formData.detalhes}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Descreva o que você precisa para seu site"
            rows={4}
            required
          />
        </div>

        {/* Novo campo de seleção */}
        <div className="mb-4">
          <label htmlFor="prazo" className="block text-sm font-medium text-gray-700">Quando você precisa do site?</label>
          <select
            id="prazo"
            name="prazo"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="1 semana">Daqui 1 semana</option>
            <option value="1 mês">Daqui 1 mês</option>
            <option value="3 meses">Daqui 3 meses</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="preferenciaDesign" className="block text-sm font-medium text-gray-700">Preferência de Design</label>
          <input
            type="text"
            id="preferenciaDesign"
            name="preferenciaDesign"
            value={formData.preferenciaDesign}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            placeholder="Tem alguma preferência específica de design?"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Enviar Solicitação
          </button>
        </div>
      </form>
    </div>
  );
};

export default Quote;
