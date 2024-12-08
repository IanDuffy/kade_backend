import { CollectionConfig, Block } from "payload/types";
import Sections from "./sections";

const Page: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true, // Allow read access to everyone
    create: () => true, // Allow create access to everyone
    update: () => true, // Allow update access to everyone
    delete: () => true, // Allow delete access to everyone
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
      unique: true, // Ensure the slug is unique
      admin: {
        description: "Auto-generated from title if not provided.",
      },
    },
    {
      name: "sections",
      label: "Sections",
      type: "blocks",
      blocks: [Sections as Block], // Cast Sections to Block type
    },
  ],
};

export default Page;
