import {Keyboard, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../utils/RootNavigation';
import Header from '../../components/Header';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import OTPInput from '../../components/OTPInput';

const Otp = () => {
  const [phonepin, setPhonePin] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
        justifyContent: 'space-between',
      }}>
      <View>
        <Header />
        <Text style={GlobalStyles.txtR22}>
          Enter the code sent to your Phone number
        </Text>
        <OTPInput
          code={phonepin}
          setCode={setPhonePin}
          maximumLength={6}
          setIsPinReady={status => {
            if (status) {
              Keyboard.dismiss();
            }
          }}
          style={{marginVertical: normalize(16)}}
        />

        <Text style={GlobalStyles.txtR13}>
          Haven’t received code?{' '}
          <Text style={{...GlobalStyles.txtM13, color: COLORS.Primary}}>
            {' '}
            Resend
          </Text>
        </Text>
      </View>

      <View style={{marginBottom: normalize(40)}}>
        <CustomButton
          title={'Continue'}
          onPress={() => navigate('ProfileSetup')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({});
