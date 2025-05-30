import MainLayout from '@/components/Layout/MainLayout';
import { mockArtigos } from '../mocks/mocks';
import ArtigoCard from '@/components/Artigo/ArigoCard';
import Titulo from '@/components/Titulo';
import Input from '@/components/Input';
import { FiSearch } from 'react-icons/fi';
import Label from '@/components/Label';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <section>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <Titulo titulo="Artigos" />
              <div className="flex space-x-4">
                <Input placeholder="Buscar artigos..." icone={<FiSearch />} />
                <Label
                  label="Tags"
                  placeholder="Digite as tags separadas por vírgula"
                  tipo="tags"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockArtigos.map(artigo => (
                <ArtigoCard key={artigo.id} artigo={artigo} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
