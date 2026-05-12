"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold text-slate mb-6">Comentarios y Discusión</h3>
      <div className="bg-slate-900 rounded-xl p-4 md:p-6 border border-border">
        <Giscus
          id="comments"
          repo="JordanZ99/Evidencia_Final_Jordan"
          repoId="R_kgDOSa0pew"
          category="General"
          categoryId="DIC_kwDOSa0pe84C8052"
          mapping="pathname"
          term="Welcome to my blog!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="es"
          loading="lazy"
        />
      </div>
    </div>
  );
}
