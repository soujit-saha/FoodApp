import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import Header from '../../components/Header';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../utils/RootNavigation';
import BorderButton from '../../components/BorderButton';

const Checkout = () => {
  const Instructions = [
    {txt: 'Avoid ringing the bell', img: ICONS.notificationoff},
    {txt: 'Leave at the door', img: ICONS.door},
    {txt: 'Direction to reach', img: ICONS.Mappin},
    {txt: 'Avoid Calling', img: ICONS.cutcall},
  ];
  const [cartItems, setCartItems] = useState([
    {id: 1, name: 'Item 1', price: 10, quantity: 1},
    {id: 2, name: 'Item 2', price: 15, quantity: 2},
    {id: 3, name: 'Item 3', price: 15, quantity: 2},
    // Add more items as needed
  ]);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      // Remove item from cart
      const updatedCart = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCart);
    } else {
      // Update quantity
      const updatedCart = cartItems.map(item => {
        if (item.id === itemId) {
          return {...item, quantity: newQuantity};
        }
        return item;
      });
      setCartItems(updatedCart);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.Background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: normalize(15)}}>
          <Header name={'Checkout'} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.White,
              borderRadius: normalize(8),
              paddingHorizontal: normalize(15),
              paddingVertical: normalize(10),
              marginTop: normalize(15),
            }}>
            <Image source={ICONS.marker} style={styles.icon16} />
            <View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Home
              </Text>
              <Text style={GlobalStyles.txtR10}>Jadavpur, Kolkata</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.LightOrange,
              paddingHorizontal: normalize(15),
              paddingVertical: normalize(7),
              borderRadius: normalize(8),
              marginVertical: normalize(18),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={ICONS.couponfilled}
              style={{
                height: normalize(20),
                width: normalize(20),
                resizeMode: 'contain',
                marginRight: normalize(7),
              }}
            />
            <Text style={GlobalStyles.txtR11}>
              You saved ₹209! with FREE delivery
            </Text>
          </View>

          <Text style={GlobalStyles.txtB14}>3 Orders</Text>

          <View style={{}}>
            <FlatList
              data={cartItems}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      backgroundColor: COLORS.White,
                      padding: normalize(7),
                      borderRadius: normalize(8),
                      marginTop: normalize(10),
                    }}>
                    <View style={{...GlobalStyles.faj}}>
                      <Text
                        style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                        Veg hot Garlic Stream Momo
                      </Text>
                      <Image
                        source={ICONS.veg}
                        style={{
                          height: normalize(16),
                          width: normalize(16),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>

                    <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                      Restaurant/Hotel name
                    </Text>

                    <View style={{...GlobalStyles.faj}}>
                      <View>
                        <Text style={{...GlobalStyles.txtB14}}>₹ 300</Text>
                        <Text
                          style={{...GlobalStyles.txtR10, color: '#5B5857'}}>
                          (Inclusive of all taxes)
                        </Text>
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
                            onPress={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }>
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
                        <Text
                          style={{
                            ...GlobalStyles.txtM13,
                            color: COLORS.Primary,
                          }}>
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }>
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
                  </View>
                );
              }}
            />
          </View>

          <View style={{marginVertical: normalize(15)}}>
            <BorderButton
              title={'Add more items'}
              onPress={() => navigate('TrackOrder')}
            />
          </View>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(18)}}>
            Recommended items
          </Text>
          <View style={{marginTop: normalize(15)}}>
            <FlatList
              data={Array(4)}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={() => {
                return (
                  <View
                    style={{width: normalize(120), marginRight: normalize(15)}}>
                    <ImageBackground
                      source={IMAGES.Demo24}
                      style={{height: normalize(120), width: normalize(120)}}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: COLORS.White,
                          borderRadius: normalize(8),
                          height: normalize(26),
                          width: normalize(26),
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: normalize(5),
                          alignSelf: 'flex-end',
                          borderWidth: normalize(1),
                          borderColor: COLORS.Primary,
                        }}>
                        <Image
                          source={ICONS.add}
                          style={{
                            height: normalize(16),
                            width: normalize(16),
                            resizeMode: 'contain',
                          }}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                    <Text
                      style={{
                        ...GlobalStyles.txtM11,
                        color: COLORS.Black,
                        marginVertical: normalize(6),
                      }}>
                      Coca Cola
                    </Text>
                    <View style={GlobalStyles.faj}>
                      <View style={GlobalStyles.fa}>
                        <Image source={ICONS.clock} style={styles.icon12} />
                        <Text style={{...GlobalStyles.txtR11}}>30 min</Text>
                      </View>
                      <Text style={GlobalStyles.txtB14}> ₹ 125</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(18)}}>
            Tip your delivery partener
          </Text>
          <View
            style={{
              backgroundColor: COLORS.White,
              marginTop: normalize(10),
              padding: normalize(7),
              borderRadius: normalize(8),
            }}>
            <Text>
              Thank your delivery partner by leaving them a tip. 100% of the tip
              will go to your delivery partner.
            </Text>
            <FlatList
              data={['₹20', '₹30', '₹40', 'Other']}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop: normalize(15)}}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      borderRadius: normalize(8),
                      borderWidth: normalize(1),
                      borderColor: COLORS.Primary,
                      height: normalize(50),
                      width: normalize(60),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: normalize(15),
                    }}>
                    <Text style={GlobalStyles.txtB14}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(18)}}>
            Delivery Instructions
          </Text>
          <FlatList
            data={Instructions}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: normalize(15)}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    borderRadius: normalize(8),
                    width: normalize(65),
                    justifyContent: 'center',
                    marginRight: normalize(12),
                    backgroundColor: COLORS.White,
                    padding: normalize(7),
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      height: normalize(15),
                      width: normalize(15),
                      resizeMode: 'contain',
                      marginBottom: normalize(7),
                    }}
                  />

                  <Text style={GlobalStyles.txtR11}>{item.txt}</Text>
                </TouchableOpacity>
              );
            }}
          />

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(18)}}>
            Have coupon code?
          </Text>

          <View
            style={{
              paddingHorizontal: normalize(15),
              paddingVertical: normalize(7),
              backgroundColor: '#DDD9D9',
              borderRadius: normalize(8),
              marginTop: normalize(12),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter Coupon Code"
              style={{...GlobalStyles.txtR11, color: '#5B5857', width: '70%'}}
            />
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.Primary,
                paddingHorizontal: normalize(18),
                paddingVertical: normalize(7),
                borderRadius: normalize(8),
              }}>
              <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(18)}}>
            Bill Summary
          </Text>

          <View
            style={{
              padding: normalize(15),
              backgroundColor: COLORS.White,
              borderRadius: normalize(8),
              marginTop: normalize(12),
            }}>
            <View style={GlobalStyles.faj}>
              <Text style={GlobalStyles.txtM13}>Total</Text>
              <Text style={GlobalStyles.txtM13}>₹ 910</Text>
            </View>

            <View style={{...GlobalStyles.faj, marginTop: normalize(5)}}>
              <Text style={GlobalStyles.txtM13}>Delivery Fees</Text>
              <Text
                style={{
                  ...GlobalStyles.txtM13,
                  textDecorationLine: 'line-through',
                }}>
                ₹ 50{' '}
                <Text
                  style={{
                    color: COLORS.Primary,
                    textDecorationLine: 'none',
                  }}>
                  Free
                </Text>
              </Text>
            </View>

            <View style={{...GlobalStyles.faj, marginTop: normalize(5)}}>
              <Text style={GlobalStyles.txtM13}>Coupon Discount</Text>
              <Text style={GlobalStyles.txtM13}>₹ 00</Text>
            </View>

            <View style={{...GlobalStyles.faj, marginTop: normalize(5)}}>
              <Text style={GlobalStyles.txtM13}>GST & Restaurant Charges</Text>
              <Text style={GlobalStyles.txtM13}>₹ 40</Text>
            </View>

            <View style={styles.line} />

            <View style={GlobalStyles.faj}>
              <Text style={GlobalStyles.txtM13}>
                Order Total{' '}
                <Text style={{...GlobalStyles.txtR11, color: COLORS.Inactive}}>
                  (Inclusive of all taxes)
                </Text>
              </Text>
              <Text style={GlobalStyles.txtM13}>₹ 950</Text>
            </View>
          </View>

          <Text style={{...GlobalStyles.txtB14, marginTop: normalize(18)}}>
            Review your order
          </Text>

          <View
            style={{
              padding: normalize(15),
              backgroundColor: COLORS.White,
              borderRadius: normalize(8),
              marginTop: normalize(12),
            }}>
            <Text
              style={{
                ...GlobalStyles.txtM13,
                color: COLORS.Primary,
              }}>
              Note
            </Text>
            <Text
              style={{
                ...GlobalStyles.txtR11,
                color: COLORS.Inactive,
                marginTop: normalize(4),
              }}>
              If you cancel within 60 seconds of placing your order, a 100%
              refund will be issued. No refund for cancellation made after 60
              seconds.
            </Text>
            <Text
              style={{
                ...GlobalStyles.txtR11,
                color: COLORS.Inactive,
                marginTop: normalize(8),
              }}>
              Avoid cancellation as it leads to food wastage.
            </Text>
            <Text style={{...GlobalStyles.txtM11, marginTop: normalize(4)}}>
              Read Cancellation Policy
            </Text>
          </View>
        </View>

        <View style={styles.btmCon}>
          <View
            style={{
              ...GlobalStyles.faj,
              width: '100%',
              marginVertical: normalize(15),
            }}>
            <View>
              <Text style={GlobalStyles.txtB18}>₹ 950</Text>
              <Text style={{...GlobalStyles.txtR11, color: COLORS.Inactive}}>
                (Inclusive of all taxes)
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate('History')}
              style={{
                backgroundColor: COLORS.Primary,
                paddingHorizontal: normalize(15),
                paddingVertical: normalize(7),
                borderRadius: normalize(8),
              }}>
              <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>
                Proceed to pay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  icon16: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
    tintColor: COLORS.Black,
    marginRight: normalize(5),
  },
  btmCon: {
    width: '100%',
    borderTopRightRadius: normalize(15),
    borderTopLeftRadius: normalize(15),
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    marginTop: normalize(16),
    // paddingBottom: normalize(10),
  },
  line: {
    width: '100%',
    height: normalize(1),
    backgroundColor: '#82807F',
    marginVertical: normalize(7),
  },
  icon12: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    tintColor: COLORS.Black,
    marginRight: normalize(2),
  },
});
