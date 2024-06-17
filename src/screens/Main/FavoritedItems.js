import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';

const FavoritedItems = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: normalize(15),
        backgroundColor: COLORS.Background,
      }}>
      <Header name={'Favorited Items'} />

      <FlatList
        data={Array(5)}
        showsVerticalScrollIndicator={false}
        renderItem={() => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: normalize(18),
                marginTop: normalize(4),
              }}>
              <ImageBackground
                source={IMAGES.Demo5}
                style={{
                  height: normalize(125),
                  width: normalize(125),
                  borderRadius: normalize(8),
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginRight: normalize(8),
                }}>
                <View
                  style={{
                    width: normalize(55),
                    borderRadius: normalize(8),
                    backgroundColor: COLORS.White,
                    paddingVertical: normalize(8),
                    alignItems: 'center',
                    marginBottom: normalize(-8),
                    elevation: 5,
                  }}>
                  <Image
                    source={ICONS.Likeheart}
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </ImageBackground>
              <View style={{width: '55%'}}>
                <Text style={GlobalStyles.txtM13}>
                  Chicken Cheese Steam Momo
                </Text>
                <Text style={GlobalStyles.txtM13}>
                  ₹249{'  '}
                  <Text
                    style={{
                      color: '#5B5857',
                      textDecorationLine: 'line-through',
                    }}>
                    ₹300
                  </Text>
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.LightOrangeOne,
                    padding: normalize(4),
                    borderRadius: normalize(8),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: normalize(38),
                  }}>
                  <Image
                    source={ICONS.star}
                    style={{
                      height: normalize(10),
                      width: normalize(10),
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={{...GlobalStyles.txtR11, color: COLORS.Primary}}>
                    4.5
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FavoritedItems;

const styles = StyleSheet.create({});
