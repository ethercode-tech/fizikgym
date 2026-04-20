import { LandingPayload } from "@/lib/types";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "543884121964";

export const landingData: LandingPayload = {
  gym: {
    name: "Fizik Gym",
    tagline: "Entrena en Chijra con acompanamiento real",
    description:
      "Musculacion, fuerza y cardio con equipamiento moderno y profes que te guian para cumplir objetivos reales.",
    phone: "+54 388 412-1964",
    whatsappNumber: `+${WHATSAPP_NUMBER}`,
    address: {
      line1: "La Amapola 733",
      neighborhood: "Chijra",
      city: "San Salvador de Jujuy",
      province: "Jujuy",
      country: "Argentina"
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Amapola+733+Chijra+San+Salvador+de+Jujuy",
    social: {
      instagram: "https://www.instagram.com/fizikgym_jujuy/",
      facebook: "https://www.facebook.com/fizikgym/?locale=es_LA"
    }
  },
  schedules: [
    { weekday: "Lunes", ranges: ["07:00 - 12:00", "14:00 - 22:30"] },
    { weekday: "Martes", ranges: ["07:00 - 12:00", "14:00 - 22:30"] },
    { weekday: "Miercoles", ranges: ["07:00 - 12:00", "14:00 - 22:30"] },
    { weekday: "Jueves", ranges: ["07:00 - 12:00", "14:00 - 22:30"] },
    { weekday: "Viernes", ranges: ["07:00 - 12:00", "14:00 - 22:30"] },
    { weekday: "Sabado", ranges: ["09:00 - 13:00"], note: "Consultas por WhatsApp por la tarde" },
    { weekday: "Domingo", ranges: ["Cerrado"], isClosed: true }
  ],
  plans: [
    {
      id: "plan-mensual",
      name: "Plan mensual",
      description: "Entrenamiento libre con seguimiento semanal.",
      priceLabel: "Consultar precio actualizado",
      ctaLabel: "Quiero plan mensual"
    },
    {
      id: "plan-estudiante",
      name: "Plan estudiante",
      description: "Franja adaptada para estudiantes con horario flexible.",
      priceLabel: "Consultar promo vigente",
      ctaLabel: "Consultar promo estudiante"
    },
    {
      id: "plan-inicio",
      name: "Plan inicio",
      description: "Ideal para arrancar con rutina guiada y evaluacion inicial.",
      priceLabel: "Incluye onboarding",
      ctaLabel: "Quiero comenzar"
    }
  ],
  testimonials: [
    {
      author: "Micaela R.",
      quote: "El acompanamiento del equipo hace toda la diferencia, no entrenas solo.",
      source: "Resena interna autorizada"
    },
    {
      author: "Franco A.",
      quote: "Buen ambiente, maquinas cuidadas y horarios comodos para salir del trabajo.",
      source: "Resena interna autorizada"
    },
    {
      author: "Carla G.",
      quote: "Me ayudaron a sostener constancia y mejorar mi fuerza en pocas semanas.",
      source: "Resena interna autorizada"
    }
  ],
  images: [
    {
      id: "hero",
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
      alt: "Persona entrenando con barra en gimnasio moderno",
      width: 1600,
      height: 1067
    },
    {
      id: "gallery-1",
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Zona de maquinas de fuerza",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-2",
      url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      alt: "Mancuernas ordenadas en rack",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-3",
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      alt: "Entrenamiento funcional en piso de goma",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-4",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      alt: "Atleta usando bicicleta de aire",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-5",
      url: "https://images.unsplash.com/photo-1583500178690-f7be4f588b91?auto=format&fit=crop&w=1200&q=80",
      alt: "Entrenamiento de core en clase grupal",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-6",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
      alt: "Instructor guiando ejercicio de fuerza",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-7",
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1200&q=80",
      alt: "Persona haciendo remo en maquina",
      width: 1200,
      height: 800
    },
    {
      id: "gallery-8",
      url: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80",
      alt: "Area cardio con caminadoras",
      width: 1200,
      height: 800
    }
  ],
  faq: [
    {
      id: "faq-1",
      question: "Necesito experiencia previa para empezar?",
      answer: "No. Armamos una rutina inicial segun tu nivel y objetivos actuales."
    },
    {
      id: "faq-2",
      question: "Puedo entrenar en horarios partidos?",
      answer: "Si. El esquema semanal combina turno manana y tarde, segun el dia."
    },
    {
      id: "faq-3",
      question: "Ofrecen plan de prueba?",
      answer: "Si, puedes consultarlo por WhatsApp y te respondemos segun disponibilidad."
    },
    {
      id: "faq-4",
      question: "Como llego al gimnasio?",
      answer: "Estamos en Barrio Chijra, La Amapola 733, con acceso directo desde Google Maps."
    },
    {
      id: "faq-5",
      question: "Puedo pedir info de precios sin ir al local?",
      answer: "Si, enviando mensaje por WhatsApp te contamos planes y promos vigentes."
    },
    {
      id: "faq-6",
      question: "Que debo llevar el primer dia?",
      answer: "Ropa comoda, agua y ganas de entrenar. Te guiamos en todo lo demas."
    }
  ],
  seo: {
    title: "Fizik Gym | Gimnasio en Chijra",
    description:
      "Horarios, ubicacion, beneficios y contacto directo por WhatsApp para entrenar en Fizik Gym."
  },
  updatedAt: new Date().toISOString()
};

export function getLandingContent() {
  return landingData;
}
