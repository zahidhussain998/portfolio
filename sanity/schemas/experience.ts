import {defineType} from 'sanity'

export default defineType({
  name: 'Experience',
  title: 'Experience',
  type: 'document',
  fields: [
    
    {
      name:'jobTitle',
      title:'jobTitle',
      type:'string'

    },
    
    {
      name :'companyImage',
      title:'companyImage',
      type:'image',
      options:{
        hotspot:true
      }


    },

    {
      name:'company',
      title:'Pcompany',
      type:'text',
      
    
    },
    {
      name:'dateStarted',
      title:'Datestarted',
      type:'date'

    },

    {
      name:'dateEnded',
      title:'DateEnded',
      type:'date'

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
