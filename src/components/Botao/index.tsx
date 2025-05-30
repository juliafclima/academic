import Link from 'next/link';

type BotaoProps = {
  titulo?: string;
  icone?: React.ReactNode;
};

export default function Botao({ titulo, icone }: BotaoProps) {
  return (
    <div className="flex justify-end">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-white hover:bg-primary-700 rounded"
      >
        {icone}
        {titulo}
      </Link>
    </div>
  );
}
