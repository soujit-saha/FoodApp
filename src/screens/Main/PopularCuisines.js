import {
  FlatList,
  Image,
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

const PopularCuisines = () => {
  const [select, setSelect] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.Background,
        paddingHorizontal: normalize(15),
      }}>
      <Header
        name={'Popular Cuisines'}
        RightIcon={ICONS.bag}
        RightIconh={normalize(24)}
        RightIconw={normalize(24)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            ...GlobalStyles.faj,
            marginTop: normalize(16),
            backgroundColor: '#DDD9D9',
            borderRadius: normalize(8),
            height: normalize(42),
            paddingHorizontal: normalize(15),
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

          <Image
            source={ICONS.mic}
            style={{...styles.icon20, tintColor: COLORS.Black}}
          />
        </View>

        <View style={{marginVertical: normalize(15)}}>
          <FlatList
            data={['West Bengal', 'Taste of India', 'International Flavors']}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelect(index)}
                  style={{
                    borderWidth: normalize(1),
                    borderRadius: normalize(100),
                    borderColor:
                      select == index ? COLORS.Primary : COLORS.Inactive,
                    paddingHorizontal: normalize(15),
                    paddingVertical: normalize(7),
                    marginRight: normalize(8),
                    backgroundColor:
                      select == index ? COLORS.LightOrangeOne : null,
                  }}>
                  <Text
                    style={{
                      ...GlobalStyles.txtR11,
                      color:
                        select == index ? COLORS.Primary : COLORS.TextBlack,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={GlobalStyles.txtB14}>West Bengal</Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
          Taste of India
        </Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
          International Flavors
        </Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
          Healthy Eats
        </Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
          Street Food Fiesta
        </Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
          Sweet Tooth Haven
        </Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <Text style={{...GlobalStyles.txtB14, marginTop: normalize(15)}}>
          Quick Bites
        </Text>

        <View style={{width: '100%'}}>
          <FlatList
            data={Array(8)}
            numColumns={4}
            key={'#'}
            contentContainerStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    marginTop: normalize(15),
                  }}>
                  <Image
                    source={IMAGES.Demo10}
                    style={{height: normalize(60), width: normalize(60)}}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(7),
                    }}>
                    Kolkata Biryani
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PopularCuisines;

const styles = StyleSheet.create({
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
});
