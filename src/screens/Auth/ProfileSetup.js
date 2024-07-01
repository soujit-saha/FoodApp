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

const ProfileSetup = () => {
  const [select, setSelect] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        padding: normalize(15),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={GlobalStyles.txtR22}>Profile Setup</Text>

        <Text
          style={{
            ...GlobalStyles.txtM13,
            marginTop: normalize(18),
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
        <Text
          style={{
            ...GlobalStyles.txtM13,
            marginTop: normalize(11),
            marginBottom: normalize(8),
          }}>
          Veg/Non-veg
        </Text>

        <View style={GlobalStyles.faj}>
          <TouchableOpacity
            onPress={() => setSelect(0)}
            style={{
              backgroundColor: select == 0 ? COLORS.LightOrange : COLORS.White,
              ...styles.btn,
            }}>
            <View style={GlobalStyles.fa}>
              <Image source={ICONS.veg1} style={styles.icon20} />
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Veg
              </Text>
            </View>

            <View style={styles.radioCon}>
              {select == 0 && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelect(1)}
            style={{
              backgroundColor: select == 1 ? COLORS.LightOrange : COLORS.White,
              ...styles.btn,
            }}>
            <View style={GlobalStyles.fa}>
              <Image source={ICONS.nonv} style={styles.icon20} />
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Non-Veg
              </Text>
            </View>

            <View style={styles.radioCon}>
              {select == 1 && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: normalize(18), marginTop: normalize(50)}}>
          <CustomButton
            title={'Continue'}
            onPress={() => navigate('BottomTab')}
          />
        </View>
        <Text
          style={{
            ...GlobalStyles.txtR13,
            textAlign: 'center',
            marginBottom: normalize(20),
          }}>
          By clicking on continue I agree to{' '}
          <Text style={{...GlobalStyles.txtM13, color: COLORS.Primary}}>
            Terms of use{' '}
          </Text>
          <Text style={GlobalStyles.txtR13}>and </Text>
          <Text style={{...GlobalStyles.txtM13, color: COLORS.Primary}}>
            Privacy policy{' '}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSetup;

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
