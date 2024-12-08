import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    update: () => true,
  },
  upload: {
    staticURL: "/media", // Location where files are stored
    staticDir: "media", // Directory for storing files
    adminThumbnail: "thumbnail", // Field to use as a thumbnail
    mimeTypes: ["image/webp", "image/jpeg", "image/png"], // Include WebP
  },
  fields: [
    {
      name: "altText",
      label: "Alt Text",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      label: "Caption",
      type: "text",
      required: false,
    },
  ],
};

export default Media;
