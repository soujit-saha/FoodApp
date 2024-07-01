import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {ScrollView} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../utils/RootNavigation';
import BorderButton from '../../components/BorderButton';

const TrackOrder = () => {
  const [tab, setTab] = useState(0);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
      }}>
      <Header name={'Track Order'} />
      <View
        style={{
          paddingVertical: normalize(15),
          paddingHorizontal: normalize(7),
          borderRadius: normalize(7),
          backgroundColor: COLORS.White,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: normalize(50), width: normalize(50)}}></View>
          <View>
            <Text style={GlobalStyles.txtM13}>Corn Cheese Steam Momo</Text>
            <View style={{...GlobalStyles.faj, marginVertical: normalize(4)}}>
              <Text style={{...GlobalStyles.txtR11, color: COLORS.Gray}}>
                Order id
                <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                  {' '}
                  #2AHD453X
                </Text>
              </Text>
              <Text style={{...GlobalStyles.txtR11, color: COLORS.Gray}}>
                Placed on
                <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                  {' '}
                  29 Feb 2024
                </Text>
              </Text>
            </View>
            <Text style={{...GlobalStyles.txtR11, color: COLORS.Gray}}>
              Delivering to
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                {' '}
                A25, Jadavpur, kolkkata 700 075
              </Text>
            </Text>
            <Text
              style={{
                ...GlobalStyles.txtR11,
                color: COLORS.Gray,
                marginTop: normalize(4),
              }}>
              Total
              <Text style={GlobalStyles.txtM13}> {'  '}₹ 219</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingVertical: normalize(16),
            paddingHorizontal: normalize(8),
            marginVertical: normalize(10),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{...styles.circle}}>
                <Image source={ICONS.check} style={styles.icon16} />
              </View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Packaged
              </Text>
              <Text>10:30 am</Text>
            </View>

            <View style={styles.linen} />

            <View style={{alignItems: 'center'}}>
              <View style={{...styles.circle}}>
                <Image source={ICONS.check} style={styles.icon16} />
              </View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Sent Out
              </Text>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                10:30 am
              </Text>
            </View>

            <View style={styles.linen} />

            <View style={{alignItems: 'center'}}>
              <View style={{...styles.circle}}>
                <Image source={ICONS.check} style={styles.icon16} />
              </View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                In transit
              </Text>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                Waiting...
              </Text>
            </View>

            <View style={styles.linen} />

            <View style={{alignItems: 'center'}}>
              <View style={{...styles.circle}}>
                <Image source={ICONS.check} style={styles.icon16} />
              </View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Delivered
              </Text>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                Waiting...
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        {tab == 0 ? (
          <>
            <View
              style={{
                ...GlobalStyles.fa,
                borderRadius: normalize(8),
                borderWidth: normalize(1),
                borderColor: COLORS.Primary,
                padding: normalize(7),
              }}>
              <Image source={ICONS.fastfood} style={styles.icon20} />
              <Text style={GlobalStyles.txtR11}>
                Your order is getting packed
              </Text>
            </View>
            <View
              style={{
                ...GlobalStyles.fa,
                borderRadius: normalize(8),
                borderWidth: normalize(1),
                borderColor: COLORS.Primary,
                padding: normalize(7),
                marginTop: normalize(10),
              }}>
              <Image source={ICONS.deliveryman} style={styles.icon20} />
              <Text style={GlobalStyles.txtR11}>
                We will assign a delivery partner soon
              </Text>
            </View>
          </>
        ) : (
          <View style={{...GlobalStyles.faj}}>
            <Image
              style={{height: normalize(40), width: normalize(40)}}
              source={IMAGES.users}
            />
            <Text
              style={{
                ...GlobalStyles.txtM11,
                color: COLORS.Black,
                width: '65%',
              }}>
              Jaya kapoor{' '}
              <Text style={GlobalStyles.txtR11}>
                is on the way to deliver your order
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                height: normalize(40),
                width: normalize(40),
                borderRadius: normalize(8),
                backgroundColor: COLORS.Primary,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={ICONS.call} style={styles.icon22} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Image
        source={ICONS.Packaged}
        style={{
          height: normalize(200),
          width: normalize(200),
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: normalize(15),
        }}
      />
    </ScrollView>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  tab: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(42),
  },
  smallcon: {
    backgroundColor: COLORS.LightOrangeOne,
    padding: normalize(4),
    borderRadius: normalize(80),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(8),
    marginTop: normalize(5),
    width: normalize(45),
  },
  listcon: {
    paddingVertical: normalize(7),
    paddingHorizontal: normalize(13),
    borderRadius: normalize(80),
    borderWidth: normalize(1),
    marginTop: normalize(7),
    marginRight: normalize(6),
    borderColor: COLORS.Primary,
  },
  line: {
    height: normalize(1),
    width: '100%',
    backgroundColor: 'rgba(130, 128, 127, 0.25)',
    marginVertical: normalize(10),
  },
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    tintColor: COLORS.Primary,
    marginRight: normalize(5),
  },
  icon22: {
    height: normalize(22),
    width: normalize(22),
    resizeMode: 'contain',
    tintColor: COLORS.White,
  },
  icon16: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
  },
  circle: {
    height: normalize(18),
    width: normalize(18),
    borderRadius: 100,
    backgroundColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linen: {
    height: normalize(1),
    width: normalize(35),
    backgroundColor: 'red',
    marginHorizontal: normalize(-5),
    marginTop: normalize(11),
  },
  fullLine: {
    height: normalize(1),
    width: '100%',
    backgroundColor: 'red',
    marginVertical: normalize(10),
  },
});
