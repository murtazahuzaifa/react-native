import { SchemaTypeDefinition } from 'sanity'

const entity: SchemaTypeDefinition = {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name', title: 'Name of dish', type: 'string', validation: rule => rule.required(),
      //@ts-ignore
      codegen: { required: true },
    },
    {
      name: 'short_description', title: 'Short Description', type: 'string', validation: rule => rule.required(),
      //@ts-ignore
      codegen: { required: true },
    },
    {
      name: 'price', title: 'Price of the dish in PKR', type: 'number', validation: rule => rule.required(),
      //@ts-ignore
      codegen: { required: true },
    },
    { name: 'image', title: 'Image of the Dish', type: 'image', options: { hotspot: true } },
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
}

export default entity;