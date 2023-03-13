import {defineType} from 'sanity'

export default defineType({
  name: 'PageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    
    {
      name:'name',
      title:'Name',
      type:'string'

    },
    
    {
      name :'role',
      title:'Role',
      type:'string'

    },
    {
      name:'heroImage',
      title:'Hero Image',
      type:'image',
      options:{
        hotspot:true
      }

    },

    {
      name:'profilePic',
      title:'Profile Pic',
      type:'image',
      options:{
        hotspot:true

      }
    
    },
    {
      name:'placeholder',
      title:'placeholder',
      type:'string'

    },

    {
      name:'email',
      title:'Email',
      type:'string'

    },
    {
      name:'address',
      title:'Address',
      type:'string'

    },
    {
      name:'socials',
      title:'Socials',
      type:'array',
      of:[{type:'reference',to:[{type:'socials'}]}]

    },

    
    
  ]
})
