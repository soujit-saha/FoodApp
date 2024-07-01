import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS} from '../../utils/Theme';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import normalize from '../../utils/normalize';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../utils/RootNavigation';
import Header from '../../components/Header';

const UpdateProfile = () => {
  const [select, setSelect] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
      }}>
      <Header name={'Profile'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            ...GlobalStyles.txtM13,
            marginTop: normalize(10),
            marginBottom: normalize(8),
          }}>
          Name
        </Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor={COLORS.Gray}
          style={{
            ...GlobalStyles.txtR13,
            backgroundColor: '#DDD9D9',
            borderRadius: normalize(8),
            height: normalize(40),
            width: '100%',
            paddingHorizontal: normalize(15),
          }}
        />
        <Text
          style={{
            ...GlobalStyles.txtM13,
            marginTop: normalize(11),
            marginBottom: normalize(8),
          }}>
          Date of birth
        </Text>
        <View style={GlobalStyles.faj}>
          <View style={{...styles.inputCon, width: '31%'}}>
            <Text style={GlobalStyles.txtR13}>DD</Text>
            <Image source={ICONS.rightArrow} style={styles.dropIcon} />
          </View>
          <View style={{...styles.inputCon, width: '31%'}}>
            <Text style={GlobalStyles.txtR13}>MM</Text>
            <Image source={ICONS.rightArrow} style={styles.dropIcon} />
          </View>
          <View style={{...styles.inputCon, width: '31%'}}>
            <Text style={GlobalStyles.txtR13}>YYYY</Text>
            <Image source={ICONS.rightArrow} style={styles.dropIcon} />
          </View>
        </View>
        <Text
          style={{
            ...GlobalStyles.txtM13,
            marginTop: normalize(11),
            marginBottom: normalize(8),
          }}>
          Gender
        </Text>

        <View style={styles.inputCon}>
          <Text style={GlobalStyles.txtR13}>Please select your gender</Text>
          <Image source={ICONS.rightArrow} style={styles.dropIcon} />
        </View>
        <Text
          style={{
            ...GlobalStyles.txtM13,
            marginTop: normalize(11),
            marginBottom: normalize(8),
          }}>
          Location
        </Text>

        <View style={styles.inputCon}>
          <Text style={GlobalStyles.txtR13}>Please select your location</Text>
          <Image source={ICONS.rightArrow} style={styles.dropIcon} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    marginRight: normalize(7),
  },
  dropIcon: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
    tintColor: COLORS.Black,
  },
  inputCon: {
    backgroundColor: COLORS.White,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(15),
    height: normalize(40),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  radioCon: {
    height: normalize(15),
    width: normalize(15),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.Black,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(5),
  },
  radioDot: {
    height: normalize(9),
    width: normalize(9),
    borderRadius: 100,
    backgroundColor: COLORS.Primary,
  },
  btn: {
    height: normalize(45),
    width: '48%',
    borderRadius: normalize(8),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(8),
    justifyContent: 'space-between',
  },
});
