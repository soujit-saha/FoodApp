import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS} from '../utils/Theme';
import {goBack} from '../utils/RootNavigation';
import normalize from '../utils/normalize';

const Header = ({name, subtxt}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: normalize(12),
      }}>
      <TouchableOpacity onPress={() => goBack()}>
        <Image
          source={ICONS.backArrow}
          style={{
            height: normalize(20),
            width: normalize(20),
            resizeMode: 'contain',
            tintColor: COLORS.TextBlack,
            marginRight: normalize(10),
          }}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.txtM15}>{name}</Text>
        {subtxt && <Text style={styles.txtR11}>{subtxt}</Text>}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  txtM15: {
    fontSize: normalize(15),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Medium,
  },
  txtR11: {
    fontSize: normalize(11),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
  },
});
