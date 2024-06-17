import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Theme';
import normalize from '../utils/normalize';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';

const BorderButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        width: '100%',
        height: normalize(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: normalize(1),
        borderColor: COLORS.Primary,
        borderRadius: normalize(8),
      }}>
      <Text style={GlobalStyles.txtM13}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BorderButton;

const styles = StyleSheet.create({});
