import { Block, CollectionConfig } from "payload/types";
import Buttons from "./buttons"; // Adjust path if necessary

const Navigation: CollectionConfig = {
  slug: "navigation",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media", // Assuming you have a media collection for uploads
      required: true,
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "subheadings",
      label: "Subheadings",
      type: "array",
      fields: [
        {
          name: "subheading",
          label: "Subheading",
          type: "text",
          required: true,
        },
        {
          name: "links",
          label: "Links",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "button",
      label: "Buttons",
      type: "blocks",
      blocks: [Buttons as Block], // Add the reusable ContentBlock here
    },
  ],
};

export default Navigation;
