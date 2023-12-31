import { View, Text } from 'react-native'
import React from 'react'
import { Heading, useColorMode } from 'native-base'
import { COLOR_THEME, WHITE } from '../../assets/Data/Couleurs&Cte';

const Exo = ({num, pts}) => {
    const theme_ct_white = useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE;

  return (
    <Heading color={theme_ct_white} marginTop={10} marginBottom={5} size={'md'}>Exercice {num}: ({pts}pts)</Heading>

  )
}

export default Exo