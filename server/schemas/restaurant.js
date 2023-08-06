import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
   
   defineField({
    name:'description',
    title:'Description',
    type:'string',
   }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'dishcategories',
      title: 'DishCategories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dishcategory'}}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dish',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),


   
  ],

  
})
