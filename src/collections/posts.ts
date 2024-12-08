// collections/BlogPost.ts
import { CollectionConfig } from "payload/types";

const BlogPost: CollectionConfig = {
  slug: "blog-posts",
  access: {
    read: () => true,
    update: () => true,
  },
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText", // You can use 'textarea' for rich text field
    },

    {
      name: "publishedDate",
      type: "date",
      required: true,
    },
  ],
};

export default BlogPost;
