import { useState } from 'react';

const donationOptions = [
  { amount: 1000, label: '$1.000' },
  { amount: 2000, label: '$2.000' },
  { amount: 3000, label: '$3.000' },
  { amount: 5000, label: '$5.000' },
  { amount: 10000, label: '$10.000' },
  { amount: 0, label: 'Otro monto' }
];

const donationMethods = [
  {
    id: 'transferencia',
    title: 'Transferencia Bancaria',
    icon: '/img/transferenciaBancaria.webp',
    details: [
      { label: 'Banco', value: 'Banco Nación' },
      { label: 'CBU', value: '0110599520000000000000' },
      { label: 'Alias', value: 'REFUGIO.ESPERANZA' },
      { label: 'Titular', value: 'Fundación Rescate Animal' }
    ]
  },
  {
    id: 'mercadopago',
    title: 'Mercado Pago',
    icon: '/img/mpp.png',
    details: [
      { label: 'Alias', value: 'refugio.patitas' },
      { label: 'CVU', value: '0000003100000000000001' }
    ]
  },
  {
    id: 'efectivo',
    title: 'Efectivo en Refugio',
    icon: '/img/cash.png',
    details: [
      { label: 'Dirección', value: 'Av. Libertador 1234, CABA' },
      { label: 'Horario', value: 'Lunes a Viernes 9:00 - 18:00' }
    ]
  }
];

