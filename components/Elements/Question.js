import { View } from 'react-native'
import React, { useState } from 'react'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import { styles } from '../../assets/Data/Styles'
import { HStack, ScrollView, Text, useColorMode } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLOR_THEME, DARK, WHITE } from '../../assets/Data/Couleurs&Cte';


const Question = ({num, question, reponse}) => {
    const theme_white_dark = useColorMode().colorMode === 'light' ? WHITE : DARK;
    const theme_ct_white = useColorMode().colorMode === 'light' ? COLOR_THEME : WHITE;
    const theme_black_white = useColorMode().colorMode === 'light' ? 'black' : WHITE;


    const [collapsed, setcollapsed] = useState(false);
  return (
    <Collapse style={styles(useColorMode().colorMode).Question} onToggle={(isExpanded)=> setcollapsed(isExpanded)}>
        <CollapseHeader>
            <HStack justifyContent={'space-between'}>
                <Text fontWeight={'bold'} color={theme_ct_white}>Question {num}</Text>
                {!collapsed ? 
                <FontAwesome5 name="chevron-circle-down" size={24} color={theme_ct_white} />
                :
                <FontAwesome5 name="chevron-circle-up" size={24} color={theme_ct_white} />
            }
            </HStack>
            <Text color={theme_black_white}>{question}</Text>
        </CollapseHeader>
        <CollapseBody style={styles(useColorMode().colorMode).reponse}>
            <ScrollView horizontal>
                <Text color={WHITE}>{reponse}</Text>
            </ScrollView>
        </CollapseBody>
    </Collapse>
  )
}

export default Question