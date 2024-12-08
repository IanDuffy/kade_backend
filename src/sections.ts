// blocks/Section.ts
const Section = {
    slug: 'section', // Unique identifier for this block
    labels: {
      singular: 'Section',
      plural: 'Sections',
    },
    fields: [
      {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
      },
      {
        name: 'subtitle',
        label: 'Subtitle',
        type: 'text',
        required: false,
      },
      {
        name: 'image',
        label: 'Image',
        type: 'upload', // This will link to the media collection
        relationTo: 'files', // Assuming you have a 'files' collection for uploaded media
        required: false,
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea', // Use textarea for a longer description
        required: false,
      },
      {
        name: 'richText',
        label: 'Rich Text',
        type: 'richText', // Use rich text editor for formatted text
        required: false,
      },
      
    ],
  };
  
  export default Section;
  