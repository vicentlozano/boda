export const wedding = {
  date: {
    day: 31,
    year: 2026,
    iso: '2026-10-31T11:00:00',
  },

  music: {
    src: 'public/audio/cancion.mp3',
  },

  locations: [
    {
      id: 'ceremony',
      venue: 'Ayuntamiento de Calpe',
      address: 'Pl. Miguel Roselló, 2, 03710 Calpe, Alicante',
      mapsUrl: 'https://maps.app.goo.gl/en4Sek1snJeEFJaFA',
    },
    {
      id: 'reception',
      venue: 'Restaurant Oscar',
      address: 'Urbanización Maryvilla, 28, 03710 Calp, Alicante',
      mapsUrl: 'https://maps.app.goo.gl/ZJBtfAW2icDvkXAm8',
    },
  ],

  itinerary: [
    { time: '11:00 AM', icon: 'departure', key: 'departure' },
    { time: '12:00 PM', icon: 'civil', key: 'civil' },
    { time: '1:30-5:00 PM', icon: 'dinner', key: 'dinner' },
    { time: '5:00-9:30 PM', icon: 'dance', key: 'dance' },
    { time: '09:30 PM - 12:00 AM', icon: 'cocktail', key: 'cocktail' },
  ],

  gifts: {
    bankName: 'CaixaBank',
    accountHolder: 'Teresa & Vicent',
    accountNumber: 'ES66 2100 4241 4322 0012 9546',
  },

  rsvp: {
    formspreeId: 'xykrgban',
  },
}
