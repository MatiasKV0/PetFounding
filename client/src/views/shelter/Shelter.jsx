import { useState } from 'react';

const mockShelters = [
  {
    id: 1,
    nombreRefugio: 'Refugio Esperanza',
    direccion: 'Av. Libertador 1234, Buenos Aires',
    descripcion: 'Un refugio comprometido con el bienestar animal desde hace más de 10 años. Contamos con instalaciones amplias y personal capacitado.',
    capacidad: 50,
    mascotasActuales: 35,
    telefono: '11 4567-8901',
    email: 'contacto@esperanza.org',
    horario: 'Lunes a Viernes: 9:00 - 18:00, Sábados: 10:00 - 14:00',
    imagen: '/img/sHELTER.webp'
  },
  {
    id: 2,
    nombreRefugio: 'Hogar de Patitas',
    direccion: 'Calle 50 N° 456, La Plata',
    descripcion: 'Refugio familiar dedicado al rescate y rehabilitación de animales abandonados. Ofrecemos amor y cuidados especializados.',
    capacidad: 30,
    mascotasActuales: 28,
    telefono: '221 456-7890',
    email: 'info@hogarpatitas.org',
    horario: 'Martes a Domingo: 10:00 - 17:00',
    imagen: '/img/sHELTER.webp'
  },
  {
    id: 3,
    nombreRefugio: 'Refugio San Francisco',
    direccion: 'Av. San Martín 789, CABA',
    descripcion: 'Organización sin fines de lucro enfocada en el rescate y adopción responsable. Más de 500 adopciones exitosas.',
    capacidad: 70,
    mascotasActuales: 45,
    telefono: '11 5678-9012',
    email: 'adopciones@sanfrancisco.org',
    horario: 'Lunes a Sábados: 8:00 - 19:00',
    imagen: '/img/sHELTER.webp'
  },
  {
    id: 4,
    nombreRefugio: 'Casa de Ángeles',
    direccion: 'Calle Rivadavia 321, Quilmes',
    descripcion: 'Refugio que brinda atención veterinaria integral y programas de socialización para todas las mascotas rescatadas.',
    capacidad: 40,
    mascotasActuales: 32,
    telefono: '11 6789-0123',
    email: 'casadeangeles@refugio.org',
    horario: 'Miércoles a Domingo: 11:00 - 16:00',
    imagen: '/img/sHELTER.webp'
  }
];

export default function Shelters() {
  const [selectedShelter, setSelectedShelter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);
  const [isHoveringClose, setIsHoveringClose] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
    tipoVisita: 'voluntariado'
  });

  const handleVisitClick = (shelter, e) => {
    e.stopPropagation();
    setSelectedShelter(shelter);
  };

  const closeModal = () => {
    setSelectedShelter(null);
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mensaje: '',
      tipoVisita: 'voluntariado'
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitud de visita:', { shelter: selectedShelter, form: formData });
    alert(`Solicitud enviada para visitar ${selectedShelter.nombreRefugio}. Te contactaremos pronto.`);
    closeModal();
  };

  const filteredShelters = mockShelters.filter(shelter =>
    shelter.nombreRefugio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shelter.direccion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-300 flex items-center justify-center">
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
          <p className="text-xl text-gray-700 font-semibold">Cargando refugios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <section className="relative w-full h-96 bg-gray-800">
        <img
          src="/img/shelter.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Conocé nuestros refugios
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Espacios llenos de amor dedicados al cuidado de mascotas
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            <aside className="lg:col-span-1">
              <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 sticky top-20">
                <div className="relative">
                  <div className="absolute -top-19 -right-4 w-20 h-20 hidden lg:block z-10">
                    <img
                      src="/img/catSleeping.png"
                      alt="Gato durmiendo"
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Buscar
                  </h2>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Buscar refugio o ubicación..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-orange-500 focus:outline-none"
                    />

                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="w-full border border-orange-500 text-orange-600 py-2.5 rounded-md hover:bg-orange-50 transition"
                      >
                        Limpiar búsqueda
                      </button>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <span className="text-gray-600 font-medium">
                      {filteredShelters.length} {filteredShelters.length === 1 ? 'refugio' : 'refugios'}
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              {filteredShelters.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-2xl font-semibold text-gray-700 mb-4">
                    No se encontraron refugios
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    Ver todos los refugios
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredShelters.map((shelter) => (
                    <div
                      key={shelter.id}
                      className="group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200"
                    >
                      <div className="relative h-56 bg-gray-100 overflow-hidden">
                        <img
                          src={shelter.imagen}
                          alt={shelter.nombreRefugio}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {shelter.mascotasActuales}/{shelter.capacidad} mascotas
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {shelter.nombreRefugio}
                        </h3>

                        <div className="space-y-2 mb-4 text-gray-600">
                          <p className="flex items-start gap-2">
                            <img
                              src="/img/location.jpg"
                              alt="Dirección"
                              className="w-4 h-4 mt-0.5 object-contain"
                            />
                            <span>{shelter.direccion}</span>
                          </p>

                          <p className="flex items-start gap-2">
                            <img
                              src="/img/phone.png"
                              alt="Teléfono"
                              className="w-4 h-4 mt-0.5 object-contain"
                            />
                            <span>{shelter.telefono}</span>
                          </p>

                          <p className="flex items-start gap-2">
                            <img
                              src="/img/time.png"
                              alt="Horario"
                              className="w-4 h-4 mt-0.5 object-contain"
                            />
                            <span className="text-sm">{shelter.horario}</span>
                          </p>
                        </div>

                        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                          {shelter.descripcion}
                        </p>

                        <button
                          onClick={(e) => handleVisitClick(shelter, e)}
                          className="group/btn relative w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors overflow-hidden"
                        >
                          <span className="relative z-10">Solicitar Visita</span>
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

          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-2 flex">
        <img
          src="/img/KindCat.png"
          alt="Gato descansando"
          className="w-24 h-24 object-contain drop-shadow-xl opacity-90 translate-y-6"
        />
      </div>

      {selectedShelter && (
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
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
              >
                <span className="text-white hover:text-gray-200 text-2xl font-bold">×</span>
              </button>
              <h2 className="text-3xl font-bold mb-2">Solicitud de Visita</h2>
              <p className="text-lg">Completá el formulario para visitar {selectedShelter.nombreRefugio}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleFormChange} required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido *</label>
                  <input type="text" name="apellido" value={formData.apellido} onChange={handleFormChange} required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="Tu apellido" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleFormChange} required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono *</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleFormChange} required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                    placeholder="11 1234-5678" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de visita *</label>
                <select name="tipoVisita" value={formData.tipoVisita} onChange={handleFormChange} required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none">
                  <option value="voluntariado">Voluntariado</option>
                  <option value="conocer">Conocer el refugio</option>
                  <option value="adopcion">Buscar mascota para adoptar</option>
                  <option value="donacion">Realizar donación</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje adicional</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleFormChange} rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none resize-none"
                  placeholder="Contanos más sobre tu interés..."></textarea>
              </div>

              <button
                onClick={handleSubmit}
                onMouseEnter={() => setIsHoveringSubmit(true)}
                onMouseLeave={() => setIsHoveringSubmit(false)}
                className="group/submit relative w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl overflow-hidden"
              >
              <span className="relative z-10">Enviar Solicitud</span>
              <img
                src="/img/happyCat.png"
                alt="Gatito"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 object-contain opacity-0 group-hover/submit:opacity-100 transition-opacity duration-300 z-20"
              />
              </button>
            </div>
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