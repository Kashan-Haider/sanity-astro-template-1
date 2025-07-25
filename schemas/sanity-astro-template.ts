const sanityAstroTemplate = {
  name: 'sanity-astro-template',
  title: 'Sanity Astro Template',
  type: 'document',
  fields: [
    {
      name: 'templateId',
      title: 'Template ID',
      type: 'string',
      description: 'ID of the template to use for this site',
    },
    {
      name: 'documentId',
      title: 'Document ID',
      type: 'string',
      description: 'Unique identifier for this submission (e.g., user or build ID)',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'heroTitle',
          title: 'Hero Title',
          type: 'string',
        },
      ],
    },
  ],
};

export default sanityAstroTemplate; 