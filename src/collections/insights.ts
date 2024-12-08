import { CollectionConfig, Block, GlobalConfig } from "payload/types";
import Sections from "./sections";

const InsightsPage: GlobalConfig = {
  slug: "insights-page",
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
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "latestArticles",
      label: "Choose Articles for Latest Section",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      required: false,
    },
  ],
};

export default InsightsPage;
