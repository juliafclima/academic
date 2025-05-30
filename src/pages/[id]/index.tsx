import MainLayout from '@/components/Layout/MainLayout';
import PDFViewer from '@/components/Artigo/PDFViewer';
import { FiClock } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { mockArtigos } from '../../mocks/mocks';
import Titulo from '@/components/Titulo';
import Tag from '@/components/Tag';
import { formatarData } from '@/utils/data';
import Botao from '@/components/Botao';

export default function ArtigoPagina() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Carregando...</div>;
  }

  const artigo = mockArtigos.find(art => art.id === id);

  if (!artigo) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-primary-10 p-6 rounded-lg shadow-md">
          <Titulo titulo={artigo.titulo} />

          <div className="flex items-center space-x-4 text-gray-600 my-2">
            <div className="flex items-center">
              <FiClock className="mr-1" />
              {formatarData(artigo.dataUpload)}
            </div>
            {artigo.tags.map((tag: string) => (
              <Tag key={tag} tag={[tag]} />
            ))}
          </div>

          <div className="text-gray-700">
            <strong>Autores:</strong> {artigo.autores.join(', ')}
          </div>
        </div>

        <div className="bg-primary-10 p-6 rounded-lg shadow-md">
          <Titulo titulo="Anotações" tipo="h3" />
          <div className="space-y-4">
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Adicione uma anotação..."
            />
            <Botao titulo="Salvar Anotação" />
          </div>
        </div>

        <div className="bg-primary-10 rounded-lg shadow-md overflow-hidden">
          <PDFViewer url={artigo.pdfUrl} />
        </div>
      </div>
    </MainLayout>
  );
}
