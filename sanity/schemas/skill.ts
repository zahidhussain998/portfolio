import {defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'skills',
  type: 'document',
  fields: [
    
    {
      name:'title',
      title:'Title',
      description:'Title of the skill',
      type:'string'

    },
    
    {
      name :'progress',
      title:'Progress',
      type:'number',
      description:'Progress of the skill',
      validation:(Rule)=>Rule.min(0).max(100)



    },

    {
      name:'Image',
      title:'Image',
      type:'image',
      options:{
        hotspot:true
      }
      
    
    },
   
    
    
  ]
})
