import React, { useState } from 'react';
import Input from '../Input';
import { mockTags } from '@/mocks/mocks';
import { FiChevronDown, FiUpload, FiX } from 'react-icons/fi';
import Tag from '../Tag';

type LabelProps = {
  label: string;
  placeholder?: string;
  tipo?: 'texto' | 'dropdown' | 'arquivo' | 'tags';
};

export default function Label({
  label,
  placeholder,
  tipo = 'texto'
}: LabelProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const selectedTags = ['Geografia Urbana', 'Meio Ambiente'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderFileUpload = () => (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
      <div className="space-y-1 text-center">
        <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label className="relative cursor-pointer bg-primary-10 rounded-md font-medium text-primary-800 hover:text-primary-700">
            <span>Selecione um arquivo</span>
            <Input
              tipo="file"
              className="sr-only"
              accept=".pdf"
              onChange={e => setSelectedFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>
        <p className="pl-1">ou arraste e solte</p>
        {selectedFile && (
          <p className="text-sm text-gray-500">
            Arquivo selecionado: {selectedFile.name}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {tipo !== 'tags' && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      {tipo === 'texto' && <Input placeholder={placeholder} tamanho="full" />}

      {tipo === 'dropdown' && (
        <div className="relative w-full">
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedTags.map(tag => (
                <Tag tag={tag} key={tag} icone={<FiX />} />
              ))}
            </div>
          )}
          <div className="relative">
            <button
              type="button"
              className="w-full min-w-[256px] px-4 py-2 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-gray-500">
                {selectedTags.length === 0
                  ? 'Selecione as tags'
                  : 'Adicionar mais tags'}
              </span>
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {mockTags.map(tag => (
                  <button
                    key={tag.id}
                    type="button"
                    className={`w-full text-left px-4 py-2 hover:bg-primary-800 hover:text-gray-700 ${
                      selectedTags.includes(tag.nome)
                        ? 'bg-purple-50 text-primary-700'
                        : 'text-gray-700'
                    }`}
                  >
                    {tag.nome}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {tipo === 'tags' && (
        <div className="relative w-64">
          {selectedTags.length > 0 ||
            (tipo === 'tags' && (
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedTags.map(tag => (
                  <div
                    key={tag}
                    className="flex items-center bg-primary-10 text-primary-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-2 text-primary-800 hover:text-primary-700"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ))}
          <div className="relative">
            <button
              type="button"
              className="w-full min-w-[256px] px-4 py-2 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-gray-500">{tipo === 'tags' && 'Tag'}</span>
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {mockTags.map(tag => (
                  <button
                    key={tag.id}
                    type="button"
                    className={`w-full text-left px-4 py-2 hover:bg-primary-800 hover:text-gray-700 ${
                      selectedTags.includes(tag.nome)
                        ? 'bg-purple-50 text-primary-700'
                        : 'text-gray-700'
                    }`}
                  >
                    {tag.nome}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {tipo === 'arquivo' && renderFileUpload()}
    </div>
  );
}
