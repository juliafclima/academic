import React from 'react';

type InputProps = {
  placeholder?: string;
  icone?: React.ReactNode;
  tamanho?: 'full';
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tipo?: 'text' | 'file';
  accept?: string;
};

export default function Input({
  placeholder,
  icone,
  tamanho,
  onChange,
  tipo = 'text',
  className,
  accept
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={tipo}
        placeholder={placeholder}
        onChange={onChange}
        accept={accept}
        className={`${className} pr-4 py-2 border border-primary-200 rounded-md ${tamanho ? 'w-full' : 'w-64'} focus:border-primary-400 focus:ring-1 focus:ring-primary-400 ${icone ? 'pl-10' : 'pl-4'}`}
      />
      {icone && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400">
          {icone}
        </div>
      )}
    </div>
  );
}
