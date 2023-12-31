import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Center, HStack, Heading, useColorMode } from 'native-base'
import { COLOR_THEME, DARK, WHITE } from '../../assets/Data/Couleurs&Cte'

const Exam_title = ({examen, prof, duree}) => {
    const theme_ct_white = useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE;
  return (
    <Center>
        <Heading color={theme_ct_white}>{examen}</Heading>
        <Heading size={'sm'} color={theme_ct_white}>Proposé par: {prof}</Heading>
        <HStack>
            <Ionicons name="ios-time" size={24} color={theme_ct_white} />
            <Heading size={'sm'} color={theme_ct_white}>{duree}</Heading>
        </HStack>
    </Center>
  )
}

export default Exam_title