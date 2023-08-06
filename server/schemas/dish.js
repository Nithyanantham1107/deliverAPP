import { defineField, defineType } from "sanity";



export default defineType({
    name:'dish',
    title:'Dish',
    type:'document',
    fields:[
        defineField({

            name:'name',
            title:'Name',
            type:'string',
        }),
        defineField({
            name:'feedback',

            title:'Feedback',
            type:'string',
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options: {
                hotspot: true,
              },

        }),defineField({
            name:'category',
            title:'Category',
            type:'reference',
            to:[{type:'dishcategory'}]
        })

    ],
})