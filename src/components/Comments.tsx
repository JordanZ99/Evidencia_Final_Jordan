"use client";

import Giscus from "@giscus/react";

interface CommentsProps {
  slug: string;
}

export default function Comments({ slug }: CommentsProps) {
  return (
    <div className="mt-12 pt-8">
      <h3 className="text-2xl font-bold text-slate mb-6">Comentarios y Discusión</h3>
      <div className="bg-slate-900 rounded-xl p-4 md:p-6">
        <Giscus
          id={`comments-${slug}`}
          key={slug}
          repo="JordanZ99/Evidencia_Final_Jordan"
          repoId="R_kgDOSa0pew"
          category="General"
          categoryId="DIC_kwDOSa0pe84C8052"
          mapping="specific"
          term={slug}
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark"
          lang="es"
          loading="lazy"
        />
      </div>
    </div>
  );
}
