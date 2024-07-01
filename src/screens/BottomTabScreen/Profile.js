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
import {COLORS, ICONS} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {navigate} from '../../utils/RootNavigation';
import BorderButton from '../../components/BorderButton';

import Modal from 'react-native-modal';

const Profile = () => {
  const [select, setSelect] = useState(0);

  const [show, setShow] = useState(false);
  const List = [
    {name: 'My Orders', img: ICONS.myorders, nav: ''},
    {name: 'Favorites', img: ICONS.fav, nav: ''},
    {name: 'Table Bookings', img: ICONS.myorders, nav: ''},
    {name: 'Wallet', img: ICONS.wallet, nav: ''},
    {name: 'Promotions & Rewards', img: ICONS.preference, nav: ''},
    {name: 'Help Center', img: ICONS.help, nav: 'HelpCenter'},
    {name: 'Saved places', img: ICONS.Mappin, nav: 'SavedPlaces'},
    {name: 'Share', img: ICONS.share, nav: ''},
    {name: 'Preference', img: ICONS.preference, nav: ''},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        padding: normalize(15),
      }}>
      <FlatList
        data={List}
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: COLORS.White,
              borderRadius: normalize(8),
              ...GlobalStyles.faj,
              padding: normalize(15),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={ICONS.userprofile}
                style={{
                  height: normalize(40),
                  width: normalize(40),
                  marginRight: normalize(8),
                }}
              />
              <View>
                <Text style={GlobalStyles.txtM12}>jaya kapoor</Text>
                <Text style={GlobalStyles.txtR11}>JayaK@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigate('UpdateProfile')}
              style={{
                flexDirection: 'row',
                paddingHorizontal: normalize(8),
                paddingVertical: normalize(4),
                backgroundColor: '#FAE6DB',
                borderRadius: normalize(80),
              }}>
              <Text style={GlobalStyles.txtM11}>Edit</Text>
              <Image
                source={ICONS.edit}
                style={{
                  height: normalize(16),
                  width: normalize(16),
                  resizeMode: 'contain',
                  marginLeft: normalize(4),
                }}
              />
            </TouchableOpacity>
          </View>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(item.nav)}
              style={{...GlobalStyles.faj, marginTop: normalize(15)}}>
              <View style={GlobalStyles.fa}>
                <Image source={item.img} style={styles.icon22} />
                <Text style={GlobalStyles.txtB14}>{item.name}</Text>
              </View>
              <Image
                source={ICONS.uparrow}
                style={{
                  ...styles.icon22,
                  tintColor: COLORS.TextBlack,
                  marginRight: normalize(0),
                }}
              />
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <View>
            <View style={{...GlobalStyles.faj, marginTop: normalize(15)}}>
              <TouchableOpacity
                onPress={() => setSelect(0)}
                style={{
                  backgroundColor:
                    select == 0 ? COLORS.LightOrange : COLORS.White,
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
                  backgroundColor:
                    select == 1 ? COLORS.LightOrange : COLORS.White,
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
            <View style={{marginTop: normalize(80)}}>
              <BorderButton title={'Logout'} onPress={() => setShow(true)} />
            </View>
          </View>
        }
      />
      <Modal isVisible={show} onBackdropPress={() => setShow(false)}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: COLORS.White,
            borderTopRightRadius: normalize(5),
            borderTopLeftRadius: normalize(5),
            paddingHorizontal: normalize(15),
            paddingTop: normalize(10),
          }}>
          <Text style={GlobalStyles.txtR18}>Log out</Text>
          <Text
            style={{
              ...GlobalStyles.txtR13,
              marginTop: normalize(10),
              marginBottom: normalize(8),
            }}>
            Are you sure you want to log out?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              marginTop: normalize(20),
              marginBottom: normalize(18),
            }}>
            <TouchableOpacity
              onPress={() => setShow(false)}
              style={{
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(28),
                borderRadius: normalize(8),
                marginLeft: normalize(10),
                // borderWidth: normalize(1),
                // borderColor: COLORS.Primary,
                width: '48%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F3F3F3',
              }}>
              <Text style={{...GlobalStyles.txtR13}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.Primary,
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(28),
                borderRadius: normalize(8),
                marginLeft: normalize(10),
                width: '48%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  icon22: {
    height: normalize(22),
    width: normalize(22),
    resizeMode: 'contain',
    tintColor: COLORS.Primary,
    marginRight: normalize(8),
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
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    marginRight: normalize(7),
  },
});
