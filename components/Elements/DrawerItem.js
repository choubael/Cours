import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { COLOR_THEME, DARK, WHITE } from '../../assets/Data/Couleurs&Cte';
import { HStack, Text, useColorMode } from 'native-base';

import React from 'react'
import { TouchableOpacity } from 'react-native'

const Drawer_Item = ({cle, Label, onPress, tabBarTestId, active}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const couleur = active ? WHITE : (colorMode === 'dark' ? WHITE : 'black');

    return (
      <TouchableOpacity 
      key={cle}
      onPress={onPress}
      testID={tabBarTestId}
      style={{
        padding:10,
        backgroundColor: active ? COLOR_THEME : (colorMode === 'light' ? WHITE : DARK),
        margin:5,
        marginHorizontal:20,
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        shadowColor: colorMode === "light" ? 'black' : WHITE,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:3
      }}
      >
        <HStack  space={3}>
            {Label === 'Accueil' &&
            <AntDesign name="home" size={24} color={couleur} />}
            {Label === 'Profile' &&
            <FontAwesome5 name="user-circle" size={24} color={couleur} />}
            {Label === 'Contact' &&
            <AntDesign name="contacts" size={24} color={couleur} />}
            <Text color={couleur} fontWeight={'bold'}>{Label}</Text>
        </HStack>
        <Entypo name="chevron-right" size={24} color={couleur} />
      </TouchableOpacity>
    );
}

export default Drawer_Item