'use client';

import { Artigo } from '@/@types/artigo';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import Tag from '../Tag';
import { formatarData } from '@/utils/data';
import Titulo from '../Titulo';

interface ArtigoCardProps {
  artigo: Artigo;
}

export default function ArtigoCard({ artigo }: ArtigoCardProps) {
  return (
    <Link href={`/${artigo.id}`}>
      <div className="bg-primary-10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <Titulo titulo={artigo.titulo} tipo="h3" />
        <div className="text-sm text-gray-600 mb-2">
          {artigo.autores.join(', ')}
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center mb-2">
            <FiClock className="mr-1" />
            {formatarData(artigo.dataUpload)}
          </div>
        </div>
        <Tag tag={artigo.tags} />
      </div>
    </Link>
  );
}
