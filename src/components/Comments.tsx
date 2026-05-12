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
          repoId="R_kgDOMP_xxx" // Placeholder
          category="General"
          categoryId="DIC_kwDOMP_xxx" // Placeholder
          mapping="pathname"
          term="Welcome to my blog!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="es"
          loading="lazy"
        />
        <div className="mt-4 p-4 bg-accent/20 border border-cyan/20 rounded-lg text-sm text-slate">
          <strong>⚠️ Aviso para Jordan:</strong> Para que esta caja de comentarios funcione correctamente, debes:
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Hacer público tu repositorio en GitHub.</li>
            <li>Habilitar "Discussions" en la configuración del repositorio.</li>
            <li>Ir a <a href="https://giscus.app/es" target="_blank" rel="noreferrer" className="text-cyan underline">giscus.app</a>, poner tu repo y obtener el <code>repoId</code> y <code>categoryId</code>.</li>
            <li>Actualizar esos valores en <code>src/components/Comments.tsx</code>.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
