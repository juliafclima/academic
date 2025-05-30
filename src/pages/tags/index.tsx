'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { FiPlus, FiX } from 'react-icons/fi';
import { mockTags } from '../../mocks/mocks';
import Titulo from '@/components/Titulo';
import Input from '@/components/Input';
import Botao from '@/components/Botao';

export default function Tags() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Titulo titulo="Gerenciar Tags" />
          <div className="flex space-x-2">
            <Input placeholder="Nova tag..." />
            <Botao titulo="Adicionar" icone={<FiPlus />} />
          </div>
        </div>

        <div className="bg-primary-10 rounded-lg shadow">
          <div className="divide-y divide-gray-200">
            {mockTags.map(tag => (
              <div
                key={tag.id}
                className="flex items-center justify-between p-4"
              >
                <div>
                  <Titulo titulo={tag.nome} tipo="h3" />
                  <p className="text-sm text-gray-500">{tag.count} artigos</p>
                </div>
                <Botao icone={<FiX />} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
