// collections/Article.ts
import { CollectionConfig } from "payload/types";

const Contact: CollectionConfig = {
  slug: "contact",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: false,
    },
    {
      name: "authorImage",
      label: "AuthorImage",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea", // Use textarea for multi-line text
      required: false,
    },
    {
      name: "image",
      label: "FormImage",
      type: "upload",
      relationTo: "media",
      required: false,
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
      name: "formHeading",
      label: "Form Heading",
      type: "text",
      required: false,
    },
    {
      name: "formSubHeading",
      label: "Form Sub Heading",
      type: "text",
      required: false,
    },

    {
      name: "name",
      label: "Name",
      type: "text",
      required: false,
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: false,
    },
    {
      name: "buttonHref",
      label: "Button Link",
      type: "text",
      required: false,
    },
    {
      name: "buttonName",
      label: "Button Text",
      type: "text",
      required: false,
    },
  ],
  admin: {
    // Specify the field to use as the title in the Admin panel
    useAsTitle: "title", // This tells Payload to use the 'title' field
  },
};

export default Contact;
