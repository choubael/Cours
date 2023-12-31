import { COLOR_THEME, WHITE, width } from '../../assets/Data/Couleurs&Cte';
import { Center, HStack, Spinner, Text, VStack, useColorMode } from 'native-base';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';

import React from 'react'
import Animated, { FadeInLeft, FadeInRight, FadeOutLeft, FadeOutRight } from 'react-native-reanimated';
import { update } from 'firebase/database';

const Header = ({titre, has_back_icon, has_menu_icon, loading, Cancel, Update, navigation, couleur_txt, typing=false}) => {

    return(
      <HStack width={width*0.9} paddingY={3} alignSelf={'center'}>
        {/* middle */}
        <Center w={'full'}>
          <Text fontSize={24} fontWeight={'bold'} color={couleur_txt === undefined ? (useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE) : couleur_txt}>
            {titre}
          </Text>
        </Center>

        {/* left */}
        {has_menu_icon && !typing &&
          <TouchableOpacity style={{position:'absolute',marginTop:5}} onPress={()=> navigation.toggleDrawer()}>
            <Ionicons name="menu" size={45} color={useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE} />  
          </TouchableOpacity>
        }

        {has_back_icon &&
          <TouchableOpacity style={{position:'absolute',marginTop:5}} onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={45} color={!couleur_txt ? useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE : couleur_txt} />
          </TouchableOpacity>
        }

        {typing && !loading &&
        <Animated.View entering={FadeInLeft} exiting={FadeOutLeft} style={{position:'absolute',marginTop:5}}>
          <TouchableOpacity  onPress={Cancel}>
            <MaterialIcons name="cancel" size={45} color="red" />
          </TouchableOpacity>
        </Animated.View>
        }

        {/* right */}
        {typing &&
        <Animated.View entering={FadeInRight} exiting={FadeOutRight} style={{position:'absolute', marginTop:5, right:0}}>
          {!loading &&
          <TouchableOpacity onPress={Update}>
            <FontAwesome name="check-circle" size={45} color="#22c55e" />
          </TouchableOpacity>
          }

          {loading &&
          <Spinner size={'lg'} color="#22c55e" marginTop={2} />
          }
        </Animated.View>
        }
      </HStack>);
  }

export default Header