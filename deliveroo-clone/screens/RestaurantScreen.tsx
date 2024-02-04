import { View, Text, Image, Dimensions, Platform, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState, useEffect, FC } from 'react';
import { useNavigation, NavigationProp, useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, ArrowLeftIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
import { Featured, Restaurant } from '../types/sanity';
import { Props as RestaurantCardProps } from '../components/RestaurantCard'

const RestaurantScreen: FC = () => {
    const navigation = useNavigation();
    const { params } = useRoute<RouteProp<Record<string, RestaurantCardProps>, string>>();
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

    // console.log("params", Object.keys(params));
    // console.log("params", params);

    return (
        <ScrollView className=''>
            <View className='relative' >
                <Image source={{ uri: params.imgUrl }} className='w-full h-56 bg-gray-300 p-4' />
                <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full' >
                    <ArrowLeftIcon size={20} color="#00cc88" />
                </TouchableOpacity>
            </View>

            <View className='bg-white'>
                <View className='px-4 pt-4' >
                    <Text className='text-3xl font-bold' >{params.name}</Text>
                    <View className='flex-row space-x-2 my-1' >
                        <View>
                            
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen;