// collections/Category.ts
import { CollectionConfig } from "payload/types";

const Category: CollectionConfig = {
  slug: "categories",
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
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "image",
      label: "Image",
      type: "upload", // Similar setup for a second image
      relationTo: "media",
      required: false,
    },
    {
      name: "articles",
      label: "Articles",
      type: "relationship",
      relationTo: "articles", // This should match the slug of the Article collection
      hasMany: true, // This allows the author to be related to multiple articles
    },
  ],
  admin: {
    // Specify the field to use as the title in the Admin panel
    useAsTitle: "title", // This tells Payload to use the 'title' field
  },
};

export default Category;
