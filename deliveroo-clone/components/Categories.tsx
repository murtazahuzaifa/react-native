import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import sanityClient, { urlFor } from '../sanity';
import { Category } from '../types/sanity';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [Categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        (async () => {
            const data = await sanityClient.fetch<Category[]>(`
            *[_type == "category"] {
                    title,
                    image   
            }
            `);
            // console.log(data)
            setCategories(data);

        })()
    }, [])

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        >
            {/* CategoryCard */}
            <CategoryCard imgUrl='https://www.lacademie.com/wp-content/uploads/2022/04/cameroonian-cuisine.jpg' title='Others' />
            <FlatList data={Categories} horizontal
                renderItem={({ item }) => (
                    <CategoryCard imgUrl={urlFor(item.image)?.url()} title={item.title} />
                )}
            />

        </ScrollView>
    );
};

export default Categories;