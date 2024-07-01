import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Theme';
import normalize from '../utils/normalize';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        width: '100%',
        height: normalize(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: normalize(8),
        backgroundColor: COLORS.Primary,
      }}>
      <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
