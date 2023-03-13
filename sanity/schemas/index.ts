import Pageinfo from './Pageinfo';
import { createSchema } from 'sanity';
import projects from './projects';
import skill from './skill';
import experience from './experience';
import social from './social';

const schema = createSchema({
  name: 'default',
  types: [
    // Add your schema types here
    Pageinfo,
    projects,
    skill,
    experience,
    social,
    // Add more schema types here
  ],
});

export default schema;
