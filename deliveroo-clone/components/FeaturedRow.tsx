import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

interface Props {
    id: string
    title: string
    description: string
}

const FeaturedRow: FC<Props> = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4" >
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00ccbb' />
            </View>

            <Text className="text-xs text-gray-500 px-4" >{description}</Text>

            <ScrollView horizontal className='pt-4' contentContainerStyle={{ paddingHorizontal: 15, }} showsHorizontalScrollIndicator={false} >
                {/* RestaurantCards... */}
                <RestaurantCard id={123} title='Yo! Suchi' rating={4.5} genre="Japanese"
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
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;