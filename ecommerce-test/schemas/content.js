export default{
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
        {
            name: 'copy',
            title: 'Copy',
            type: 'string'
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