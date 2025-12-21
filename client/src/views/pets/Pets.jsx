import { useState } from 'react';

const mockPets = [
  {
    id: 1,
    nombre: 'Panter',
    raza: 'Mestiza',
    edad: 3,
    descripcion: 'Perro muy amigable y juguetón. Le encanta correr en el parque y jugar con otros perros. Es perfecto para familias con niños.',
    sexo: 'HEMBRA',
    tamano: 'PEQUENO',
    esterilizado: true,
    vacunado: true,
    imagen: '/img/panter.PNG'
  },
  {
    id: 2,
    nombre: 'Janna',
    raza: 'Caniche',
    edad: 2,
    descripcion: 'Gata tranquila y cariñosa. Le gusta dormir al sol y recibir mimos. Ideal para departamentos.',
    sexo: 'HEMBRA',
    tamano: 'PEQUENO',
    esterilizado: true,
    vacunado: true,
    imagen: '/img/Janna.jpg'
  },
  {
    id: 3,
    nombre: 'Bonnie',
    raza: 'Boyero de Berna',
    edad: 5,
    descripcion: 'Perro guardián muy leal y protector. Necesita espacio para ejercitarse. Excelente compañero.',
    sexo: 'MACHO',
    tamano: 'GRANDE',
    esterilizado: false,
    vacunado: true,
    imagen: '/img/bonniee.PNG'
  },
  {
    id: 4,
    nombre: 'Mia',
    raza: 'Siamés',
    edad: 1,
    descripcion: 'Gatita muy juguetona y curiosa. Le encanta explorar y trepar. Perfecta para hogares activos.',
    sexo: 'HEMBRA',
    tamano: 'PEQUENO',
    esterilizado: true,
    vacunado: true,
    imagen: '/img/dog2.jpg'
  },
  {
    id: 5,
    nombre: 'Toby',
    raza: 'Beagle',
    edad: 4,
    descripcion: 'Perro muy sociable y energético. Ama las caminatas largas y es excelente con los niños.',
    sexo: 'MACHO',
    tamano: 'MEDIANO',
    esterilizado: true,
    vacunado: true,
    imagen: '/img/dog4.jpg'
  },
  {
    id: 6,
    nombre: 'Bella',
    raza: 'Golden Retriever',
    edad: 2,
    descripcion: 'Perra dulce y obediente. Le encanta nadar y jugar a buscar la pelota. Ideal para familias.',
    sexo: 'HEMBRA',
    tamano: 'GRANDE',
    esterilizado: true,
    vacunado: true,
    imagen: '/img/dog3.webp'
  }
];

