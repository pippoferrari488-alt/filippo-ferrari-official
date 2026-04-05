import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-8xl font-black text-gradient mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-4">Pagina non trovata</h1>
        <p className="text-gray-400 mb-8">La pagina che stai cercando non esiste.</p>
        <Link href="/">
          <span className="inline-block px-8 py-3 btn-red rounded font-semibold cursor-pointer">
            Torna alla Home
          </span>
        </Link>
      </div>
    </div>
  );
}
