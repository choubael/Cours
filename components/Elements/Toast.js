import { View } from 'react-native'
import React from 'react'
import { Box, Text } from 'native-base'
import { COLOR_THEME, WHITE, height, width } from '../../assets/Data/Couleurs&Cte'

const Toast = ({message}) => {
  return (
    <Box alignItems={'center'} bg="black" py="2" px="2" rounded="sm" mt={height*0.05}>
        <Text textAlign={'center'} color={WHITE}>{message}</Text>
    </Box>
  )
}

export default Toast