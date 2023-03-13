import {defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'projects',
  type: 'document',
  fields: [
    
    {
      name:'Title',
      title:'Title',
      description:'Title of the project',
      type:'string'

    },
    
    {
      name :'image',
      title:'Image',
      type:'image',
      options:{
        hotspot:true
      }


    },

    {
      name:'summary',
      title:'Summary',
      type:'text',
      
    
    },
    {
      name:'technologies',
      title:'Technologies',
      type:'array',
      of:[{type:'reference',to:[{type:'skills'}]}]

    },

    {
      name:'linkToBuild',
      title:'LinkToBuild',
      type:'url'

    },
    {
      name:'iscurrentlyworkingHere',
      title:'IscurrentlyworkingHere',
      type:'boolean'

    },
    {
      name:'technologies',
      title:'Technologies',
      type:'array',
      of:[{type:'reference',to:[{type:'skills'}]}]

    },
    {
      name:'points',
      title:'Points',
      type:'array',
      of:[{type:'string'}]
    },

    
    
  ]
})
