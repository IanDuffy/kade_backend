const Buttons = {
  slug: 'button', // Unique identifier for this block
  fields: [
    {
      name: 'title',
      label: 'Button Title',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'Button URL',
      type: 'text',
    },
  ],
};

export default Buttons;