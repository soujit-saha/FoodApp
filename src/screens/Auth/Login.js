import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../utils/RootNavigation';

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.touchCon}>
        <Image source={ICONS.google} style={styles.icon20} />
        <Text style={GlobalStyles.txtM13}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchCon}>
        <Image source={ICONS.email} style={styles.icon20} />
        <Text style={GlobalStyles.txtM13}>Continue with Email</Text>
      </TouchableOpacity>

      <View
        style={{
          ...GlobalStyles.faj,
          width: '100%',
          marginVertical: normalize(10),
        }}>
        <View style={styles.line} />
        <Text style={{...GlobalStyles.txtR12}}>or</Text>
        <View style={styles.line} />
      </View>

      <View
        style={{
          ...GlobalStyles.faj,
          width: '100%',
          marginVertical: normalize(20),
        }}>
        <View
          style={{
            height: normalize(40),
            backgroundColor: COLORS.White,
            borderRadius: normalize(8),
            paddingHorizontal: normalize(7),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '30%',
          }}>
          <Image source={ICONS.ind} style={styles.icon16} />
          <Text style={GlobalStyles.txtM13}> +91 </Text>
          <Image
            source={ICONS.rightArrow}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              transform: [{rotate: '90deg'}],
              tintColor: COLORS.Black,
            }}
          />
        </View>

        <TextInput
          placeholder="Enter your phone no."
          placeholderTextColor={COLORS.Gray}
          style={{
            backgroundColor: '#DDD9D9',
            borderRadius: normalize(8),
            height: normalize(40),
            width: '66%',
            ...GlobalStyles.txtR13,
            paddingHorizontal: normalize(15),
          }}
        />
      </View>

      <CustomButton title={'Continue'} onPress={() => navigate('Otp')} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    marginRight: normalize(5),
  },
  icon16: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
    marginRight: normalize(5),
  },
  touchCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.White,
    borderRadius: normalize(8),
    marginBottom: normalize(15),
    height: normalize(42),
    width: '100%',
  },
  line: {
    height: normalize(1.5),
    width: Dimensions.get('window').width * 0.4,
    backgroundColor: 'red',
  },
});
