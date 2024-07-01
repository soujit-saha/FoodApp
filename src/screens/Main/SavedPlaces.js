import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {navigate} from '../../utils/RootNavigation';
import BorderButton from '../../components/BorderButton';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import CustomButton from '../../components/CustomButton';

const SavedPlaces = () => {
  const [select, setSelect] = useState(0);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const List = [
    {
      name: 'Home',
      img: ICONS.Home,
      sub: '12/493. Old pune bus station area, pune',
    },
    {name: 'Work', img: ICONS.Work, sub: 'A345, Central view building , pune'},
    {name: 'College', img: ICONS.College, sub: 'New Engineering College, Pune'},
    {name: 'Sports', img: ICONS.wallet, sub: 'New Engineering College, Pune'},
    {name: 'Gym', img: ICONS.Gym, sub: 'New Engineering College, Pune'},
    {name: 'Market', img: ICONS.Market, sub: 'New Engineering College, Pune'},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
        paddingTop: normalize(15),
      }}>
      <Header name={'Saved Places'} />
      <FlatList
        data={List}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{...GlobalStyles.faj, marginTop: normalize(15)}}>
              <View style={GlobalStyles.fa}>
                <Image source={item.img} style={styles.icon22} />
                <View>
                  <Text style={GlobalStyles.txtB14}>{item.name}</Text>
                  <Text style={GlobalStyles.txtR11}>{item.sub}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setShow(true)}>
                <Image
                  source={ICONS.edit}
                  style={{
                    ...styles.icon22,
                    marginRight: normalize(0),
                  }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: normalize(10),
          width: '100%',
          alignSelf: 'center',
        }}>
        <BorderButton
          title={'Add a new place'}
          onPress={() => setShow1(true)}
        />
      </View>

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
          <Text style={GlobalStyles.txtR18}>Edit your saved place</Text>
          <Text
            style={{
              ...GlobalStyles.txtM13,
              marginTop: normalize(10),
              marginBottom: normalize(8),
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Give your place a name"
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
              marginTop: normalize(10),
              marginBottom: normalize(8),
            }}>
            Location
          </Text>
          <TextInput
            placeholder="Enter Location"
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
              style={{
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(28),
                borderRadius: normalize(8),
                marginLeft: normalize(10),
                borderWidth: normalize(1),
                borderColor: COLORS.Primary,
                width: '48%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...GlobalStyles.txtR13}}>Delete</Text>
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
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal isVisible={show1} onBackdropPress={() => setShow1(false)}>
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
          <Text style={GlobalStyles.txtR18}>Edit your saved place</Text>
          <Text
            style={{
              ...GlobalStyles.txtM13,
              marginTop: normalize(10),
              marginBottom: normalize(8),
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Give your place a name"
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
              marginTop: normalize(10),
              marginBottom: normalize(8),
            }}>
            Location
          </Text>
          <TextInput
            placeholder="Enter Location"
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
          <View style={{marginVertical: normalize(20)}}>
            <CustomButton title={'Save Place'} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SavedPlaces;

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
