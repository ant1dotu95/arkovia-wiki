export default {
  base: '/arkovia-wiki/',
  title: 'Arkovia Wiki',
  description: 'Wiki oficial Arkovia',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vehicule', link: '/vehicle-server' }
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Acasă', link: '/' },
          { text: 'Vehicule Server', link: '/vehicle-server' }
        ]
      }
    ]
  }
}
