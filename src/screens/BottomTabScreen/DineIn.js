import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {navigate} from '../../utils/RootNavigation';

const DineIn = () => {
  const [tab, setTab] = useState(0);
  return (
    <SafeAreaView>
      <View
        style={{
          ...GlobalStyles.faj,
          margin: normalize(15),
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
            Today
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
            Tomorrow
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
            Weekend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(3)}
          style={{
            ...styles.tab,
            borderBottomWidth: normalize(3),
            borderBottomColor: tab == 3 ? COLORS.Primary : COLORS.Background,
          }}>
          <Text
            style={{
              ...GlobalStyles.txtM13,
              color: tab == 3 ? COLORS.Black : COLORS.Inactive,
            }}>
            All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: normalize(15)}}>
        <FlatList
          ListHeaderComponent={
            <View style={{...GlobalStyles.faj, marginVertical: normalize(16)}}>
              <Text style={GlobalStyles.txtB14}>25 Results in your area</Text>
              <TouchableOpacity
                style={{
                  ...GlobalStyles.fa,
                  borderWidth: normalize(1),
                  borderRadius: normalize(8),
                  borderColor: COLORS.Primary,
                  paddingVertical: normalize(7),
                  paddingHorizontal: normalize(15),
                }}>
                <Text style={GlobalStyles.txtM13}>Sort</Text>
                <Image source={ICONS.sort} style={styles.icon16} />
              </TouchableOpacity>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={Array(6)}
          renderItem={() => {
            return (
              <ImageBackground
                source={IMAGES.Demo17}
                style={{
                  width: '100%',
                  height: normalize(360),
                  marginBottom: normalize(16),
                  justifyContent: 'space-between',
                }}
                imageStyle={{
                  borderRadius: normalize(15),
                }}>
                <TouchableOpacity>
                  <Image
                    source={ICONS.fillheart}
                    style={{
                      ...styles.icon25,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigate('FoodItem')}
                  style={{
                    backgroundColor: COLORS.White,
                    margin: normalize(8),
                    borderRadius: normalize(8),
                    padding: normalize(7),
                  }}>
                  <View style={GlobalStyles.faj}>
                    <Text style={GlobalStyles.txtM13}>
                      ITC Royal Bengal- Grand Market
                    </Text>
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
                      <Text
                        style={{...GlobalStyles.txtR11, color: COLORS.Primary}}>
                        4.5
                      </Text>
                    </View>
                  </View>

                  <View style={{...GlobalStyles.faj, marginTop: normalize(3)}}>
                    <Text style={GlobalStyles.txtR11}>
                      ITC Royal Bengal, Science City Area, Kolkata
                    </Text>
                    <Text
                      style={{...GlobalStyles.txtM11, color: COLORS.TextBlack}}>
                      3.0 km
                    </Text>
                  </View>
                  <View style={{...GlobalStyles.faj, marginTop: normalize(3)}}>
                    <Text
                      numberOfLines={1}
                      style={{...GlobalStyles.txtR11, width: '70%'}}>
                      North Indian, Chinese, Continental, Bengali
                    </Text>
                    <Text
                      style={{...GlobalStyles.txtM11, color: COLORS.TextBlack}}>
                      ₹600 for two
                    </Text>
                  </View>
                  <View style={{...GlobalStyles.fa, marginTop: normalize(4)}}>
                    <View style={styles.desCon}>
                      <Text style={{...GlobalStyles.txtR10, color: '#B2460B'}}>
                        Table booking
                      </Text>
                    </View>
                    <View style={styles.desCon}>
                      <Text style={{...GlobalStyles.txtR10, color: '#B2460B'}}>
                        Home Delivery
                      </Text>
                    </View>
                    <View style={styles.desCon}>
                      <Text style={{...GlobalStyles.txtR10, color: '#B2460B'}}>
                        Non Veg
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            );
          }}
          ListFooterComponent={<View style={{height: normalize(250)}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default DineIn;

const styles = StyleSheet.create({
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  icon25: {
    height: normalize(25),
    width: normalize(25),
    resizeMode: 'contain',
    margin: normalize(8),
    alignSelf: 'flex-end',
  },
  tab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(42),
  },
  icon16: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
    marginLeft: normalize(4),
  },
  smallcon: {
    backgroundColor: COLORS.LightOrangeOne,
    padding: normalize(4),
    borderRadius: normalize(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(8),
    marginRight: normalize(4),
  },
  desCon: {
    backgroundColor: COLORS.LightOrange,
    paddingVertical: normalize(3),
    paddingHorizontal: normalize(7),
    borderRadius: normalize(20),
    marginRight: normalize(4),
  },
});
