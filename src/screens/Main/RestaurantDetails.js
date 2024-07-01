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

const RestaurantDetails = () => {
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
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
      }}>
      <View style={{paddingHorizontal: normalize(15)}}>
        <Header />
        <View
          style={{
            marginVertical: normalize(15),
            flexDirection: 'row',
          }}>
          <Image
            source={IMAGES.wowmomo}
            style={{
              height: normalize(50),
              width: normalize(50),
              resizeMode: 'contain',
              marginRight: normalize(8),
            }}
          />
          <View>
            <Text style={GlobalStyles.txtM13}>WOW! MOMO</Text>
            <Text style={GlobalStyles.txtR11}>Jadavpur, Kolkata. 700 075</Text>
            <View style={styles.smallcon}>
              <Image
                source={ICONS.star}
                style={{
                  height: normalize(10),
                  width: normalize(10),
                  resizeMode: 'contain',
                  marginRight: normalize(2),
                }}
              />
              <Text style={{...GlobalStyles.txtR11, color: COLORS.Primary}}>
                4.5
              </Text>
            </View>
          </View>
        </View>
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
              color: tab == 0 ? COLORS.Black : COLORS.Inactive,
            }}>
            Overview
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
              color: tab == 1 ? COLORS.Black : COLORS.Inactive,
            }}>
            Videos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(2)}
          style={{
            ...styles.tab,
            borderBottomWidth: normalize(2),
            borderBottomColor: tab == 2 ? COLORS.Primary : COLORS.Background,
          }}>
          <Text
            style={{
              ...GlobalStyles.txtM13,
              color: tab == 2 ? COLORS.Black : COLORS.Inactive,
            }}>
            Menu
          </Text>
        </TouchableOpacity>
      </View>

      {tab == 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: normalize(15)}}>
          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(10)}}>
            Cuisines
          </Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {demoarr?.map((item, index) => {
              return (
                <TouchableOpacity style={styles.listcon}>
                  <Text style={GlobalStyles.txtR11}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
            Popular Dishes
          </Text>
          <Text style={{...GlobalStyles.txtR11, marginTop: normalize(7)}}>
            Veg Hot Garlic Steam Momo, Corn Cheese Steam Momo, Paneer Steam
            Momo, Chicken Cheese Steam Momo, Chicken Masala Steam Momo, Corn
            Cheese Fried Momo
          </Text>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
            Average Cost
          </Text>
          <Text style={{...GlobalStyles.txtM13, marginTop: normalize(7)}}>
            ₹800 for two people (approx.)
          </Text>
          <Text style={GlobalStyles.txtR10}>
            Exclusive of applicable taxes and charges, if any
          </Text>
          <Text style={{...GlobalStyles.txtM13, marginTop: normalize(7)}}>
            ₹1,500 for four people (approx.)
          </Text>
          <Text style={GlobalStyles.txtR10}>
            Exclusive of applicable taxes and charges, if any
          </Text>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
            Additional details
          </Text>
          <FlatList
            data={addArr}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: normalize(8),
                  }}>
                  <Image
                    source={ICONS.check}
                    style={{
                      height: normalize(15),
                      width: normalize(15),
                      resizeMode: 'contain',
                      tintColor: COLORS.Primary,
                      marginRight: normalize(4),
                    }}
                  />
                  <Text>{item}</Text>
                </View>
              );
            }}
          />

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
            Reviews
          </Text>

          <View style={{flexDirection: 'row', width: '90%'}}>
            <Image
              source={IMAGES.users}
              style={{
                height: normalize(25),
                width: normalize(25),
                resizeMode: 'contain',
                marginRight: normalize(7),
              }}
            />
            <View>
              <Text style={GlobalStyles.txtM13}>
                Jay Kapoor<Text style={GlobalStyles.txtR10}> 23 days ago</Text>
              </Text>
              <Text style={GlobalStyles.txtR11}>
                Momos is so much tasty with the Chatuny,We had a wonderful
                experience!!!
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: normalize(5),
                }}>
                <Image
                  source={ICONS.Likeheart}
                  style={{
                    height: normalize(15),
                    width: normalize(15),
                    resizeMode: 'contain',
                    marginRight: normalize(5),
                  }}
                />

                <Text
                  style={{
                    ...GlobalStyles.txtR10,
                    color: COLORS.Black,
                    marginRight: normalize(5),
                  }}>
                  12 Helpful
                </Text>
                <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                  Reply
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  marginVertical: normalize(6),
                }}>
                <Image
                  source={IMAGES.wowmomo}
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                    resizeMode: 'contain',
                    marginRight: normalize(8),
                  }}
                />
                <View>
                  <Text style={GlobalStyles.txtM11}>Wow Momo</Text>
                  <Text style={GlobalStyles.txtR11}>
                    Thank you for your review, we truly appreciate your order.{' '}
                  </Text>
                </View>
              </View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                View 04 more replies
              </Text>
            </View>
          </View>

          <View style={{marginVertical: normalize(20)}}>
            <CustomButton
              title={'Order now'}
              onPress={() => console.log('123')}
            />
          </View>
        </ScrollView>
      )}

      {tab == 1 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: normalize(15)}}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          data={Array(6)}
          numColumns={2}
          renderItem={() => {
            return (
              <Image
                source={IMAGES.ss1}
                style={{
                  height: normalize(210),
                  width: '48%',
                  marginBottom: normalize(10),
                }}
              />
            );
          }}
          ListFooterComponent={
            <View style={{marginVertical: normalize(10)}}>
              <CustomButton
                title={'Order now'}
                onPress={() => console.log('123')}
              />
            </View>
          }
        />
      )}

      {tab == 2 && (
        <FlatList
          data={Array(2)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: normalize(15)}}
          renderItem={() => {
            return (
              <Image
                source={IMAGES.DemoTwo}
                style={{
                  height: normalize(220),
                  width: '100%',
                  resizeMode: 'contain',
                  marginBottom: normalize(10),
                }}
              />
            );
          }}
          ListFooterComponent={
            <View style={{marginVertical: normalize(10)}}>
              <CustomButton
                title={'Order now'}
                onPress={() => console.log('123')}
              />
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  tab: {
    width: '33%',
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
});
