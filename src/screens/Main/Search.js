import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import normalize from '../../utils/normalize';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import {goBack} from '../../utils/RootNavigation';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: normalize(15),
        backgroundColor: COLORS.Background,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: normalize(12),
          justifyContent: 'space-between',
          marginBottom: normalize(8),
        }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={ICONS.backArrow}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              tintColor: COLORS.TextBlack,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#DDD9D9',
            borderColor: '#82807F',
            borderWidth: normalize(1),
            borderRadius: normalize(8),
            width: '85%',
          }}>
          <TextInput
            placeholder="Search"
            style={{width: '80%', paddingHorizontal: normalize(5)}}
          />
          <Image
            source={ICONS.cross}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
              marginRight: normalize(5),
            }}
          />
          <Image
            source={ICONS.mic}
            style={{
              height: normalize(20),
              width: normalize(20),
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>

      <FlatList
        data={Array(10)}
        showsVerticalScrollIndicator={false}
        renderItem={() => {
          return (
            <TouchableOpacity
              style={{flexDirection: 'row', marginBottom: normalize(15)}}>
              <Image
                source={IMAGES.Demo4}
                style={{
                  height: normalize(45),
                  width: normalize(45),
                  resizeMode: 'contain',
                  marginRight: normalize(15),
                }}
              />
              <View>
                <Text style={GlobalStyles.txtR13}>Arsalan</Text>
                <Text style={{...GlobalStyles.txtR11, color: '#5B5857'}}>
                  Restaurant
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
