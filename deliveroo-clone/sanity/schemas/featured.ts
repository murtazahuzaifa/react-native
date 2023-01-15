import { defineField, defineType, SchemaTypeDefinition } from 'sanity';


const entity: SchemaTypeDefinition = {
    name: "featured",
    type: "document",
    title: "Featured Menu categories",
    fields: [
        { name: "name", type: "string", title: "Featured Category name", validation: rule => rule.required() },
        { name: "short_description", type: "string", title: "Short Description", validation: rule => rule.required() },
        {
            name: "restaurants", type: "array", title: "Restaurants",
            validation: rule => rule.required(),
            of: [{ type: "reference", to: [{ type: "restaurant" }] }]
        },
    ]
}

export default entity;