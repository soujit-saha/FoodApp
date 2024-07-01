import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import {goBack, navigate} from '../../utils/RootNavigation';

const FoodItem = () => {
  const [count, setCount] = useState(0);
  const data = [
    {id: '1', img: IMAGES.Demo21},
    {id: '2', img: IMAGES.Demo21},
    {id: '3', img: IMAGES.Demo21},
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        flatListRef.current.scrollToIndex({
          index: currentIndex + 1,
          animated: true,
        });
      } else {
        setCurrentIndex(0);
        flatListRef.current.scrollToIndex({index: 0, animated: true});
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        source={item.img}
        style={{
          height: normalize(300),
          width: '100%',
        }}
      />
    </View>
  );

  const renderDotIndicator = () => (
    <View style={styles.dotIndicatorContainer}>
      {data.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dotIndicator,
            index === currentIndex ? styles.activeDotIndicator : null,
          ]}
          onPress={() => {
            setCurrentIndex(index);
            flatListRef.current.scrollToIndex({index, animated: true});
          }}
        />
      ))}
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.Background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            ref={flatListRef}
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
          {renderDotIndicator()}
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: normalize(15),
              paddingVertical: normalize(10),
            }}>
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                source={ICONS.backArrow}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={ICONS.heart}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                }}
              />
            </TouchableOpacity>
          </View>

          <Image source={IMAGES.Frame1} style={styles.icon25} />
        </View>

        <View
          style={{
            ...GlobalStyles.faj,
            marginTop: normalize(30),
            marginHorizontal: normalize(15),
          }}>
          <Text style={{...GlobalStyles.txtB14, width: '90%'}}>
            Biryani product one, item lorem ipsum filler text
          </Text>
          <Image source={ICONS.shareIcon} style={styles.icon20} />
        </View>

        <View
          style={{
            ...GlobalStyles.faj,
            marginTop: normalize(10),
            marginHorizontal: normalize(15),
          }}>
          <View style={GlobalStyles.fa}>
            <Text style={{...GlobalStyles.txtB14, marginRight: normalize(10)}}>
              ₹ 125
            </Text>
            <Image source={ICONS.clock} style={styles.icon14} />
            <Text style={{...GlobalStyles.txtM13, color: COLORS.Inactive}}>
              30 min
            </Text>
          </View>
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(15),
            marginLeft: normalize(15),
          }}>
          Dish Details
        </Text>
        <Text
          style={{
            ...GlobalStyles.txtR11,
            marginTop: normalize(8),
            marginLeft: normalize(15),
          }}>
          Details description Lorem ipsum text goes here lorem ipsum text text
          goes here lorem ipsum text rem ipsu filler word text fillwe Details
          description Lorem ipsum text goes here lorem ipsum text text goes here
          lorem ipsum text rem ipsu filler word text fillwe
        </Text>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(15),
            marginLeft: normalize(15),
          }}>
          Dish Details
        </Text>

        <View
          style={{
            ...GlobalStyles.fa,
            marginHorizontal: normalize(15),
            marginTop: normalize(8),
          }}>
          <View style={{width: '50%'}}>
            <Text style={GlobalStyles.txtR11}>
              Calories{' '}
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                {' '}
                54 Kcal
              </Text>
            </Text>
            <Text style={GlobalStyles.txtR11}>
              Fats{' '}
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                {' '}
                5 Grams
              </Text>
            </Text>
            <Text style={GlobalStyles.txtR11}>
              Sugar{' '}
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                {' '}
                2 Grams
              </Text>
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text style={GlobalStyles.txtR11}>
              Carbs{' '}
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                {' '}
                16 Grams
              </Text>
            </Text>
            <Text style={GlobalStyles.txtR11}>
              Proteins{' '}
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                {' '}
                3 Grams
              </Text>
            </Text>
          </View>
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginTop: normalize(15),
            marginLeft: normalize(15),
          }}>
          Similar Products
        </Text>

        <View style={{marginLeft: normalize(15), marginTop: normalize(8)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo7}
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
                    Veg salad dish name Lorem ispum
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

        <View style={{height: normalize(150)}} />
      </ScrollView>

      <View style={styles.btmCon}>
        <View
          style={{
            ...GlobalStyles.faj,
            width: '100%',
            marginVertical: normalize(15),
          }}>
          <View>
            <Text style={GlobalStyles.txtB14}>₹225</Text>
            <Text style={{...GlobalStyles.txtR11, color: COLORS.Inactive}}>
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
                onPress={() => {
                  count == 0 ? null : setCount(count - 1);
                }}>
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
            <Text style={{...styles.txtM12, color: COLORS.Primary}}>
              {count}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCount(count + 1);
              }}>
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
        <CustomButton
          title={'Add to cart'}
          onPress={() => navigate('Checkout')}
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width,
  },

  dotIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(4),
    width: '100%',
    marginTop: normalize(-15),
  },
  dotIndicator: {
    width: normalize(11),
    height: normalize(11),
    borderRadius: 50,
    backgroundColor: COLORS.LightOrangeThree,
    marginHorizontal: normalize(4),
  },
  activeDotIndicator: {
    backgroundColor: COLORS.Primary,
  },
  icon25: {
    height: normalize(40),
    width: normalize(40),
    position: 'absolute',
    bottom: normalize(0),
    right: normalize(10),
  },
  icon20: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  icon12: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    tintColor: COLORS.Black,
    marginRight: normalize(2),
  },
  icon14: {
    height: normalize(14),
    width: normalize(14),
    resizeMode: 'contain',
    tintColor: COLORS.Inactive,
    marginRight: normalize(2),
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
  btmCon: {
    position: 'absolute',
    width: '100%',
    // height: normalize(90),
    borderTopRightRadius: normalize(15),
    borderTopLeftRadius: normalize(15),
    backgroundColor: COLORS.White,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    paddingBottom: normalize(15),
  },
});
