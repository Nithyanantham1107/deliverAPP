import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dishcategory',
  title: 'DishCategory',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name:'image',
      title:'Image',
      type:'image',
      options:{
        hotspot:true
      },
    }),

  ],
})
