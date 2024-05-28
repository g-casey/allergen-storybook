import React from 'react';
import { View, Card, Image, Text, TextField, Button } from "react-native-ui-lib"
import ReactStars from "react-rating-stars-component"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SearchResultCard from './SearchResultsCard';


export default function SearchPage({ searchData }) {
    return <View>
        <View mt-15 flex row spread centerV>
            <Button transparent round bg-transparent>
                <FontAwesome name='sliders' size={25} color="grey" />
            </Button>
            <View bg-white paddingL-40 paddingR-35 paddingV-8 br50 marginR-5>
                <TextField
                    placeholder={'Restaurants close to me'}
                    maxLength={40}
                />
            </View>
            <Button round bg-orange40>
                <FontAwesome name='plus' color="white" size={15} />
            </Button>
        </View>
        <View marginT-25>

            {searchData.map((search) =>
                <View marginB-10>
                    <SearchResultCard {...search} />
                </View>
                )
            }
        </View>
    </View>
}