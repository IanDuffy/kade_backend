// blocks/Section.ts
import Cards from "./cards"; // Adjust path if necessary
import Buttons from "./buttons"; // Adjust path if necessary

const Section = {
  slug: "section", // Unique identifier for this block
  labels: {
    singular: "Section",
    plural: "Sections",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
      required: false,
    },
    {
      name: "image",
      label: "Image",
      type: "upload", // This will link to the media collection
      relationTo: "media", // Assuming you have a 'files' collection for uploaded media
      required: false,
    },
    {
      name: "video",
      label: "Video",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description: "Upload a video file",
        condition: (
          data: Record<string, any>,
          siblingData: Record<string, any>
        ) => !siblingData?.image, // Optional: prevents having both image and video
      },
    },
    {
      name: "videoUrl",
      label: "Video URL",
      type: "text",
      required: false,
      admin: {
        description: "Provide a URL for the video",
        condition: (
          data: Record<string, any>,
          siblingData: Record<string, any>
        ) => !siblingData?.video, // Optional: prevents having both video file and URL
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea", // Use textarea for a longer description
      required: false,
    },
    {
      name: "desciption",
      label: "Description",
      type: "richText", // Use rich text editor for formatted text
      required: false,
    },
    {
      name: "card",
      label: "Cards",
      type: "blocks",
      blocks: [Cards], // Add the reusable ContentBlock here
    },
    {
      name: "button",
      label: "Buttons",
      type: "blocks",
      blocks: [Buttons], // Add the reusable ContentBlock here
    },
    {
      name: "articles",
      label: "Articles",
      type: "relationship",
      relationTo: "articles", // This should match the slug of the Article collection
      hasMany: true, // This allows the author to be related to multiple articles
    },
  ],
};

export default Section;
