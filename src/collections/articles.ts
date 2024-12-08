// collections/Article.ts
import { CollectionConfig } from "payload/types";

const Article: CollectionConfig = {
  slug: "articles",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "textarea",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: false,
    },

    {
      name: "publishedDate",
      label: "Published Date",
      type: "date",
    },
    {
      name: "tags",
      label: "Tags",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "slug",
          label: "Slug",
          type: "text",
        },
      ],
    },

    {
      name: "category",
      label: "Category",
      type: "relationship", // This creates a relation to another collection
      relationTo: "categories", // Slug of the Category collection
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "authors", // This should match the slug of the Author collection
      required: true,
    },
  ],
  admin: {
    // Specify the field to use as the title in the Admin panel
    useAsTitle: "title", // This tells Payload to use the 'title' field
  },
};

export default Article;
