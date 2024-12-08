// collections/Author.ts
import { CollectionConfig } from "payload/types";
import { generateSlug } from "../utils/slug"; // Import the slug generation utility if you haven't already

const Author: CollectionConfig = {
  slug: "authors",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea", // A textarea for longer descriptions
      required: false,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media", // Assuming you have a files collection for uploads
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
  // hooks: {
  //   beforeChange: [
  //     async ( {data} ) => {
  //       console.log(data)
  //       if (data.title && !data.slug) {
  //           data.slug = generateSlug(data.title);
  //       }
  //     },
  //   ],
  // },
  admin: {
    // Specify the field to use as the title in the Admin panel
    useAsTitle: "title", // This tells Payload to use the 'title' field
  },
};

export default Author;