const helpWays = [
  {
    title: 'Donación Monetaria',
    description: 'Tu aporte económico nos ayuda a cubrir gastos veterinarios, alimento y mantenimiento del refugio.',
    icon: '/img/donation.png'
  },
  {
    title: 'Alimentos y Suministros',
    description: 'Necesitamos alimento balanceado, mantas, juguetes y productos de limpieza.',
    icon: '/img/foodDog1.png'
  },
  {
    title: 'Voluntariado',
    description: 'Podés colaborar con tu tiempo cuidando, paseando o ayudando en las instalaciones.',
    icon: '/img/voluntariado.png'
  },
  {
    title: 'Difusión',
    description: 'Compartí nuestras publicaciones en redes sociales para ayudarnos a encontrar hogares.',
    icon: '/img/difusion.png'
  }
];

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isHoveringDonate, setIsHoveringDonate] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    if (amount !== 0) {
      setCustomAmount('');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = selectedAmount === 0 ? customAmount : selectedAmount;
    console.log('Donación:', { amount: finalAmount, method: selectedMethod, form: formData });
    setShowConfetti(true);
    setShowThankYou(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowThankYou(false);
      setSelectedAmount(null);
      setCustomAmount('');
      setSelectedMethod(null);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 3000);
  };

  const isFormValid = () => {
    const hasAmount = selectedAmount !== null && (selectedAmount !== 0 || customAmount);
    const hasMethod = selectedMethod !== null;
    const hasName = formData.nombre.trim() !== '';
    const hasEmail = formData.email.trim() !== '';
    return hasAmount && hasMethod && hasName && hasEmail;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100">
      <section className="relative w-full h-96 bg-slate-900">
        <img
          src="/img/puppy.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-orange-900/50 to-amber-800/60"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
              Tu ayuda cambia vidas
            </h1>
            <p className="text-xl md:text-2xl font-light text-orange-50">
              Cada aporte nos permite seguir rescatando y cuidando mascotas en situación de abandono
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Cómo podés ayudar?</h2>
            <p className="text-lg text-slate-600">Hay muchas formas de colaborar con nuestra causa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpWays.map((way, index) => (
              <div key={index} className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:shadow-2xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img src={way.icon} alt={way.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{way.title}</h3>
                <p className="text-slate-600 text-center text-sm leading-relaxed">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donation-form" className="py-16 bg-gradient-to-b from-orange-100 via-amber-100 to-orange-50 relative">
        <div className="absolute top-2 right-142 w-24 h-24 hidden lg:block">
          <img src="/img/happyCat.png" alt="Gato feliz" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-orange-300">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Realizá tu donación</h2>
              <p className="text-lg text-slate-600">Elegí el monto y el método de pago</p>
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-slate-900 mb-4">
                Seleccioná el monto
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {donationOptions.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => handleAmountClick(option.amount)}
                    className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      selectedAmount === option.amount
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-400/60 scale-105 border-2 border-orange-400'
                        : 'bg-orange-50 text-orange-900 hover:bg-orange-100 hover:text-orange-950 border-2 border-orange-300 hover:border-orange-500 hover:shadow-lg'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {selectedAmount === 0 && (
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Ingresá el monto"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 focus:outline-none transition-all"
                  />
                </div>
              )}
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-slate-900 mb-4">
                Método de pago
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {donationMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedMethod === method.id
                        ? 'border-orange-500 bg-gradient-to-br from-orange-100 to-orange-200 shadow-xl shadow-orange-300/60 scale-105'
                        : 'border-orange-300 bg-white hover:border-orange-400 hover:bg-orange-50 hover:shadow-lg'
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg p-2 shadow-sm">
                      <img src={method.icon} alt={method.title} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-semibold text-slate-900 text-center text-sm">{method.title}</p>
                  </button>
                ))}
              </div>

              {selectedMethod && (
                <div className="mt-6 p-6 bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-400 rounded-xl shadow-lg">
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">
                    Datos para {donationMethods.find(m => m.id === selectedMethod)?.title}
                  </h4>
                  <div className="space-y-3">
                    {donationMethods.find(m => m.id === selectedMethod)?.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-2 border-orange-200">
                        <span className="font-semibold text-slate-700">{detail.label}:</span>
                        <span className="text-slate-900 font-mono text-sm font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`mb-8 p-6 rounded-xl transition-all duration-500 ${
              isFormValid() ? 'bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-400 shadow-xl shadow-orange-300/50' : 'bg-transparent'
            }`}>
              <label className="block text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span>Tus datos</span>
                {isFormValid() && (
                  <span className="text-sm font-normal text-orange-800 bg-orange-200 px-3 py-1 rounded-full animate-pulse border-2 border-orange-400">
                    ✓ Formulario completo
                  </span>
                )}
              </label>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo *"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 focus:outline-none transition-all ${
                      formData.nombre.trim() ? 'border-orange-400 bg-white shadow-md' : 'border-orange-300 bg-white'
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 focus:outline-none transition-all ${
                      formData.email.trim() ? 'border-orange-400 bg-white shadow-md' : 'border-orange-300 bg-white'
                    }`}
                  />
                </div>
                <div>
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje opcional"
                    value={formData.mensaje}
                    onChange={handleFormChange}
                    rows="3"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 focus:outline-none resize-none transition-all ${
                      formData.mensaje.trim() ? 'border-orange-400 bg-white shadow-md' : 'border-orange-300 bg-white'
                    }`}
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              onMouseEnter={() => setIsHoveringDonate(true)}
              onMouseLeave={() => setIsHoveringDonate(false)}
              className={`group relative w-full py-4 rounded-xl font-bold text-lg transition-all overflow-hidden ${
                isFormValid()
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-2xl shadow-orange-400/70 hover:shadow-orange-500/80 hover:scale-[1.02]'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span className="relative z-10">
                {selectedAmount && selectedAmount !== 0
                  ? `Donar $${selectedAmount.toLocaleString()}`
                  : customAmount
                  ? `Donar $${parseFloat(customAmount).toLocaleString()}`
                  : 'Completá los datos para donar'}
              </span>
              {isFormValid() && (
                <img
                  src={isHoveringDonate ? "/img/happyCat.png" : "/img/KindCat.png"}
                  alt="Gatito"
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                />
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">El impacto de tu donación</h2>
            <p className="text-lg text-slate-600">Así utilizamos los fondos recibidos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-400/60 group-hover:shadow-2xl group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                <img src="/img/AtencionVeterinaria.png" alt="Veterinaria" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Atención Veterinaria</h3>
              <p className="text-slate-600 leading-relaxed">Vacunas, esterilizaciones y tratamientos médicos</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-400/60 group-hover:shadow-2xl group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                <img src="/img/foodDog1.png" alt="Alimento" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Alimentación</h3>
              <p className="text-slate-600 leading-relaxed">Alimento balanceado de calidad para todas las mascotas</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-400/60 group-hover:shadow-2xl group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                <img src="/img/mantenimientoo.png" alt="Refugio" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mantenimiento</h3>
              <p className="text-slate-600 leading-relaxed">Instalaciones limpias y seguras para todos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-35 h-35 relative">
                <img
                  src="/img/happyCat.png"
                  alt="Perro feliz"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />

              </div>
            </div>

            <div className="text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 leading-tight">
                ¡Con tu ayuda, ellos tienen una nueva oportunidad!
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Donar mejora la vida de un Camperrito y también{' '}
                <span className="font-bold text-orange-700">llena tu corazón de alegría</span>.
              </p>
              <p className="text-md text-slate-600 mb-8">
                ¿Te sumás a esta hermosa familia?
              </p>
              <button
                onClick={() => {
                  const donationSection = document.getElementById('donation-form');
                  donationSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-orange-400/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300"
              >
                Doná ahora
              </button>
            </div>

            <div className="flex justify-center md:justify-start">
              <div className="w-35 h-35 relative">
                <img
                  src="/img/normalCat.png"
                  alt="Gato feliz"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="confetti absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                background: `${['#f59e0b', '#fb923c', '#fdba74', '#fbbf24', '#ea580c'][Math.floor(Math.random() * 5)]}`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      )}

      {showThankYou && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-slideUp border-t-4 border-amber-500">
            <div className="w-24 h-24 mx-auto mb-15 relative -top-7 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center shadow-xl shadow-amber-300/50">
              <img src="/img/happyCat.png" alt="Gato feliz" className="w-20 h-20 object-contain" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Gracias por tu donación!</h2>
            <p className="text-lg text-slate-600 mb-2">
              Tu aporte nos ayuda a seguir salvando vidas
            </p>
{/*             <p className="text-sm text-slate-500">Te enviamos un email con los detalles</p> */}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .confetti {
          animation: confettiFall linear forwards;
          border-radius: 2px;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}