export default{
    name: 'yourImage',
    title: 'Image',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Image Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
              },
        },
        {
          name: 'alt',
          title: 'Alt Text for Acessability',
          type: 'string',
      },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: {type: 'category'},
              },
            ],
          },
    ],
}