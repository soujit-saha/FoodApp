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

const History = () => {
  const [tab, setTab] = useState(0);

  const demoarr = [
    'Steam momos',
    'Fried momo',
    'Dessert',
    'Pan Fried',
    'Momo burger',
    'Peri Peri Momo',
    'Momo Platter',
    'Drinks (Beverages)',
  ];
  const addArr = [
    'Air Conditioning',
    'Spacious Parking',
    'Outdoor Seating',
    'Private Dining Rooms',
    'Home Delivery',
  ];

  const RenderBookingItem = () => {
    const [show, setShow] = useState(false);
    return (
      <View
        style={{
          backgroundColor: COLORS.White,
          borderRadius: normalize(8),
          padding: normalize(7),
          marginBottom: normalize(8),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{...GlobalStyles.fa}}>
            <Image
              source={IMAGES.wowmomo}
              style={{
                height: normalize(30),
                width: normalize(30),
                marginRight: normalize(10),
              }}
            />
            <View>
              <Text style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
                WOW! MOMO!
              </Text>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                Jadavpur ,Kolkata 700075
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Image
              source={ICONS.rightArrow}
              style={{
                ...styles.icon20,
                transform: [{rotate: '90deg'}],
                tintColor: COLORS.Primary,
              }}
            />
          </TouchableOpacity>
        </View>
        {show && (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: normalize(10),
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
                  Today
                </Text>
                <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                  23 May,2024
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
                  Dinner
                </Text>
                <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                  08:00pm
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
                  4
                </Text>
                <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                  23 May,2024
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <Text style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
              Transaction ID: 2817e612e69
            </Text>
            <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
              Transaction Date: 11 June2024,06:30PM
            </Text>
            <Text
              style={{
                ...GlobalStyles.txtM13,
                color: COLORS.Black,
                marginTop: normalize(10),
              }}>
              Jaya Kapoor
            </Text>
            <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
              1234 XXXX XX
            </Text>
          </View>
        )}
      </View>
    );
  };

  const RenderItem = () => {
    const [showOne, setShowOne] = useState(false);
    return (
      <TouchableOpacity
        onPress={() => navigate('OrderDetails')}
        style={{
          backgroundColor: COLORS.White,
          borderRadius: normalize(8),
          paddingVertical: normalize(16),
          paddingHorizontal: normalize(8),
          marginBottom: normalize(15),
        }}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View
            style={{
              backgroundColor: COLORS.LightOrangeOne,
              height: normalize(40),
              width: normalize(40),
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: normalize(10),
            }}>
            <Image source={ICONS.fastfood} style={styles.icon20} />
          </View>
          <View style={{width: '80%'}}>
            <View
              style={{
                ...GlobalStyles.faj,
                width: '100%',
              }}>
              <Text style={{...GlobalStyles.txtM13}}>
                Veg Hot Garlic Steam Momo
              </Text>
              <TouchableOpacity onPress={() => setShowOne(!showOne)}>
                <Image
                  source={ICONS.rightArrow}
                  style={{
                    ...styles.icon20,
                    transform: [{rotate: '90deg'}],
                    tintColor: COLORS.Black,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...GlobalStyles.faj,
                width: '100%',
                marginTop: normalize(5),
              }}>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                Order id <Text style={{color: COLORS.Black}}>#2AHD453X</Text>
              </Text>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                Placed on{' '}
                <Text style={{color: COLORS.Black}}>#29 Feb 2024</Text>
              </Text>
            </View>
            <View
              style={{
                ...GlobalStyles.faj,
                width: '100%',
                marginTop: normalize(5),
              }}>
              <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                Total{' '}
                <Text style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
                  ₹ 219
                </Text>
              </Text>
              <View style={GlobalStyles.fa}>
                <Text style={{...GlobalStyles.txtR11, color: COLORS.Primary}}>
                  View Details{' '}
                </Text>
                <Image source={ICONS.uparrow} style={styles.icon20} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        {showOne ? (
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
        ) : (
          <View style={{...GlobalStyles.faj}}>
            <Text style={{...GlobalStyles.txtM13, color: COLORS.Primary}}>
              ○ Order Delivered
            </Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              29 Feb 2024 • 10:30 AM{' '}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingBottom: normalize(80),
      }}>
      <View style={{paddingHorizontal: normalize(15)}}>
        <Header />
      </View>

      <View
        style={{
          ...GlobalStyles.faj,
          borderBottomWidth: normalize(1),
          borderBottomColor: '#C5C4C4',
        }}>
        <TouchableOpacity
          onPress={() => setTab(0)}
          style={{
            ...styles.tab,
            borderBottomWidth: normalize(2),
            borderBottomColor: tab == 0 ? COLORS.Primary : COLORS.Background,
          }}>
          <Text
            style={{
              ...GlobalStyles.txtM13,
              color: tab == 0 ? COLORS.Primary : COLORS.Inactive,
            }}>
            My Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(1)}
          style={{
            ...styles.tab,
            borderBottomWidth: normalize(2),
            borderBottomColor: tab == 1 ? COLORS.Primary : COLORS.Background,
          }}>
          <Text
            style={{
              ...GlobalStyles.txtM13,
              color: tab == 1 ? COLORS.Primary : COLORS.Inactive,
            }}>
            Bookings
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{padding: normalize(15)}}>
        {tab == 0 && (
          <FlatList
            data={Array(5)}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => <RenderItem item={item} />}
          />
        )}

        {tab == 1 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{...GlobalStyles.txtB14, marginBottom: normalize(10)}}>
              Upcoming Bookings
            </Text>
            <FlatList
              data={Array(5)}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => <RenderBookingItem item={item} />}
            />
            <Text style={{...GlobalStyles.txtB14, marginBottom: normalize(10)}}>
              Past Bookings
            </Text>
            <FlatList
              data={Array(5)}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => <RenderBookingItem item={item} />}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default History;

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
    backgroundColor: '#82807F',
    marginVertical: normalize(15),
  },
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
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
