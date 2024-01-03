import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, useColorMode } from 'native-base'
import { COLOR_THEME, DARK, WHITE, ligne, space} from '../../assets/Data/Couleurs&Cte'
import Exo from '../Elements/Exo'
import Exam_title from '../Elements/Exam_title'
import Question from '../Elements/Question'

const La_session = () => {

    const theme_white_dark = useColorMode().colorMode === 'light' ? WHITE : DARK;

  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme_white_dark,paddingHorizontal:10}}>
        <ScrollView flex={1}>
            {/* contenu ici */}
        </ScrollView>
    </SafeAreaView>    
  )
}

export default La_session