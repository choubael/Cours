import * as Animatable from 'react-native-animatable';

import {
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR_THEME, DARK, DecelerationRate, ITEM_SIZE, OBJTXT, SPACER_ITEM, SPACING, WHITE, height, width } from '../../assets/Data/Couleurs&Cte';
import {
  Center,
  FlatList,
  HStack,
  Text,
  VStack,
  View,
  useColorMode,
} from "native-base";

import { UE } from '../../assets/Data/Donnees';
import { styles } from '../../assets/Data/Styles';

const Carte_UE = ({scrollX, navigation}) => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={UE}
        keyExtractor={(item) => item.title}
        horizontal
        bounces={false}
        decelerationRate={DecelerationRate}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ marginTop: height/2 - 150 }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.img){
            return(<View  style={{width:SPACER_ITEM}}/>)
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1)  * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 20, 50],
            extrapolate: 'clamp',
          });

          return (
            <VStack >
            <View  style={{ width: ITEM_SIZE}}>
              <Animated.View
                style={styles(colorMode, translateY).UE_carte}
              >
                  <VStack alignItems="center">
                    <Image
                      source={item.img}
                      style={styles().UE_card_img}
                    />
                    <Text fontSize={24} fontWeight={'bold'} color={COLOR_THEME} numberOfLines={2} textAlign={'center'}>
                    {item.title}
                    </Text>
                    <Text fontSize={20} fontWeight={'bold'} numberOfLines={1} textAlign={'center'}>
                      {item.text}
                    </Text>
                    <TouchableOpacity 
                      style={styles(colorMode).Explorer}
                      onPress={()=>navigation.navigate("Cours",item)}
                      >
                        <HStack  space={3}>
                            <MaterialCommunityIcons name="target-variant" size={24} color={WHITE} />
                            <Text color={WHITE} fontWeight={'bold'}>Explorer</Text>
                        </HStack>
                      </TouchableOpacity>
                  </VStack>
              </Animated.View>
              </View>
              <Center flex={1} width={ITEM_SIZE} >
                <Text textAlign={'center'} width={OBJTXT} underline fontSize="lg">{item.text}</Text>
                <Text textAlign={'center'} width={OBJTXT} fontSize="sm">{item.obj}</Text>
              </Center>
            </VStack>
          );
        }}
      />
  );
}

export default Carte_UE