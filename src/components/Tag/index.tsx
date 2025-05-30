import React from 'react';
import { FiTag } from 'react-icons/fi';

type TagProps = {
  tag: string | string[];
  icone?: React.ReactNode;
};

export default function Tag({
  tag,
  icone = <FiTag className="mr-1" />
}: TagProps) {
  const tags = Array.isArray(tag) ? tag : [tag];
  const isDefaultIcon = React.isValidElement(icone) && icone.type === FiTag;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t, index) => (
        <span
          key={index}
          className="flex items-center justify-center bg-primary-200 text-purple-800 px-3 py-1 rounded-full text-sm"
        >
          {isDefaultIcon && icone}
          {t}
          {!isDefaultIcon && (
            <span className="inline-flex items-center ml-2">{icone}</span>
          )}
        </span>
      ))}
    </div>
  );
}
