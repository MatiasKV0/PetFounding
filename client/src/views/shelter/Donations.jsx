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
    icon: '/img/foodDog.png'
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
    setShowThankYou(true);
    setTimeout(() => {
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
    <div className="min-h-screen bg-gray-50">
      <section className="relative w-full h-96 bg-gray-800">
        <img
          src="/img/puppy.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Tu ayuda cambia vidas
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Cada aporte nos permite seguir rescatando y cuidando mascotas en situación de abandono
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo podés ayudar?</h2>
            <p className="text-lg text-gray-600">Hay muchas formas de colaborar con nuestra causa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpWays.map((way, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img src={way.icon} alt={way.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{way.title}</h3>
                <p className="text-gray-600 text-center text-sm">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 relative">
        <div className="absolute top-10 right-10 w-24 h-24 hidden lg:block">
          <img src="/img/happyCat.png" alt="Gato feliz" className="w-full h-full object-contain drop-shadow-xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Realizá tu donación</h2>
              <p className="text-lg text-gray-600">Elegí el monto y el método de pago</p>
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Seleccioná el monto
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {donationOptions.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => handleAmountClick(option.amount)}
                    className={`py-4 px-6 rounded-lg font-semibold transition-all ${
                      selectedAmount === option.amount
                        ? 'bg-orange-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Método de pago
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {donationMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMethod === method.id
                        ? 'border-orange-600 bg-orange-50 shadow-md'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto mb-3">
                      <img src={method.icon} alt={method.title} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-semibold text-gray-900 text-center text-sm">{method.title}</p>
                  </button>
                ))}
              </div>

              {selectedMethod && (
                <div className="mt-6 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Datos para {donationMethods.find(m => m.id === selectedMethod)?.title}
                  </h4>
                  <div className="space-y-3">
                    {donationMethods.find(m => m.id === selectedMethod)?.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-md">
                        <span className="font-semibold text-gray-700">{detail.label}:</span>
                        <span className="text-gray-900 font-mono text-sm">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Tus datos
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje opcional"
                    value={formData.mensaje}
                    onChange={handleFormChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              onMouseEnter={() => setIsHoveringDonate(true)}
              onMouseLeave={() => setIsHoveringDonate(false)}
              className={`group relative w-full py-4 rounded-lg font-bold text-lg transition-all overflow-hidden ${
                isFormValid()
                  ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">El impacto de tu donación</h2>
            <p className="text-lg text-gray-600">Así utilizamos los fondos recibidos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/img/atencionVeterinaria.png" alt="Veterinaria" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Atención Veterinaria</h3>
              <p className="text-gray-600">Vacunas, esterilizaciones y tratamientos médicos</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/img/foodDog.png" alt="Alimento" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alimentación</h3>
              <p className="text-gray-600">Alimento balanceado de calidad para todas las mascotas</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/img/mantenimientoo.png" alt="Refugio" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mantenimiento</h3>
              <p className="text-gray-600">Instalaciones limpias y seguras para todos</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-2 flex justify-center py-8">
        <img
          src="/img/catSleeping.png"
          alt="Gato descansando"
          className="w-24 h-24 object-contain drop-shadow-xl opacity-90"
        />
      </div>

      {showThankYou && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-slideUp">
            <div className="w-24 h-24 mx-auto mb-6">
              <img src="/img/happyCat.png" alt="Gato feliz" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Gracias por tu donación!</h2>
            <p className="text-lg text-gray-600 mb-2">
              Tu aporte nos ayuda a seguir salvando vidas
            </p>
            <p className="text-sm text-gray-500">Te enviamos un email con los detalles</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}