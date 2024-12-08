import { CollectionConfig, Block, GlobalConfig } from "payload/types";
import Sections from "./sections";

const HomePage: GlobalConfig = {
  slug: "home-page",
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
      name: "heroImage",
      label: "Hero Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "featuredArticles",
      label: "Featured Articles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      maxRows: 3,
      required: false,
    },
    {
      name: "insightsTitle",
      label: "Insights Section Title",
      type: "text",
      required: false,
    },
    {
      name: "insightsArticles",
      label: "Insights Articles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      maxRows: 3,
      required: false,
    },
    {
      name: "highlightedTitle",
      label: "Highlighted Title",
      type: "text",
      required: false,
    },
    {
      name: "highlightedArticles",
      label: "Highlighted Articles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      maxRows: 1,
      required: false,
    },
    {
      name: "moreArticles",
      label: "More Articles",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      maxRows: 4,
      required: false,
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

export default HomePage;
