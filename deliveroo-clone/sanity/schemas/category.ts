import { SchemaTypeDefinition } from 'sanity'

const entity: SchemaTypeDefinition = {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
      //@ts-ignore
      codegen: { required: true },
    },
    {
      name: "image", type: "image", title: "Image of Category",
    },
  ],
}
export default entity;
