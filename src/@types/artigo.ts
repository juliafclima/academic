export interface Artigo {
  id: string;
  titulo: string;
  autores: string[];
  dataUpload: Date;
  tags: string[];
  pdfUrl: string;
}
