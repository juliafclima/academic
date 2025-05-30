import { Anotacao } from '@/@types/anotacao';
import { Artigo } from '@/@types/artigo';

export const mockAnotacoes: Anotacao[] = [
  {
    id: '1',
    texto:
      'A teoria dos lugares centrais de Christaller continua sendo fundamental para compreender a hierarquia urbana e a distribuição espacial das cidades.',
    data: new Date('2024-03-20'),
    tags: ['Geografia Urbana', 'Teoria Geográfica'],
    artigoId: '1',
    artigoNome: 'A teoria dos lugares centrais de Christaller'
  },
  {
    id: '2',
    texto:
      'O fenômeno El Niño de 2023-2024 está causando alterações significativas nos padrões de precipitação global, afetando principalmente as regiões tropicais e subtropicais. As consequências incluem secas severas em algumas áreas e inundações em outras, demonstrando a complexidade dos sistemas atmosféricos e sua influência na geografia física e humana. Este evento tem implicações diretas para a agricultura, recursos hídricos e planejamento urbano.',
    data: new Date('2024-03-19'),
    tags: ['Climatologia', 'Geografia Física'],
    artigoId: '2',
    artigoNome: 'El Niño e sua influência na geografia física e humana'
  },
  {
    id: '3',
    texto:
      'Gentrificação no bairro da Mooca em São Paulo: processo, impactos e resistências',
    data: new Date('2024-03-18'),
    tags: ['Geografia Urbana', 'Estudos de Caso'],
    artigoId: '3',
    artigoNome: 'Gentrificação no bairro da Mooca em São Paulo.'
  },
  {
    id: '4',
    texto:
      'A formação do Complexo Regional do Nordeste brasileiro apresenta particularidades históricas, econômicas e sociais que o distinguem das demais regiões do país. A interação entre os fatores naturais, como o clima semiárido, e os processos históricos de ocupação e desenvolvimento econômico criou uma paisagem única e desafios específicos para o planejamento regional. O polígono das secas, as zonas da mata, agreste e sertão formam um mosaico geográfico complexo que demanda políticas públicas diferenciadas.',
    data: new Date('2024-03-17'),
    tags: ['Geografia Regional', 'Brasil'],
    artigoId: '4',
    artigoNome: 'A formação do Complexo Regional do Nordeste brasileiro.'
  },
  {
    id: '5',
    texto: 'Análise preliminar da expansão urbana na região metropolitana',
    data: new Date('2024-03-16'),
    tags: ['Sensoriamento Remoto', 'Geografia Urbana'],
    artigoId: '5',
    artigoNome:
      'Análise preliminar da expansão urbana na região metropolitana de Curitiba.'
  },
  {
    id: '6',
    texto: 'Geografia política contemporânea.',
    data: new Date('2024-03-15'),
    tags: ['Geografia Política', 'Conceitos'],
    artigoId: '6',
    artigoNome: 'O conceito de território na geografia política contemporânea'
  },
  {
    id: '7',
    texto:
      'A Revolução Verde e suas implicações para a agricultura familiar no Brasil: transformações, contradições e desafios. O modelo de modernização agrícola implementado a partir da década de 1960 trouxe profundas modificações no espaço rural brasileiro, alterando relações de trabalho, padrões de produção e a própria organização espacial do campo. Este processo histórico continua influenciando as políticas agrícolas e o desenvolvimento rural até os dias atuais.',
    data: new Date('2024-03-14'),
    tags: ['Geografia Agrária', 'História'],
    artigoId: '7',
    artigoNome: 'A Revolução Verde'
  },
  {
    id: '8',
    texto:
      'Cartografia social como instrumento de resistência e visibilidade para comunidades tradicionais.',
    data: new Date('2024-03-13'),
    tags: ['Cartografia', 'Geografia Social'],
    artigoId: '8',
    artigoNome: 'Cartografia social'
  },
  {
    id: '9',
    texto: 'Impactos da mineração em Carajás.',
    data: new Date('2024-03-12'),
    tags: ['Geografia Econômica', 'Amazônia'],
    artigoId: '9',
    artigoNome: 'Impactos da mineração em Carajás'
  },
  {
    id: '10',
    texto:
      'As transformações na cadeia produtiva global pós-pandemia têm revelado novas configurações espaciais na produção industrial. O nearshoring e o friendshoring emergem como estratégias que redesenham os fluxos comerciais e as relações econômicas internacionais, impactando diretamente a geografia econômica mundial. Estas mudanças afetam desde a escolha de localização das indústrias até as políticas de desenvolvimento regional, criando novos desafios e oportunidades para diferentes territórios.',
    data: new Date('2024-03-11'),
    tags: ['Geografia Econômica', 'Globalização'],
    artigoId: '10',
    artigoNome: 'As transformações na cadeia produtiva global.'
  }
];

export const mockArtigos: Artigo[] = [
  {
    id: '1',
    titulo: 'Mudanças Climáticas e seus Impactos na Agricultura Global',
    autores: ['João Silva', 'Maria Santos'],
    dataUpload: new Date('2024-03-20'),
    tags: ['Climatologia', 'Geografia Agrária', 'Meio Ambiente'],
    pdfUrl: '/example.pdf'
  },
  {
    id: '2',
    titulo: 'Urbanização e Desenvolvimento Metropolitano no Brasil',
    autores: ['Pedro Costa'],
    dataUpload: new Date('2024-03-19'),
    tags: ['Geografia Urbana', 'Planejamento', 'Desenvolvimento'],
    pdfUrl: '/example.pdf'
  },
  {
    id: '3',
    titulo: 'Geomorfologia Costeira: Estudo das Transformações Litorâneas',
    autores: ['Carlos Mendes', 'Lucia Ferreira'],
    dataUpload: new Date('2024-03-18'),
    tags: ['Geomorfologia', 'Geografia Física', 'Litoral'],
    pdfUrl: '/example.pdf'
  },
  {
    id: '4',
    titulo: 'Recursos Hídricos e Gestão de Bacias Hidrográficas',
    autores: ['Rafael Santos'],
    dataUpload: new Date('2024-03-17'),
    tags: ['Hidrografia', 'Recursos Naturais', 'Gestão Ambiental'],
    pdfUrl: '/example.pdf'
  }
];

export const mockTags = [
  { id: '1', nome: 'Climatologia', count: 5 },
  { id: '2', nome: 'Geografia Agrária', count: 3 },
  { id: '3', nome: 'Meio Ambiente', count: 7 },
  { id: '4', nome: 'Planejamento', count: 4 }
];