export default function Pets() {
  const [selectedPet, setSelectedPet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);
  const [isHoveringClose, setIsHoveringClose] = useState(false);
  const [filters, setFilters] = useState({
    sexo: '',
    tamano: '',
    esterilizado: '',
    vacunado: ''
  });

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    motivacion: '',
    experiencia: '',
    vivienda: ''
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleAdoptClick = (pet, e) => {
    e.stopPropagation();
    setSelectedPet(pet);
  };

  const closeModal = () => {
    setSelectedPet(null);
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
      motivacion: '',
      experiencia: '',
      vivienda: ''
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitud de adopción:', { pet: selectedPet, form: formData });
    alert(`Solicitud enviada para adoptar a ${selectedPet.nombre}. Te contactaremos pronto.`);
    closeModal();
  };

  const filteredPets = mockPets.filter(pet => {
    if (filters.sexo && pet.sexo !== filters.sexo) return false;
    if (filters.tamano && pet.tamano !== filters.tamano) return false;
    if (filters.esterilizado && pet.esterilizado.toString() !== filters.esterilizado) return false;
    if (filters.vacunado && pet.vacunado.toString() !== filters.vacunado) return false;
    return true;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              src="/img/patitas1.png"
              alt="Patitas"
              className="absolute inset-0 w-full h-full object-contain animate-paw1"
            />
            <img
              src="/img/patitas2.png"
              alt="Patita"
              className="absolute inset-0 w-full h-full object-contain animate-paw2"
            />
          </div>
          <p className="text-xl text-gray-700 font-semibold">Cargando mascotas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative w-full h-96 bg-gray-800">
        <img
          src="/img/puppy.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Encontrá tu compañero ideal
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Cada mascota merece un hogar lleno de amor y cuidado
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white shadow-md border-b border-gray-200 relative">
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 hidden lg:block z-10">
          <img
            src="/img/catSleeping.png"
            alt="Gato durmiendo"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <select
              onChange={(e) => handleFilterChange('sexo', e.target.value)}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-orange-500 focus:outline-none font-medium text-gray-700 transition-colors"
              value={filters.sexo}
            >
              <option value="">Todos los sexos</option>
              <option value="MACHO">Macho</option>
              <option value="HEMBRA">Hembra</option>
            </select>

            <select
              onChange={(e) => handleFilterChange('tamano', e.target.value)}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-orange-500 focus:outline-none font-medium text-gray-700 transition-colors"
              value={filters.tamano}
            >
              <option value="">Todos los tamaños</option>
              <option value="PEQUENO">Pequeño</option>
              <option value="MEDIANO">Mediano</option>
              <option value="GRANDE">Grande</option>
            </select>

            <select
              onChange={(e) => handleFilterChange('esterilizado', e.target.value)}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-orange-500 focus:outline-none font-medium text-gray-700 transition-colors"
              value={filters.esterilizado}
            >
              <option value="">Esterilización</option>
              <option value="true">Esterilizado</option>
              <option value="false">No esterilizado</option>
            </select>

            <select
              onChange={(e) => handleFilterChange('vacunado', e.target.value)}
              className="px-5 py-3 rounded-lg border-2 border-gray-300 bg-white focus:border-orange-500 focus:outline-none font-medium text-gray-700 transition-colors"
              value={filters.vacunado}
            >
              <option value="">Vacunación</option>
              <option value="true">Vacunado</option>
              <option value="false">No vacunado</option>
            </select>

            {(filters.sexo || filters.tamano || filters.esterilizado || filters.vacunado) && (
              <button
                onClick={() => setFilters({ sexo: '', tamano: '', esterilizado: '', vacunado: '' })}
                className="px-5 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="mt-4 text-center">
            <span className="text-gray-600 font-medium">
              {filteredPets.length} {filteredPets.length === 1 ? 'mascota disponible' : 'mascotas disponibles'}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPets.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-semibold text-gray-700 mb-4">
                No se encontraron mascotas con estos filtros
              </p>
              <button
                onClick={() => setFilters({ sexo: '', tamano: '', esterilizado: '', vacunado: '' })}
                className="px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Ver todas las mascotas
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPets.map((pet) => (
                <div
                  key={pet.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={pet.imagen}
                      alt={pet.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {pet.nombre}
                      </h3>
                      <img
                        src={pet.sexo === 'MACHO' ? '/img/sexoMasculino.png' : '/img/sexoFemenino.png'}
                        alt={pet.sexo}
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    <div className="space-y-2 mb-4 text-gray-600">
                      <p><span className="font-semibold">Raza:</span> {pet.raza}</p>
                      <p><span className="font-semibold">Edad:</span> {pet.edad} {pet.edad === 1 ? 'año' : 'años'}</p>
                      <p><span className="font-semibold">Tamaño:</span> {pet.tamano}</p>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {pet.descripcion}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pet.esterilizado && (
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-xs font-semibold border border-emerald-200">
                          Esterilizado
                        </span>
                      )}
                      {pet.vacunado && (
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-xs font-semibold border border-amber-200">
                          Vacunado
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => handleAdoptClick(pet, e)}
                      className="group/btn relative w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors overflow-hidden"
                    >
                      <span className="relative z-10">Solicitar Adopción</span>
                      <img
                        src="/img/KindCat.png"
                        alt="Gatito"
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 object-contain opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-20"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <img
            src="/img/catSleeping.png"
            alt="Gato descansando"
            className="w-24 h-24 object-contain drop-shadow-xl opacity-70"
          />
        </div>
      </section>

      {selectedPet && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-20 right-6 w-16 h-16 z-30 hidden md:block">
              <img
                src="/img/catSleeping.png"
                alt="Gato durmiendo"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6 text-white relative">
              <button
                onClick={closeModal}
                onMouseEnter={() => setIsHoveringClose(true)}
                onMouseLeave={() => setIsHoveringClose(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center group"
              >
                <span className="text-white hover:text-gray-200 text-2xl font-bold">×</span>

              </button>
              <h2 className="text-3xl font-bold mb-2">Solicitud de Adopción</h2>
              <p className="text-lg">Completá el formulario para adoptar a {selectedPet.nombre}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                    placeholder="11 1234-5678"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Dirección *
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all"
                  placeholder="Calle, número, ciudad"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Por qué querés adoptar a {selectedPet.nombre}? *
                </label>
                <textarea
                  name="motivacion"
                  value={formData.motivacion}
                  onChange={handleFormChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all resize-none"
                  placeholder="Contanos tu motivación..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Tenés experiencia con mascotas? *
                </label>
                <textarea
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleFormChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all resize-none"
                  placeholder="Contanos sobre tu experiencia..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Describí tu vivienda *
                </label>
                <textarea
                  name="vivienda"
                  value={formData.vivienda}
                  onChange={handleFormChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all resize-none"
                  placeholder="Casa/Depto, patio, espacio disponible..."
                ></textarea>
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHoveringSubmit(true)}
                onMouseLeave={() => setIsHoveringSubmit(false)}
                className="group/submit relative w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Enviar Solicitud</span>
                <img
                  src={isHoveringSubmit ? "/img/happyCat.png" : "/img/catSleeping.png"}
                  alt="Gatito"
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 object-contain opacity-0 group-hover/submit:opacity-100 transition-opacity duration-300 z-20"
                />
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes paw1 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes paw2 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-paw1 {
          animation: paw1 1s ease-in-out infinite;
        }
        .animate-paw2 {
          animation: paw2 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}