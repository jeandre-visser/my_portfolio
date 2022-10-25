// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import abouts from './abouts'
import skills from './skills'
import contact from './contact'



export default createSchema({

  name: 'default',

  types: schemaTypes.concat([projects, abouts, skills, contact
  ]),
})
