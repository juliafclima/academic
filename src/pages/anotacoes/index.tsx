'use client';

import MainLayout from '@/components/Layout/MainLayout';
import { FiClock } from 'react-icons/fi';
import Masonry from 'react-masonry-css';
import Link from 'next/link';
import { mockAnotacoes } from '../../mocks/mocks';
import Titulo from '@/components/Titulo';
import Tag from '@/components/Tag';
import { formatarData } from '@/utils/data';

export default function Anotacoes() {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Titulo titulo="Anotações" />
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {mockAnotacoes.map(anotacao => (
            <div
              key={anotacao.id}
              className="bg-primary-10 p-6 rounded-lg shadow-md mb-6"
            >
              <Link
                href={`/artigos/${anotacao.artigoId}`}
                className="text-primary-900 font-bold mb-4 break-words"
              >
                {anotacao.artigoNome}
              </Link>
              <p className="text-gray-800 mb-4 break-words">{anotacao.texto}</p>
              <div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    {formatarData(anotacao.data)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {anotacao.tags.map(tag => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </MainLayout>
  );
}
