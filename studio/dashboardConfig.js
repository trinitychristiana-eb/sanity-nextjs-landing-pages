export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618423ba19efcf33c76c8530',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y87mtt8p',
                  apiId: '8e826bf2-47bb-49f6-84f4-95832e4812c8'
                },
                {
                  buildHookId: '618423ba7a4c703fdaf9e74e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8j8mvz6n',
                  apiId: '14e64cab-bb67-4fa6-825f-2fb682e96dd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trinitychristiana-eb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8j8mvz6n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
