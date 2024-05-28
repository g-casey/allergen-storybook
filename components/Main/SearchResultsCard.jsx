import React from 'react';
import { View, Card, Image, Text } from "react-native-ui-lib"
import ReactStars from "react-rating-stars-component"
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function SearchResultCard({
  restaurantName,
  allergyRating,
  isOpen,
  hours,
  distance,
  containedAllergens,
  ediblePercentage,
  restaurantPic
}) {
  return (
    <View bg-white padding-15 br40 bg-$backgroundElevated flex row>
      <View>
        <Text text70BO>{restaurantName}</Text>
        <View marginT-3 flex row gap-3 centerV>
          <FontAwesome size={15} name='star' color={"orange"} />
          <Text orange40 text90R>{allergyRating}</Text>
          <Text text100R >Allergy rating</Text>
        </View>
        <View marginT-6 flex row gap-3>
          {isOpen ? <Text green40 text100R>Open</Text> : <Text red40 text100R>Closed</Text>}
          <Text text100R>({hours})</Text>
          <Text text100R marginL-10>{distance} miles</Text>
        </View>
        <View flex row gap-5 centerV marginT-3 >
          {containedAllergens.map((allergen) =>
            <View bg-grey50 paddingV-3 paddingH-6 br30>
              <Text text100R>{allergen}</Text>
            </View>
          )}
        </View>
        <View marginT-10>
          <Text>You can eat <Text text70BO>{ediblePercentage}%</Text> of food here</Text>
        </View>
      </View>
      <View flex right>
        <Image style={{borderRadius: 15}} source={{ uri: restaurantPic }} height={100} width={150}/>
      </View>
    </View>
  );
};