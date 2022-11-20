export default{
    name: 'content',
    title: 'Site Content',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
          name: 'paragraph',
          title: 'Paragraph',
          type: 'blockContent',
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