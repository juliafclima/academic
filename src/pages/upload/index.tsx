'use client';

import MainLayout from '@/components/Layout/MainLayout';
import Titulo from '@/components/Titulo';
import Label from '@/components/Label';
import Botao from '@/components/Botao';

export default function Upload() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Titulo titulo="Upload de Artigo" />
        </div>

        <div className="bg-primary-10 rounded-lg shadow p-8">
          <form className="space-y-6">
            <Label
              label="Título do Artigo"
              placeholder="Digite o título do artigo"
            />
            <Label
              label="Autores"
              placeholder="Digite os nomes dos autores separados por vírgula"
            />
            <Label
              label="Tags"
              placeholder="Digite as tags separadas por vírgula"
              tipo="dropdown"
            />
            <Label label="Arquivo PDF" tipo="arquivo" />

            <Botao titulo="Fazer Upload" />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
