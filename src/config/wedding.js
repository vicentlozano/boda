export const wedding = {
  couple: {
    bride: 'Vicent',
    groom: 'Teresa',
  },

  quote: {
    text: 'Dos vidas independientes que hoy eligen converger, para ilustrar juntos las páginas de un destino común y un amor sin límites.',
    reference: '🌹',
  },

  invitation:
    'Con el amor de nuestras familias y la alegría de compartir nuestras vidas, nos complace invitarles a celebrar nuestro matrimonio.',

  date: {
    month: 'OCTUBRE',
    dayName: 'SÁBADO',
    day: 31,
    year: 2026,
    iso: '2026-10-31T11:00:00',
  },

  music: {
    title: 'Dale play a nuestra canción',
    src: '/audio/cancion.mp3',
  },

  locations: [
    {
      id: 'ceremony',
      title: 'Ceremonia Civil',
      venue: 'Ayuntamiento de Calpe',
      address: 'Pl. Miguel Roselló, 2, 03710 Calpe, Alicante',
      mapsUrl: 'https://maps.app.goo.gl/en4Sek1snJeEFJaFA',
    },
    {
      id: 'reception',
      title: 'Celebración',
      venue: 'Restaurant Oscar',
      address: 'Urbanización Maryvilla, 28, 03710 Calp, Alicante',
      mapsUrl: 'https://maps.app.goo.gl/ZJBtfAW2icDvkXAm8',
    },
  ],

  itinerary: [
    { time: '11:00 AM', label: 'Salida desde casa de los novios', icon: 'departure' },
    { time: '12:00 PM', label: 'Ceremonia civil', icon: 'civil' },
    { time: '1:30-5:00 PM', label: 'Comida en el restaurante', icon: 'dinner' },
    { time: '5:00-9:30 PM', label: 'Fiesta con DJ', icon: 'dance' },
    { time: '09:30 PM - 12:00 AM', label: 'Ultimas copas en el chalet', icon: 'cocktail' },
  ],

  dressCode: {
    title: 'Código de vestimenta',
    description: 'Formal',
  },

  gifts: {
    title: 'Sugerencia de regalos',
    transferLabel: 'Transferencia',
    bankName: 'CaixaBank',
    accountHolder: 'Vicent & Teresa',
    accountNumber: 'ES66 2100 4241 4322 0012 9546',
  },

  rsvp: {
    title: 'Confirmar asistencia',
    buttonLabel: 'Confirmar aquí',
    formspreeId: 'xykrgban',
    note: 'Celebración para adultos y niños. Tenemos amimaciones para los niños.',
  },

  footer: {
    message: '¡Muchas gracias!',
  },
}
