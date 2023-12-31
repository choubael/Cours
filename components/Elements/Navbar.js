import { AntDesign, Entypo } from '@expo/vector-icons';
import { Avatar, Center, Divider, HStack, Heading, MoonIcon, SunIcon, Switch, Text, VStack, View, useColorMode, useDisclose } from 'native-base';
import { COLOR_THEME, DARK, Inactive_bg, WHITE, height } from '../../assets/Data/Couleurs&Cte';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react'
import { icone_contact, icone_deconnexion, icone_profile, navbar_bg } from '../../assets/Images/images';

import Contact from '../Ecrans/Contact';
import Drawer_Item from './DrawerItem';
import Modif_Profile from '../Ecrans/Modif_Profile';
import Parametres from '../Ecrans/Parametres';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../config';
import { styles } from '../../assets/Data/Styles';
import { useNavigation } from '@react-navigation/native';
import { width } from '../../assets/Data/Donnees';

const Navbar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {state, descriptors, navigation} = props;
    
    return (
      <SafeAreaView style={{flex:1, paddingLeft:5, paddingVertical:5}}>
        <VStack  space="1" flex={1}>        
        <View
        style={{
          backgroundColor: colorMode === 'light' ? WHITE : DARK,
          borderRadius:20,
        }}>
            <Image source={navbar_bg} style={{borderRadius:20,width:"100%",height:height*0.3}}/>            
            <HStack position={'absolute'} marginTop={height*0.04} paddingX={1} width={"100%"}>
            <Avatar 
              source={{uri:auth.currentUser?.photoURL}}
              style={styles(colorMode).Avatar}
              size={'xl'}
            >
              PP
            </Avatar>
            <VStack justifyContent={"center"} alignItems={'center'} flex={1}>
              <Heading size="md" numberOfLines={1} textAlign={'center'}>{auth.currentUser?.displayName}</Heading>
              <Heading size="sm" textAlign={'center'} numberOfLines={1}>{auth.currentUser?.phoneNumber}</Heading>
            </VStack>
            </HStack>
            
           
        </View>


        <VStack bg={colorMode === 'light' ? WHITE : DARK} borderRadius={20} space={1} flex={1} justifyContent={'center'}>
        
        {state.routes.map((route, index) =>{
          const isfocused = state.index === index;
          const {options} = descriptors[route.key];
          const onPress = () =>{
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key
            })
            if (!event.defaultPrevented){
                  navigation.navigate(route.name);
            }
          }
          return(
            <Drawer_Item 
            active={isfocused} 
            onPress={onPress} 
            Label={options.drawerLabel} 
            key={index} 
            cle={index}
            tabBarTestId={options.tabBarTestId} />
          );
        })}        
      </VStack>

      <VStack space={7} bgColor={colorMode === 'light' ? WHITE : DARK} paddingY={10} borderRadius={20}>
      <TouchableOpacity 
       style={styles(colorMode).DeconnexionItemStyle}
       onPress={() => {
        auth.signOut()
       .then(() => {
          console.log("i am out");
          if (colorMode === 'dark') {
            toggleColorMode();
          }
          navigation.replace("Bienvenue");
        })
        .catch((e) => {console.log(e); alert("une erreur est survenue, Veuillez reéssayer!");});}}
      >
        <HStack  space={3}>
            <AntDesign name="logout" size={24} color="white" />
            <Text color={WHITE} fontWeight={'bold'}>Déconnexion</Text>
        </HStack>
      </TouchableOpacity>

        <Center w="100%">
          <HStack alignItems={'center'}>
            <SunIcon size="5"/>
            <Heading marginLeft={1} size={'sm'}>Clair </Heading>
            <Switch onTrackColor={COLOR_THEME} isChecked={colorMode === "dark"}
          onToggle={toggleColorMode}
          />
            <Heading marginRight={1} size={'sm'}> Sombre</Heading>
            <MoonIcon size="5"/>
          </HStack>
        </Center>
      </VStack>

      <Center bgColor={colorMode === 'light' ? WHITE : DARK} padding={'10px'} borderRadius={'20px'}>
        <Text 
            fontWeight='bold'
            textAlign={'center'}
          >
            Professor by: NOUTCHEU TCHAGNA CHOUBEAL

          </Text>
      </Center>
      </VStack>
      </SafeAreaView>
    );
}

export default Navbar