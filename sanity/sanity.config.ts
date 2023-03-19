import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './schemaTypes'
export default defineConfig({
  name: 'default',
  title: 'sanity-yt-',

  projectId: 'ql08pep5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
