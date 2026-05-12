"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/lib/data"
import { Scale, Heart, Shield, Search, Leaf, Globe, X, Calendar, Tag, Zap, User, Lightbulb } from "lucide-react"
import parse, { domToReact, Element as DOMElement } from "html-react-parser"
import ParagraphReaction from "@/components/ParagraphReaction"
import Comments from "@/components/Comments"
import Prism from "@/components/Prism"

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#020617]">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ética Profesional y Ciudadanía<br></br><span className="text-salmon">Evidencia 3</span>
            </h1>
            {/*<p className="text-xl text-azure/80 mb-8">
              Hecho por: Jordan Zahid Pacheco Estrada.
            </p>*/}
          </motion.div>
        </div>
      </section>

      {/* Introducción a la Ética Section */}
      <section id="introduccion" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate">La <span className="text-cyan">Ética</span> y su importancia en la vida cotidiana y laboral</h2>
              <p className="text-lg text-muted mb-6">
                La ética es usada por cada uno de nosotros en nuestra vida cotidiana, ya que cualquier cosa que hagamos afecta a los demás por lo que debemos decidir cada día si lo que hacemos está bien o mal.
              </p>
              <p className="text-lg text-muted">
                La ética en el ambito laboral varía mucho según la empresa y el área de trabajo, por ejemplo, en un hospital la ética es fundamental para tomar decisiones que afectan la vida de los pacientes, mientras que en una empresa de tecnología la ética puede centrarse en la privacidad de los datos de los usuarios.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/etica.png"
                alt="Importancia de la Ética"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conceptos Clave Section */}
      <section id="conceptos" className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate">La ética en mi <span className="text-cyan">Carrera</span></h2>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Transparencia de datos",
              icon: Search,
              desc: "Se aplica al ser honestos sobre qué información recolecta el software y para qué fines específicos se utiliza sin engañar al público."
            },
            {
              title: "Impacto socioambiental",
              icon: Leaf,
              desc: "Es la responsabilidad de crear software eficiente que no desperdicie recursos de hardware ni energía contribuyendo al bienestar del planeta."
            },
            {
              title: "Accesibilidad e inclusión",
              icon: User,
              desc: "Consiste en programar interfaces que todos puedan usar eliminando las barreras digitales que excluyan a cualquier persona"
            },
            {
              title: "Colaboración honesta",
              icon: Globe,
              desc: "Significa participar en comunidades de código abierto y respetar las licencias ajenas reconociendo el valor del trabajo compartido."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-[#0a0f1d] rounded-2xl text-center border border-transparent hover:border-cyan transition-all"
            >
              <item.icon className="h-10 w-10 text-cyan mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section (Directly here) */}
      <section id="subtemas" className="py-24 bg-[#546075ff]" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Blog del <span className="text-cyan">Módulo 3</span></h2>
            <p className="text-white/60 text-center md:text-left">5 subtemas que escogí.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
                className="relative drop-shadow-xl overflow-hidden rounded-xl bg-[#3d3c3d] cursor-pointer group h-full min-h-[300px]"
              >
                {/* Glow Effect */}
                <div className="absolute w-56 h-48 bg-white/20 blur-[50px] -left-1/2 -top-1/2 group-hover:bg-cyan/20 transition-all duration-500"></div>

                {/* Card Content Wrapper */}
                <div className="absolute inset-0.5 bg-[#323132] rounded-xl z-[1] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-accent rounded-lg text-cyan group-hover:scale-110 transition-transform">
                        <post.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-muted">{post.date}</span>
                    </div>

                    <p className="text-xs font-bold text-cyan mb-2 uppercase tracking-tight">{post.category}</p>
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-cyan transition-colors text-slate">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted mb-6 line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <span className="inline-flex items-center text-sm font-bold text-slate group-hover:text-cyan transition-colors mt-auto">
                    Leer artículo completo
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planetary Ethics Banner (Conclusión) */}
      <section className="py-20 bg-cyan text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La conclusión de estos subtemas nos muestra que la ética y la tecnología deben avanzar en la misma dirección para construir una sociedad funcional en la que empaticemos con nuestros semejantes, respetemos los derechos de todos y trabajemos juntos por un futuro mejor.

            </h2>
          </div>
        </div>
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Zap className="h-96 w-96" />
        </div>
      </section>

      {/* Reflexión Final Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-slate">Reflexión <span className="text-cyan">Final</span></h2>
            <div className="space-y-6 text-lg text-muted text-left leading-relaxed">
              <p>
                Como reflexión final de esta evidencia, puedo decir que el analizar de nuevo estos 5 subtemas me ha permitido entender que mi carrera no se limita a escribir líneas de código o gestionar servidores de alto rendimiento. Ser un ingeniero de software implica aceptar una responsabilidad ética que va desde el respeto absoluto a los derechos humanos hasta la creación de puentes de diálogo que combatan la exclusión digital. He aprendido que la tecnología más avanzada pierde su valor si no se construye con empatía y si no se diseña pensando en la interdependencia que nos une como ciudadanos globales. Mi compromiso como profesional es utilizar todas las herramientas técnicas a mi alcance, para asegurar que el progreso tecnológico sea inclusivo, humano y respetuoso con la dignidad de cada persona. Al final del día, el mejor software no es el que tiene la arquitectura más compleja, sino el que logra mejorar la convivencia y el bienestar de la sociedad de manera justa y equitativa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referencias Section */}
      <section id="referencias" className="py-24 bg-accent/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-slate border-l-4 border-cyan pl-6">Referencias <span className="text-cyan">Bibliográficas</span> (APA)</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-xs text-muted">
            <li className="pl-4 -indent-4">
              Tribuna Constitucional. (4 de febrero de 2022). <i>La Declaración Universal de Derechos Humanos en un minuto</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=dgfX_6noLnY" className="text-cyan hover:underline break-all">https://www.youtube.com/watch?v=dgfX_6noLnY</a>
            </li>
            <li className="pl-4 -indent-4">
              Hammarskjöld, N. U. B. (2013, diciembre 30). <i>Documentación de la ONU : Derechos Humanos</i>. Naciones Unidas. <a href="https://research.un.org/es/docs/humanrights/undhr" className="text-cyan hover:underline break-all">https://research.un.org/es/docs/humanrights/undhr</a>
            </li>
            <li className="pl-4 -indent-4">
              UNICEF. (2018). <i>UNICEF presenta análisis sobre la situación de la infancia en México</i>. Recuperado de <a href="https://www.unicef.org/lac/comunicados-prensa/analisis-sobre-la-situacionde-la-infancia-en-mexico" className="text-cyan hover:underline break-all">https://www.unicef.org/lac/comunicados-prensa/...</a>
            </li>
            <li className="pl-4 -indent-4">
              Docentes para el Desarrollo. (8 de febrero de 2017). <i>¿Qué es la Ciudadanía global?</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=joD8qfcd79k" className="text-cyan hover:underline break-all">https://www.youtube.com/watch?v=joD8qfcd79k</a>
            </li>
            <li className="pl-4 -indent-4">
              Vega, E. (2015). <i>“La agencia ciudadana”</i>. Recuperado de <a href="https://www.noroeste.com.mx/opinion/malecon-mazatlan/la-agenciaciudadana-GNOP91282" className="text-cyan hover:underline break-all">https://www.noroeste.com.mx/opinion/...</a>
            </li>
            <li className="pl-4 -indent-4">
              Griselda. (2020, junio 5). <i>Habermas y la ética discursiva</i>. Escuela de Ciencias Jurídicas. <a href="https://escuelacienciasjuridicas.com/etica-discursiva" className="text-cyan hover:underline break-all">https://escuelacienciasjuridicas.com/etica-discursiva</a>
            </li>
            <li className="pl-4 -indent-4">
              Interdependencia. (2021, junio 17). <i>Concepto</i>. <a href="https://concepto.de/interdependencia/" className="text-cyan hover:underline break-all">https://concepto.de/interdependencia/</a>
            </li>
            <li className="pl-4 -indent-4">
              Berrios, O. (2023, octubre 23). <i>La ética de la interdependencia</i>. Plena inclusión. <a href="https://www.plenainclusion.org/noticias/laetica-de-la-interdependencia/" className="text-cyan hover:underline break-all">https://www.plenainclusion.org/noticias/...</a>
            </li>
            <li className="pl-4 -indent-4">
              Chuquinaira-Sama, H., Mallqui, R. I. M., & Condori, L. R. (2025). <i>Exclusión Social y su Relación con la Convivencia Escolar</i>. Revista Tecnológica-Educativa Docentes 2.0, 18(2), 63-74.
            </li>
            <li className="pl-4 -indent-4">
              Goodin, R. E. (1996). <i>Inclusion and exclusion</i>. European Journal of Sociology, 37(2), 343-371.
            </li>
            <li className="pl-4 -indent-4">
              Lola SP. (11 de mayo de 2014). <i>La Brecha Digital ¿Una nueva forma de exclusión social?</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=mD40nKwbi0s" className="text-cyan hover:underline break-all">https://www.youtube.com/watch?v=mD40nKwbi0s</a>
            </li>
            <li className="pl-4 -indent-4">
              Gómez, P. (7 de marzo de 2021). <i>Qué es la empatía</i> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=DMAwzMYjNSg" className="text-cyan hover:underline break-all">https://www.youtube.com/watch?v=DMAwzMYjNSg</a>
            </li>
            <li className="pl-4 -indent-4">
              Porquequieroestarbien.com. (s/f). <i>¿Qué es la empatía y cuál es su importancia?</i> Recuperado de <a href="https://porquequieroestarbien.com/bienestar-emocional/fortalecer-lamente/que-es-la-empatia-y-cual-es-su-importancia" className="text-cyan hover:underline break-all">https://porquequieroestarbien.com/bienestar-emocional/...</a>
            </li>
            <li className="pl-4 -indent-4">
              Gaceta UNAM. (2022, diciembre 8). <i>Empatía, “pegamento social” que permite conectarnos con los demás</i>. <a href="https://www.gaceta.unam.mx/empatiapegamento-social-que-permite-conectarnos-con-los-demas" className="text-cyan hover:underline break-all">https://www.gaceta.unam.mx/empatiapegamento...</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 bg-accent rounded-full hover:bg-cyan hover:text-white transition-all z-10"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent rounded-lg text-cyan">
                    <selectedPost.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-cyan uppercase tracking-widest">{selectedPost.category}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate mb-8 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-border">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Tag className="h-4 w-4" />
                    Tarea de Ética
                  </div>
                </div>

                <div
                  className="prose prose-lg max-w-none 
                  prose-headings:text-slate 
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:text-muted prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-cyan prose-blockquote:border-cyan prose-blockquote:bg-accent/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic"
                >
                  {parse(selectedPost.content, {
                    replace: (domNode) => {
                      if (domNode instanceof DOMElement && domNode.name === 'p') {
                        return (
                          <ParagraphReaction>
                            <p>{domToReact(domNode.children as any)}</p>
                          </ParagraphReaction>
                        );
                      }
                    }
                  })}
                </div>

                <Comments slug={selectedPost.slug} />

                <div className="mt-12 pt-8 ">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-8 py-3 bg-slate text-azure rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Cerrar Lectura
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
