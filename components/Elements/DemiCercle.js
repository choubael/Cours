import { Path, Svg } from 'react-native-svg';

import React from 'react';
import { View } from 'react-native';

const HalfCircle = ({ radius, color, ml, mt }) => {
    const path = `M 0 2 A 1.42 1.42 0 0 1 0 ${2 * radius}`;
    return (
    <View style={{position:'absolute',marginLeft:ml, marginTop:mt}}>
      <Svg height={2 * radius} width={radius}>
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};

export default HalfCircle;
