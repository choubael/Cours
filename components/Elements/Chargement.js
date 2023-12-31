import { COLOR_THEME, WHITE } from '../../assets/Data/Couleurs&Cte';
import { Center, HStack, Heading, NativeBaseProvider, Spinner } from 'native-base';
import { Text, View } from 'react-native'

import React from 'react'

const Chargement = () => {
    return (
        <NativeBaseProvider>
          <Center  bg={COLOR_THEME} flex={1}>
            <HStack space={2} alignItems="center">
              <Spinner size="lg" color={WHITE}/>
              <Heading color={WHITE} fontSize="md">
                Chargement...
              </Heading>
            </HStack>
          </Center>
        </NativeBaseProvider>);
}

export default Chargement