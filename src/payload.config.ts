import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Navigation from "./collections/navigation";
import Media from "./collections/media";
import Pages from "./collections/pages";
import Articles from "./collections/articles";
import Categories from "./collections/categories";
import Authors from "./collections/authors";
import AboutPage from "./collections/aboutPage";
import HomePage from "./collections/home";
import InsightsPage from "./collections/insights";
import Contact from "./collections/contact";

export default buildConfig({
  globals: [HomePage, InsightsPage, AboutPage],
  collections: [
    Users,
    Navigation,
    Media,
    Pages,
    Articles,
    Categories,
    Authors,
    Contact,
  ],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    disablePlaygroundInProduction: false,
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
