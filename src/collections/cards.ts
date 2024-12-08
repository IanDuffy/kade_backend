// blocks/Card.ts
import Buttons from "./buttons";
const Card = {
  slug: "card", // Unique identifier for this block
  labels: {
    singular: "Card",
    plural: "Cards",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload", // This will link to the media collection
      relationTo: "media", // Assuming you have a 'files' collection for uploaded media
      required: false,
      admin: {
        description: "Upload an image or file for the card.",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea", // Use textarea for multi-line text
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
    },
    {
      name: "button",
      label: "Buttons",
      type: "blocks",
      blocks: [Buttons], // Add the reusable ContentBlock here
    },
  ],
};

export default Card;
