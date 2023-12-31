import { AntDesign, Entypo } from '@expo/vector-icons';
import { Avatar, Badge, Center, HStack, Heading, Spinner, VStack, useColorMode } from 'native-base';
import { COLOR_THEME, DARK, ITEM_SIZE, WHITE } from '../../assets/Data/Couleurs&Cte';
import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../../config';
import { icone_notif_clair, icone_notif_sombre } from '../../assets/Images/images';
import { onValue, ref } from 'firebase/database';

import AppContext from './AppContext';
import { Image } from 'react-native';
import { Notif_List } from '../../assets/Data/Donnees';
import { TouchableOpacity } from 'react-native';
import { styles } from '../../assets/Data/Styles';

const Header_Accueil = ({navigation}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {userName,userImg,nber_unread_msg} = useContext(AppContext);
  

  return (
    <HStack style={styles(colorMode).Header_Accueil}>
        <Center>
          <HStack  space="1" alignItems="center" flex={1}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Avatar
                source={userImg}
                style={styles(colorMode).Avatar}
              >
                PP
              </Avatar>
            </TouchableOpacity>
            <Heading width={120} numberOfLines={2} size="sm">{userName}</Heading>
          </HStack>
        </Center>
        <Center size={'sm'}>
            <TouchableOpacity alignItems="center" onPress={()=>{navigation.navigate("Notification")}} >
              <VStack >
                <Badge 
              colorScheme="danger" width={8} height={7} rounded="full" mb={-3} mr={-2} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                fontSize: 12
              }}>
                  {nber_unread_msg}
                </Badge>
                <Entypo name="bell" size={30} color={colorMode === "light" ? 'black' : WHITE} />              
              </VStack>
            </TouchableOpacity>            
        </Center>
      </HStack>
  );
}

export default Header_Accueil