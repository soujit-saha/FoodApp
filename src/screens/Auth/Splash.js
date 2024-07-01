import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS} from '../../utils/Theme';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import normalize from '../../utils/normalize';
import {navigate} from '../../utils/RootNavigation';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => navigate('Onboarding'), 3000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: normalize(40),
          color: COLORS.Primary,
          fontFamily: FONTS.Bold,
        }}>
        6 Radius
      </Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
