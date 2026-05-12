import { Scale } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate text-white py-12 mt-20" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Scale className="h-10 w-10 text-cyan" />
          <h3 className="text-2xl font-bold tracking-tight text-cyan">Blog de Ética Profesional y Ciudadana</h3>
          <p className="text-muted text-sm max-w-sm">
            Evidencia 3: blog de ética profesional y ciudadana.
          </p>

          <p className="text-muted text-sm max-w-sm">
            Profesora: Leticia Pacheco Cabañas.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Hecho por: Jordan Zahid Pacheco Estrada.
        </div>
      </div>
    </footer>
  )
}
