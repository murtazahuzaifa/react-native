import { View, Text, ScrollView } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient, { urlFor } from '../sanity';
import { Featured } from '../types/sanity';

interface Props {
    id: string
    title: string
    description: string
}

const FeaturedRow: FC<Props> = ({ id, title, description }) => {
    const [featured, setFeatured] = useState<Featured>();

    useEffect(() => {
        (async () => {
            const data = await sanityClient.fetch<Featured>(`
            *[_type == "featured" && _id == $id] {
                ...,
                restaurants[]->{
                ...,
                dishes[]->{name, _id}
                }
            }[0]
        `, { id });
            // console.log(data)
            setFeatured(data)
        })()
    }, [id])

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4" >
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00ccbb' />
            </View>

            <Text className="text-xs text-gray-500 px-4" >{description}</Text>

            <ScrollView horizontal className='pt-4' contentContainerStyle={{ paddingHorizontal: 15, }} showsHorizontalScrollIndicator={false} >
                {/* RestaurantCards... */}
                {featured?.restaurants.map((v, idx) => {
                    const asset = v.image ? urlFor(v.image.asset) : undefined;
                    // console.log(asset?.url())
                    return <RestaurantCard key={idx} id={v._id} name={v.name} rating={v.rating} genre={v.type.title}
                        address={v.address} shortDescription={v.short_description}
                        dishes={v.dishes} long={v.long} lat={v.lat}
                        imgUrl={urlFor(v?.image?.asset)?.url()}
                    />
                })}
                {/* <RestaurantCard id={123} title='Yo! Suchi' rating={4.5} genre="Japanese"
                    address="123 Main St" shortDescription="This is a Test desc"
                    dishes={[]} long={20} lat={0}
                    imgUrl="http://links.papareact.com/gn7"
                />
                <RestaurantCard id={123} title='Yo! Suchi' rating={4.5} genre="Japanese"
                    address="123 Main St" shortDescription="This is a Test desc"
                    dishes={[]} long={20} lat={0}
                    imgUrl="http://links.papareact.com/gn7"
                />
                <RestaurantCard id={123} title='Yo! Suchi' rating={4.5} genre="Japanese"
                    address="123 Main St" shortDescription="This is a Test desc"
                    dishes={[]} long={20} lat={0}
                    imgUrl="http://links.papareact.com/gn7"
                /> */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;