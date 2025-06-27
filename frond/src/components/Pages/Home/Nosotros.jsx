import { perfilSocios } from '@/assets/Aliados/Aliados.js';
import { useNavigate } from 'react-router-dom';

export default function Nosotros() {
  const navigate = useNavigate();

  const handleClick = (nombre) => {
    navigate(`/user/${encodeURIComponent(nombre)}`);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Barista Estudios</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Nuestro equipo ayuda directamente al productor con cafés sostenibles.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {perfilSocios.map((post) => (
            <article key={post.correo || post.nombre} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                {/* Puedes dejar estos en blanco o poner datos simulados si quieres fechas */}
                <time dateTime={post.datetime || ''} className="text-gray-500">
                  {post.date || 'Hoy'}
                </time>
                <a
                  href={post.category?.href || '#'}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category?.title || post.rol}
                </a>
              </div>
              <div className="group relative">
                <h3
                  onClick={() => handleClick(post.nombre)}
                  className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 cursor-pointer"
                >
                  <span className="absolute inset-0" />
                  {post.nombre}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.descripcion}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt={post.nombre} src={post.imagen} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p
                    onClick={() => handleClick(post.nombre)}
                    className="font-semibold text-gray-900 cursor-pointer hover:underline"
                  >
                    {post.nombre}
                  </p>
                  <p className="text-gray-600">{post.rol}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
