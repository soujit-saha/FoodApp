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

const OrderDetails = () => {
  const [tab, setTab] = useState(0);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        // paddingBottom: normalize(80),
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
            Summary
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
            Items
          </Text>
        </TouchableOpacity>
      </View>

      {tab == 0 && (
        <View style={{paddingHorizontal: normalize(15)}}>
          <Text style={{...GlobalStyles.txtB14, marginVertical: normalize(15)}}>
            Delivery Details
          </Text>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Plased on</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              29 Feb 2024
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Delivery on</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              1 Mar 2024
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Order Status</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              Completed
            </Text>
          </View>

          <Text style={{...GlobalStyles.txtB14, marginVertical: normalize(15)}}>
            Address
          </Text>
          <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
            2/94, Hadpasar area, Pune. 283 291 2/94, Hadpasar area, Pune. 283
            291
          </Text>

          <Text style={{...GlobalStyles.txtB14, marginVertical: normalize(15)}}>
            Payment Details
          </Text>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Order ID </Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              3UDNSO3XSUW
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Invoice Number</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              dhsdu73nduA1Ju
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Mode of Payment</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              Cash On Delivery
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Number of Items</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              02
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Delivery Charges</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              00
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtR11}}>Coupon Code Discount</Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              00
            </Text>
          </View>
          <View style={{...GlobalStyles.faj, marginVertical: normalize(5)}}>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              Total
            </Text>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              ₹ 741
            </Text>
          </View>

          <View style={{marginVertical: normalize(15)}}>
            <BorderButton
              title={'Download Invoice'}
              onPress={() => navigate('TrackOrder')}
            />
          </View>
        </View>
      )}

      {tab == 1 && (
        <View style={{marginHorizontal: normalize(15)}}>
          <Text style={{...GlobalStyles.txtB14, marginVertical: normalize(15)}}>
            3 Items
          </Text>
          <FlatList
            data={Array(3)}
            renderItem={() => {
              return (
                <View
                  style={{
                    backgroundColor: COLORS.White,
                    borderRadius: normalize(8),
                    padding: normalize(7),
                    marginBottom: normalize(8),
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={IMAGES.Demo9}
                    style={{
                      height: normalize(70),
                      width: normalize(70),
                      marginRight: normalize(10),
                    }}
                  />
                  <View>
                    <View
                      style={{
                        width: '85%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                        Veg Hot Garlic Momo
                      </Text>
                      <Image
                        source={ICONS.veg}
                        style={{height: normalize(14), width: normalize(14)}}
                      />
                    </View>
                    <View
                      style={{
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: normalize(5),
                      }}>
                      <Text
                        style={{...GlobalStyles.txtM13, color: COLORS.Black}}>
                        $145
                      </Text>
                      <Text
                        style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                        Ouantity : 01
                      </Text>
                    </View>
                    <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                      (Inclusive of all taxes)
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default OrderDetails;

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
});
