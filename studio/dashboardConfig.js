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
                  buildHookId: '5e60f52c3e2f90160bf684e2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-to8xutsx',
                  apiId: '101fb39f-fa65-4240-a3e2-767687dccef7'
                },
                {
                  buildHookId: '5e60f52d56eec00177155d02',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hjmd4s6n',
                  apiId: 'e347d120-7e15-4d1a-9c12-358046ea6147'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hasparus/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hjmd4s6n.netlify.com', category: 'apps'}
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
