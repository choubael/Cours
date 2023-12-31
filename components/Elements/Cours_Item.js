import { Avatar, HStack, Heading, Text, VStack, useColorMode } from 'native-base';
import { COLOR_THEME, DARK, WHITE } from '../../assets/Data/Couleurs&Cte';

import React from 'react'
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import axios from 'axios';


const Cours_Item = ({item, index, navigation}) => {

  


  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Animated.View entering={FadeIn.delay(index * 100)}>
    <TouchableOpacity 
    style={{
      padding:10,
      backgroundColor:colorMode==="light"?WHITE:DARK,
      margin:7,
      marginHorizontal:15,
      borderRadius:20,
      shadowColor: colorMode==="light"?'black':WHITE,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation:3
    }}
    onPress={()=>navigation.navigate("S_2018_2019")}>
      <HStack
      space={3}
      >
        <Avatar
        backgroundColor={COLOR_THEME}
        >
          {item.num}
        </Avatar>

        <VStack>
          <Heading>
            {item.id}
          </Heading>

          <Text>
            {item.title}
          </Text>
        </VStack>

      </HStack>
    </TouchableOpacity>
    </Animated.View>
  );
}

export default Cours_Item