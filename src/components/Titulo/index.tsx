import React from 'react';

interface TituloProps {
  titulo: string;
  tipo?: 'h1' | 'h2' | 'h3';
}

export default function Titulo({ titulo, tipo = 'h1' }: TituloProps) {
  return (
    <>
      {tipo === 'h1' && (
        <h1 className="text-3xl font-bold text-primary-900">{titulo}</h1>
      )}
      {tipo === 'h2' && (
        <h2 className="text-2xl font-bold text-primary-900">{titulo}</h2>
      )}
      {tipo === 'h3' && (
        <h3 className="text-xl font-bold text-primary-900">{titulo}</h3>
      )}
    </>
  );
}
