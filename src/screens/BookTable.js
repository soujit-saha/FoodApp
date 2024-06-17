import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, ICONS} from '../utils/Theme';
import normalize from '../utils/normalize';
import {goBack, navigate} from '../utils/RootNavigation';
import Header from '../components/Header';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';

const BookTable = () => {
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(0);
  const [brk, setBrk] = useState(-1);
  const [lun, setLun] = useState(-1);
  const [din, setDin] = useState(-1);
  const [show, setShow] = useState(-1);

  const cal = [
    {name: 'M', date: '19'},
    {name: 'T', date: '20'},
    {name: 'W', date: '21'},
    {name: 'T', date: '22'},
    {name: 'F', date: '23'},
    {name: 'S', date: '24'},
    {name: 'S', date: '25'},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
      }}>
      <Header name={'Book Table'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{...styles.txtB14, marginVertical: normalize(14)}}>
          Restarant name lorem ipsum text goes
        </Text>

        <View
          style={{
            backgroundColor: COLORS.White,
            borderRadius: normalize(7),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(7),
            marginTop: normalize(15),
            paddingVertical: normalize(12),
          }}>
          <View style={styles.fa}>
            <Image
              source={ICONS.table}
              style={{...styles.Icon, marginRight: normalize(8)}}
            />

            <Text style={styles.txtM12}>Number of guest(s)</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: normalize(30),
              alignItems: 'center',
              borderWidth: normalize(1),
              borderColor: COLORS.Primary,
              borderRadius: normalize(8),
              paddingHorizontal: normalize(4),
              width: normalize(80),
            }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  count == 0 ? null : setCount(count - 1);
                }}>
                <Image
                  source={ICONS.minus}
                  style={{
                    height: normalize(18),
                    width: normalize(18),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={{...styles.txtM12, color: COLORS.Primary}}>
              {count}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCount(count + 1);
              }}>
              <Image
                source={ICONS.add}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{...styles.txtB14, marginVertical: normalize(14)}}>
          Delivery date and meal time
        </Text>

        <View>
          <FlatList
            data={cal}
            numColumns={7}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({item, index}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{...styles.txtM12}}>{item.name}</Text>
                  <TouchableOpacity
                    onPress={() => setSelect(index)}
                    style={{
                      backgroundColor:
                        select == index ? COLORS.Primary : COLORS.Background,
                      height: normalize(30),
                      width: normalize(25),
                      borderRadius: normalize(18),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: normalize(8),
                    }}>
                    <Text
                      style={{
                        ...styles.txtB14,
                        color: select == index ? COLORS.White : COLORS.Black,
                      }}>
                      {item.date}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...styles.txtM12,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Breakfast
        </Text>
        <View>
          <FlatList
            data={Array(3)}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setBrk(index)}
                  style={{
                    width: '48.5%',
                    borderRadius: normalize(8),
                    paddingVertical: normalize(8),
                    backgroundColor: COLORS.White,
                    alignItems: 'center',
                    marginBottom: normalize(8),
                    borderWidth: normalize(1),
                    borderColor: index == brk ? COLORS.Primary : COLORS.White,
                  }}>
                  <Text
                    style={{
                      ...styles.txtR11,
                      color: index == brk ? COLORS.Primary : COLORS.Black,
                    }}>
                    09:30 AM - 10:30 AM
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...styles.txtM12,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Lunch
        </Text>

        <View>
          <FlatList
            data={Array(4)}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setLun(index)}
                  style={{
                    width: '48.5%',
                    borderRadius: normalize(8),
                    paddingVertical: normalize(8),
                    backgroundColor: COLORS.White,
                    alignItems: 'center',
                    marginBottom: normalize(8),
                    borderWidth: normalize(1),
                    borderColor: index == lun ? COLORS.Primary : COLORS.White,
                  }}>
                  <Text
                    style={{
                      ...styles.txtR11,
                      color: index == lun ? COLORS.Primary : COLORS.Black,
                    }}>
                    09:30 AM - 10:30 AM
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...styles.txtM12,
            marginTop: normalize(18),
            marginBottom: normalize(7),
          }}>
          Dinner
        </Text>

        <View>
          <FlatList
            data={Array(5)}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setDin(index)}
                  style={{
                    width: '48.5%',
                    borderRadius: normalize(8),
                    paddingVertical: normalize(8),
                    backgroundColor: COLORS.White,
                    alignItems: 'center',
                    marginBottom: normalize(8),
                    borderWidth: normalize(1),
                    borderColor: index == din ? COLORS.Primary : COLORS.White,
                  }}>
                  <Text
                    style={{
                      ...styles.txtR11,
                      color: index == din ? COLORS.Primary : COLORS.Black,
                    }}>
                    09:30 AM - 10:30 AM
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text style={{...styles.txtB14, marginVertical: normalize(18)}}>
          Select an Offer
        </Text>

        <FlatList
          data={Array(2)}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setShow(index)}
                style={{
                  width: '100%',
                  padding: normalize(15),
                  backgroundColor:
                    index == show ? COLORS.LightOrange : COLORS.White,
                  borderRadius: normalize(8),
                  marginBottom: normalize(16),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: normalize(16),
                    width: normalize(16),
                    borderRadius: 100,
                    borderWidth: normalize(1),
                    borderColor: COLORS.Black,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: normalize(10),
                  }}>
                  {index == show && (
                    <View
                      style={{
                        height: normalize(10),
                        width: normalize(10),
                        borderRadius: 100,
                        backgroundColor: COLORS.Primary,
                      }}
                    />
                  )}
                </View>
                <View>
                  <Text style={GlobalStyles.txtM13}>
                    Flat 15% OFF on Total Bill
                  </Text>
                  <Text style={GlobalStyles.txtR11}>
                    Get up to 15% off on your first bill
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity
          onPress={() => navigate('BookingStatus')}
          style={{
            width: '100%',
            height: normalize(40),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: normalize(8),
            backgroundColor: COLORS.Primary,
          }}>
          <Text style={{...styles.txtM12, color: COLORS.White}}>Continue</Text>
        </TouchableOpacity>

        <View style={{height: normalize(30)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookTable;

const styles = StyleSheet.create({
  txtB14: {
    fontSize: normalize(14),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Bold,
    // fontWeight: '700',
  },
  txtR12: {
    fontSize: normalize(12),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
    // fontWeight: '400',
  },
  txtR11: {
    fontSize: normalize(11),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
    // fontWeight: '400',
  },
  txtM15: {
    fontSize: normalize(15),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Medium,
    // fontWeight: '500',
  },
  txtM12: {
    fontSize: normalize(12),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Medium,
  },
  Icon: {
    height: normalize(28),
    width: normalize(28),
    resizeMode: 'contain',
  },
  fa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
