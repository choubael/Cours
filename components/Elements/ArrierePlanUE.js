import { BACKDROP_HEIGHT, DARK, ITEM_SIZE, height, width } from '../../assets/Data/Couleurs&Cte';
import { FlatList, View, useColorMode } from 'native-base';

import { Animated } from 'react-native';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { UE } from '../../assets/Data/Donnees';

const ArrierePlanUE = ({scrollX}) => {
  const { colorMode, toggleColorMode } = useColorMode();

    return (
        <View flex={1} position={'absolute'} >
          <FlatList
            data={UE}
            keyExtractor={(item) => item.title}
            removeClippedSubviews={false}
            contentContainerStyle={{ height:height,width:width}}
            renderItem={({ item, index }) => {
              if (!item.img) {
                return null;
              }

              const translateX = scrollX.interpolate({
                inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
                outputRange: [0, width],
                extrapolate:'clamp'
              });

              return (
                <Animated.View
                  removeClippedSubviews={false}
                  style={{
                    position: 'absolute',
                    width: translateX,
                    overflow: 'hidden',
                    height
                  }}
                >
                  <Image
                    source={item.backdrop}
                    style={{
                      position: 'absolute',
                      width,
                      height
                    }}
                  />
                  <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', colorMode === 'light' ? 'white' : DARK]}
                    style={{
                      height:height*0.7,
                      marginTop:height*0.3
                    }}
                  /> 
                </Animated.View>
              );
            }}
          />   
        </View>
      );
}

export default ArrierePlanUE