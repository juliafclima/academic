'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiUpload, FiTag, FiBookOpen, FiFileText } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-primary-800 text-white fixed left-0 top-0">
      <div className="p-4">
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={250}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        <nav className="space-y-4">
          <Link
            href="/"
            className="flex items-center space-x-2 p-2 hover:bg-primary-700 rounded"
          >
            <FiFileText className="text-lg" />
            <span>Artigos</span>
          </Link>
          <Link
            href="/upload"
            className="flex items-center space-x-2 p-2 hover:bg-primary-700 rounded"
          >
            <FiUpload className="text-lg" />
            <span>Upload</span>
          </Link>
          <Link
            href="/tags"
            className="flex items-center space-x-2 p-2 hover:bg-primary-700 rounded"
          >
            <FiTag className="text-lg" />
            <span>Tags</span>
          </Link>
          <Link
            href="/anotacoes"
            className="flex items-center space-x-2 p-2 hover:bg-primary-700 rounded"
          >
            <FiBookOpen className="text-lg" />
            <span>Anotações</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
