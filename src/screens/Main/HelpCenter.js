import {
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

import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import normalize from '../../utils/normalize';
import {COLORS, ICONS} from '../../utils/Theme';
import Header from '../../components/Header';

const HelpCenter = () => {
  const [tab, setTab] = useState(0);
  const List = [
    {name: 'Customer Support', img: ICONS.myorders, nav: ''},
    {name: 'Whatsapp', img: ICONS.fav, nav: ''},
    {name: 'Email', img: ICONS.email, nav: ''},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
      }}>
      <View style={{paddingHorizontal: normalize(15)}}>
        <Header name={'Help Center'} />
        <View
          style={{
            ...GlobalStyles.fa,
            backgroundColor: '#DDD9D9',
            borderRadius: normalize(8),
            height: normalize(42),
            paddingHorizontal: normalize(15),
            marginVertical: normalize(12),
          }}>
          <Image
            source={ICONS.Search}
            style={{...styles.icon20, tintColor: COLORS.Primary}}
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.TextBlack}
            style={{...GlobalStyles.txtR15, width: '80%'}}
          />
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
              color: tab == 0 ? COLORS.Primary : COLORS.Inactive,
            }}>
            FAQs
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
            Contact us
          </Text>
        </TouchableOpacity>
      </View>

      {tab == 0 && (
        <View style={{paddingHorizontal: normalize(15)}}>
          <Text style={{...GlobalStyles.txtM15, marginTop: normalize(15)}}>
            How can I pay for my ride?
          </Text>
          <Text style={GlobalStyles.txtR11}>
            You can pay using your linked credit/debit card or other filler w
            available payment methods. Payment is processed filler word fi
            automatically after each ride.
          </Text>
          <Text style={{...GlobalStyles.txtM15, marginTop: normalize(15)}}>
            How do I contact my driver?
          </Text>
          <Text style={GlobalStyles.txtR11}>
            You can pay using your linked credit/debit card or other filler w
            available payment methods. Payment is processed filler word fi
            automatically after each ride.
          </Text>
          <Text style={{...GlobalStyles.txtM15, marginTop: normalize(15)}}>
            Can I schedule a ride for later?
          </Text>
          <Text style={GlobalStyles.txtR11}>
            You can pay using your linked credit/debit card or other filler w
            available payment methods. Payment is processed filler word fi
            automatically after each ride.
          </Text>
          <Text style={{...GlobalStyles.txtM15, marginTop: normalize(15)}}>
            What do I do if my driver cancels the ride?
          </Text>
          <Text style={GlobalStyles.txtR11}>
            You can pay using your linked credit/debit card or other filler w
            available payment methods. Payment is processed filler word fi
            automatically after each ride.
          </Text>
        </View>
      )}
      {tab == 1 && (
        <View style={{paddingHorizontal: normalize(15)}}>
          <FlatList
            data={List}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
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
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  tab: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(42),
  },
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  icon22: {
    height: normalize(22),
    width: normalize(22),
    resizeMode: 'contain',
    tintColor: COLORS.Primary,
    marginRight: normalize(8),
  },
});
