// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import testimonials from './testimonials'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'



export default createSchema({

  name: 'default',

  types: schemaTypes.concat([projects, testimonials, brands, abouts, skills, workExperience, experiences, contact
  ]),
})
