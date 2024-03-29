import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react';


interface Props {
    imgUrl?: string
    title: string
}

const defaultImg = "https://links.papareact.com/gn7";

const CategoryCard: FC<Props> = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2' >
            <Image source={{ uri: imgUrl || defaultImg }} className='h-20 w-20 rounded' />
            <Text className='absolute bottom-1 left-1 text-white font-bold' >{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard