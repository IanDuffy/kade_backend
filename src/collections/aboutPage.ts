import { GlobalConfig } from "payload/types";
import Cards from "./cards";
import { Block } from "payload/types";
const AboutPage: GlobalConfig = {
  slug: "about-page",
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
      name: "heroImage",
      label: "Hero Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "videoUrl",
      label: "Video URL",
      type: "text",
      required: false,
    },
    {
      name: "video",
      label: "Video Upload",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description: "Upload a video file directly",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
    {
      name: "cards",
      label: "Cards",
      type: "blocks",
      blocks: [Cards as Block], // Add the reusable ContentBlock here
    },
    {
      name: "contact",
      label: "Contact",
      type: "relationship",
      relationTo: "contact",
      hasMany: false,
      required: false,
    },
  ],
};

export default AboutPage;
