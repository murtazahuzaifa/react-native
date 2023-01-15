import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name of dish', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'short_description', title: 'Short Description', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'price', title: 'Price of the dish in PKR', type: 'number', validation: rule => rule.required() }),
    defineField({ name: 'image', title: 'Image of the Dish', type: 'image', options: { hotspot: true } }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: { source: 'name', maxLength: 96, },
    // })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
