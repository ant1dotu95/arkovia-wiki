export default {
  title: "Arkovia Wiki",
  description: "Wiki oficial Arkovia",
  base: '/arkovia-wiki/',

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Acasă', link: '/' },
      { text: 'Vehicule Server', link: '/vehicule-server' },
      { text: 'Discord', link: 'https://discord.gg/arkovia' }
    ],
    sidebar: [
      {
        text: 'Info',
        items: [
          {
            text: 'Regulamente',
            collapsed: false,
            items: [
              { text: 'General', link: '/info/regulamente/general' },
              { text: 'Mafii', link: '/info/regulamente/mafii' },
              { text: 'Jafuri', link: '/info/regulamente/jafuri' },
              { text: 'Zone', link: '/info/regulamente/zone' },
              { text: 'Anti-cheat / Moduri interzise', link: '/info/regulamente/anticheat-moduri-interzise' }
            ]
          }
        ]
      },
      {
        text: 'General',
        items: [
          { text: 'Evenimente', link: '/general/evenimente' },
          {
            text: 'Activități',
            collapsed: true,
            items: [
              { text: 'Obor', link: '/general/activitati/obor' },
              { text: 'Sală', link: '/general/activitati/sala' },
              { text: 'Cărți', link: '/general/activitati/carti' },
              { text: 'Licențe', link: '/general/activitati/licente' },
              { text: 'Plată amenzi / dosare', link: '/general/activitati/plata-amenzi-dosare' }
            ]
          },
          {
            text: 'Caracter',
            collapsed: true,
            items: [
              { text: 'Cont', link: '/general/caracter/cont' },
              { text: 'Documente', link: '/general/caracter/documente' }
            ]
          },
          {
            text: 'Setări, comenzi și keybind',
            collapsed: true,
            items: [
              { text: 'Setări', link: '/general/setari-comenzi-keybind/setari' },
              { text: 'Comenzi utile', link: '/general/setari-comenzi-keybind/comenzi-utile' },
              { text: 'Keybind', link: '/general/setari-comenzi-keybind/keybind' }
            ]
          },
          {
            text: 'Sisteme',
            collapsed: true,
            items: [
              { text: 'Referal', link: '/general/sisteme/referal' },
              { text: 'Telefon', link: '/general/sisteme/telefon' },
              { text: 'Inventar', link: '/general/sisteme/inventar' },
              { text: 'Garaje', link: '/general/sisteme/garaje' },
              { text: 'Showroom', link: '/general/sisteme/showroom' },
              { text: 'Animații', link: '/general/sisteme/animatii' },
              { text: 'Radial Menu', link: '/general/sisteme/radial-menu' }
            ]
          }
        ]
      },
      {
        text: 'Poliție',
        items: [
          { text: 'Regulament', link: '/politie/regulament' },
          { text: 'Cod penal', link: '/politie/cod-penal' },
          {
            text: 'Academie',
            collapsed: true,
            items: [
              { text: 'General', link: '/politie/academie/general' },
              { text: 'MDT', link: '/politie/academie/mdt' },
              { text: 'Radio', link: '/politie/academie/radio' }
            ]
          }
        ]
      },
      {
        text: 'Joburi',
        items: [
          { text: 'Șofer camion', link: '/joburi/sofer-camion' },
          { text: 'Viticultor', link: '/joburi/viticultor' },
          { text: 'Gunoier', link: '/joburi/gunoier' },
          { text: 'Pădurar', link: '/joburi/padurar' },
          { text: 'Vânător', link: '/joburi/vanator' }
        ]
      },
      {
        text: 'Vehicule',
        items: [
          { text: 'Vehicule Server', link: '/vehicule-server' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/ant1dotu95/arkovia-wiki/edit/main/docs/:path',
      text: 'Editează această pagină pe GitHub'
    },
    lastUpdated: {
      text: 'Actualizat la',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Wiki oficial pentru serverul Arkovia.',
      copyright: 'Copyright © 2024-prezent Arkovia'
    }
  },
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark'
}
