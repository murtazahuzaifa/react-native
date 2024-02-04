import { View, Text, Image, Dimensions, Platform, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
import { Featured } from '../types/sanity';


const HomeScreen = () => {
    const navigation = useNavigation();
    // const dimension = Dimensions.get("screen");
    // console.log("Dimensions", Platform.OS, dimension)
    const [featuredCategories, setFeaturedCategories] = useState<Featured[]>([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    useEffect(() => {
        (async () => {
            const data = await sanityClient.fetch<Featured[]>(`
                *[_type == "featured"] {
                    ...,
                    restaurants[]->{
                    ...,
                    dishes[]->{name, _id}
                    }
                }
            `);
            // console.log(data)
            setFeaturedCategories(data);

        })()
    }, [])

    return (
        <SafeAreaView className='bg-white pt-5 '>
            <View className='flex-row pb-3 items-center space-x-2 px-4' >
                <Image
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    // source={{ uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450" }}
                    source={{ uri: "https://links.papareact.com/wru" }}
                />
                <View className='flex-1 ' >
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 px-4' >
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color="gray" />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-100' >

                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                {/* <FeaturedRow id='featured' title='Featured' description='Paid placements from our partners' />
                <FeaturedRow id='discounts' title='Discounts' description="Everyone's been enjoying times juicy discounts" />
                <FeaturedRow id='offers' title='Offers near you!' description="Why not support your local restaurant tonight!" /> */}
                {featuredCategories.map((c, idx) => {
                    return <FeaturedRow key={idx}
                        id={c._id} title={c.name} description={c.short_description}
                    />
                })}

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;