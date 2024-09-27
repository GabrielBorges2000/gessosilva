'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'

import Logo from '@/src/assets/logo.svg'
import Sanca from '@/src/assets/sanca.jpg'
import Forro from '@/src/assets/forro.jpg'
import Moldura from '@/src/assets/moldura.jpg'

const services = [
  {
    title: "Forro de Gesso",
    description: "Instalação de forros de gesso lisos e decorativos para diversos ambientes.",
    image: Forro
  },
  {
    title: "Sancas",
    description: "Criação de sancas personalizadas para iluminação indireta e decoração.",
    image: Sanca
  },
  {
    title: "Molduras",
    description: "Aplicação de molduras decorativas em paredes e tetos.",
    image: Moldura
  }
]


export function LandingPageComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#18191E] shadow-md fixed top-0 left-0 right-0 z-50 px-8 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex flex-row gap-4 items-center justify-center'>
            <Image src={Logo} alt="Gesso Silva Logo" width={70} height={70} quality={100} priority />
            <h1 className='text-3xl text-[#DF9146]'>Gesso Silva</h1>
         </div>
          <nav className='hidden sm:flex'>
            <ul className="flex space-x-6">
              <li><Link href="#hero" className="text-gray-100 hover:text-gray-400">Inicio</Link></li>
              <li><Link href="#sobre" className="text-gray-100 hover:text-gray-400">Sobre</Link></li>
              <li><Link href="#servicos" className="text-gray-100 hover:text-gray-400">Serviços</Link></li>
              <li><Link href="#contato" className="text-gray-100 hover:text-gray-400">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id='hero' className="hero relative h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-b from-black/80 to-transparent" style={{backgroundImage: 'url("/gesso.webp")'}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div 
            className="text-center text-white relative z-10"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Gesso Silva</h1>
            <p className="text-xl mb-8 text-gray-200">Transformando espaços com qualidade e elegância</p>
            <Link href="#contato" className="bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-700 transition duration-300">
              Entre em contato
            </Link>
          </motion.div>
        </section>

        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Sobre Nós</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              A Gesso Silva é especializada em soluções de gesso para residências e empresas. Com anos de experiência, 
              nossa equipe altamente qualificada oferece serviços de excelência, transformando ambientes com criatividade 
              e precisão. Nosso compromisso é entregar projetos de alta qualidade, respeitando prazos e superando as 
              expectativas dos nossos clientes.
            </p>
          </div>
        </section>

        <section id="servicos" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={service.image} alt={service.title} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Entre em Contato</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <Phone className="text-yellow-600" />
                <span className="text-lg text-gray-700">+55 11 95725-8120</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-yellow-600" />
                <span className="text-lg text-gray-700">+55 11 930421732</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-yellow-600" />
                <span className="text-lg text-gray-700">silva.gesso.79@gmail.com</span>
              </div>
              <Link 
                href="https://wa.me/5511957258120?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
              >
                <MessageCircle />
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Gesso Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

