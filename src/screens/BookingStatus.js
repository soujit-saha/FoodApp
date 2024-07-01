import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../utils/Theme';
import normalize from '../utils/normalize';
import Header from '../components/Header';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';
import BorderButton from '../components/BorderButton';
import {navigate} from '../utils/RootNavigation';

const BookingStatus = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
      }}>
      <Header name={'WOW! MOMO'} subtxt={'Jadavpur, Kolkata 700 075'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={ICONS.circleRight} style={styles.statusIcon} />
        {/* <Image source={ICONS.circleCross} style={styles.statusIcon} /> */}
        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginVertical: normalize(10),
            textAlign: 'center',
          }}>
          Booking Confirmed Successfully
          {/* Booking Cancelled */}
        </Text>
        <Text
          style={{
            ...GlobalStyles.txtR11,
            marginBottom: normalize(18),
            textAlign: 'center',
          }}>
          Your booking #87e3458329 has been confirmed successfully
        </Text>

        <BorderButton
          title={'Back to home'}
          onPress={() => navigate('Search')}
          // onPress={() => navigate('FavoritedItems')}
        />

        <View
          style={{
            ...styles.con,
            marginTop: normalize(18),
          }}>
          <View style={GlobalStyles.faj}>
            <Text style={GlobalStyles.txtM13}>Reservation Details</Text>
            <TouchableOpacity>
              <Image
                source={ICONS.shareIcon}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={GlobalStyles.faj}>
            <View style={styles.smCon}>
              <Text style={GlobalStyles.txtB14}>Today</Text>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.TextBlack}}>
                23 May 2024
              </Text>
            </View>
            <View style={styles.smCon}>
              <Text style={GlobalStyles.txtB14}>Dinner</Text>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.TextBlack}}>
                08:00 PM
              </Text>
            </View>
            <View style={styles.smCon}>
              <Text style={GlobalStyles.txtB14}>4</Text>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.TextBlack}}>
                guests
              </Text>
            </View>
          </View>
          <Text style={GlobalStyles.txtM13}>WOW! MOMO</Text>
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Offers and Savings
        </Text>
        <ImageBackground
          source={ICONS.coupontwo}
          resizeMode="contain"
          imageStyle={{borderRadius: normalize(7)}}
          style={{
            width: '100%',
            height: normalize(70),
            justifyContent: 'center',
            marginTop: normalize(7),
          }}>
          <Text style={{...GlobalStyles.txtB14, marginLeft: '18%'}}>
            10% OFF
          </Text>
          <Text style={{...GlobalStyles.txtR11, marginLeft: '18%'}}>
            Valid from 10 June 08:00 PM to 11 June 11:00 AM
          </Text>
        </ImageBackground>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Your Details
        </Text>

        <View style={styles.con}>
          <Text style={GlobalStyles.txtM13}>Jaya Kapoor</Text>
          <Text style={GlobalStyles.txtR11}>1234 XXXX XX</Text>
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Restaurant Details
        </Text>
        <View style={styles.con}>
          <Text style={GlobalStyles.txtM15}>WOW MOMO!!</Text>
          <Text style={GlobalStyles.txtR11}>Jadavpur, Kolkata 700 075</Text>
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Transaction Details
        </Text>
        <View style={styles.con}>
          <Text style={GlobalStyles.txtM13}>Transaction ID : 2871e612e69</Text>
          <Text style={GlobalStyles.txtR11}>
            Transaction Date: 11 June 2024, 06:30 PM
          </Text>
          <View style={GlobalStyles.faj}>
            <TouchableOpacity style={styles.smlbtn}>
              <Text style={GlobalStyles.txtM11}>Profile</Text>
              <Image source={ICONS.uparrow} style={styles.smIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.smlbtn}>
              <Text style={GlobalStyles.txtM11}>Directions</Text>
              <Image source={ICONS.marker} style={styles.smIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.smlbtn}>
              <Text style={GlobalStyles.txtM11}>Call</Text>
              <Image source={ICONS.call} style={styles.smIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Restaurant terms & conditions
        </Text>
        <Text style={GlobalStyles.txtR11}>
          Welcome to Evolar. Your privacy is important to us, and we are
          committed to protecting and safeguarding your personal information.
          This Privacy Policy outlines how we collect, use, and share your data
          when you use our mobile application and services.
        </Text>
        <Text style={{...GlobalStyles.txtM13, marginVertical: normalize(4)}}>
          1. Information We Collect:
        </Text>
        <Text style={GlobalStyles.txtR11}>
          We may collect various types of information to provide you with a
          seamless and personalized experience. This includes:
          {'\n'}Personal Information: When you sign up or use our services, we
          may collect personal details such as your name, email address, and
          contact information.
          {'\n'}Device Information: We automatically collect information about
          your device, including its model, operating system, and unique
          identifiers.
          {'\n'}Usage Data: We gather data about your interactions with our app,
          including the pages you visit, the features you use, and the time
          spent on each.
        </Text>
        <Text style={{...GlobalStyles.txtM13, marginVertical: normalize(4)}}>
          2. How We Use Your Information:
        </Text>
        <Text style={GlobalStyles.txtR11}>
          We use the collected information for various purposes, including:
          {'\n'}
          Personalization: To tailor our app's content and features to your
          preferences.
          {'\n'}Communication: To send you updates, newsletters, and relevant
          information about our services.
          {'\n'}Analytics: To analyze usage patterns, improve our app, and
          enhance user experience.
        </Text>
        <Text style={{...GlobalStyles.txtM13, marginVertical: normalize(4)}}>
          3. Information Sharing:
        </Text>
        <Text style={GlobalStyles.txtR11}>
          We do not sell, trade, or transfer your personal information to third
          parties without your consent. However, we may share information with
          trusted service providers who assist us in delivering our services.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingStatus;

const styles = StyleSheet.create({
  statusIcon: {
    height: normalize(90),
    width: normalize(90),
    resizeMode: 'contain',
    marginTop: normalize(8),
    alignSelf: 'center',
  },
  con: {
    borderRadius: normalize(8),
    backgroundColor: COLORS.White,
    padding: normalize(15),
  },
  smlbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize(8),
    borderWidth: normalize(1),
    borderColor: COLORS.Primary,
    padding: normalize(6),
    width: normalize(80),
    justifyContent: 'center',
    marginTop: normalize(16),
  },
  smIcon: {
    height: normalize(14),
    width: normalize(14),
    resizeMode: 'contain',
    marginLeft: normalize(4),
    tintColor: COLORS.Primary,
  },
  smCon: {
    borderRadius: normalize(8),
    backgroundColor: COLORS.LightOrange,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(10),
    width: normalize(82),
    marginTop: normalize(12),
    marginBottom: normalize(10),
  },
});
