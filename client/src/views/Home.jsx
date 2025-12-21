import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

function Home() {
  const adoptaImgRef = useRef(null)
  const adoptaTextRef = useRef(null)
  const visitaTextRef = useRef(null)
  const visitaImgRef = useRef(null)

  const [visible, setVisible] = useState({
    adoptaImg: false,
    adoptaText: false,
    visitaText: false,
    visitaImg: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(prev => ({
              ...prev,
              [entry.target.dataset.key]: true,
            }))
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = [
      adoptaImgRef,
      adoptaTextRef,
      visitaTextRef,
      visitaImgRef,
    ]

    elements.forEach(ref => ref.current && observer.observe(ref.current))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full bg-gray-100">
      <section className="relative w-full min-h-screen">
        <img
          src="/img/puppy.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/50"></div>

        <div className="absolute top-4 right-0 w-24 h-24 md:w-28 md:h-28 z-20">
          <img
            src="/img/hideCat.png"
            alt="Gato"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl font-serif">
              Desde 2009 rescatamos y cuidamos mascotas en situación de abandono
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg font-sans">
              Conectando corazones con patitas
            </p>
            <Link
              to="/donations"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold
                         transition-all duration-300 shadow-2xl font-sans
                         hover:bg-blue-700 hover:shadow-blue-500/50 hover:scale-110 hover:-translate-y-1"
            >
              Conocé cómo colaborar
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-17 left-4 w-24 h-24 md:w-28 md:h-28 z-10">
              <img
                src="/img/catSleeping.png"
                alt="Gato durmiendo"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            <div
              ref={adoptaImgRef}
              data-key="adoptaImg"
              className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200/50 transition-all duration-700 ${
                visible.adoptaImg
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <img
                src="/img/dog1.jpg"
                alt="Adopción"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            ref={adoptaTextRef}
            data-key="adoptaText"
            className={`transition-all duration-700 ${
              visible.adoptaText
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
              Adoptá y cambiá dos vidas
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-sans">
              Adoptar es más que sumar una mascota a tu hogar: es abrirle la
              puerta a una nueva vida llena de{" "}
              <strong className="text-blue-600 font-semibold">amor, cuidados y segundas oportunidades</strong>.
            </p>
            <Link
              to="/pets"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold
                         transition-all duration-300 shadow-lg font-sans
                         hover:bg-blue-700 hover:shadow-2xl hover:scale-110 hover:-translate-y-1"
            >
              Enterate cómo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={visitaTextRef}
            data-key="visitaText"
            className={`order-2 md:order-1 transition-all duration-700 ${
              visible.visitaText
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif">
              Vení a conocer los refugios y hacé la diferencia
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-sans">
              Cada visita es una oportunidad para brindar{" "}
              <strong className="text-blue-600 font-semibold">amor, compañía y alegría</strong>.
            </p>
            <Link
              to="/shelters"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold
                         transition-all duration-300 shadow-lg font-sans
                         hover:bg-blue-700 hover:shadow-2xl hover:scale-110 hover:-translate-y-1"
            >
              Participá de las visitas
            </Link>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -top-19 right-4 w-24 h-24 md:w-28 md:h-28 z-10">
              <img
                src="/img/catSitting.png"
                alt="Gato sentado"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            <div
              ref={visitaImgRef}
              data-key="visitaImg"
              className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200/50 transition-all duration-700 ${
                visible.visitaImg
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <img
                src="/img/shelter.jpg"
                alt="Visita refugio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden border-t-2 border-gray-200/50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="relative w-24 h-24 md:w-28 md:h-28 hidden md:block flex-shrink-0 pointer-events-none">
              <img
                src="/img/happyCat.png"
                alt="Gato feliz"
                className="absolute inset-0 translate-y-43 w-full h-full object-contain
                           transition-all duration-500 drop-shadow-2xl
                           group-hover:opacity-0 group-hover:scale-110"
              />
              <img
                src="/img/KindCat.png"
                alt="Gato sorprendido"
                className="absolute inset-0 translate-y-42 w-full h-full object-contain opacity-0
                           transition-all duration-500 drop-shadow-2xl
                           group-hover:opacity-100 group-hover:scale-110"
              />
            </div>

            <div className="text-center md:text-left flex-grow">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">
                Un sueño que podés apoyar hoy mismo
              </h2>
              <p className="text-xl mb-8 text-gray-700 font-sans">
                <strong className="text-gray-900 font-semibold">Tu ayuda es esencial</strong> para que sigamos brindando
                segundas oportunidades.
              </p>

              <Link
                to="/donations"
                className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full
                           text-lg font-semibold shadow-2xl font-sans
                           transition-all duration-300
                           hover:bg-emerald-700 hover:scale-110 hover:shadow-emerald-600/50 hover:-translate-y-1"
              >
                Colaborá ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home