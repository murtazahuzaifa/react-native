import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

interface Props {
    id: string | number
    title?: string
    imgUrl?: string
    rating?: number
    genre?: string
    address?: string
    shortDescription?: string
    dishes?: string[]
    long?: number
    lat?: number
    description?: string
}

const RestaurantCard: FC<Props> = ({
    imgUrl, title, address, description, dishes, genre, lat, shortDescription, rating, long, id
}) => {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow'>
            <Image source={{ uri: imgUrl }} className='h-36 w-64 rounded-sm' />
            <View className='px-3 pb-4 ' >
                <Text className='font-bold test-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={0.5} size={22} />
                    <Text>
                        <Text className='text-green-500'>{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color='gray' opacity={0.4} size={22} />
                    <Text>
                        <Text className='text-gray-500'>Nearby</Text> . {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard;