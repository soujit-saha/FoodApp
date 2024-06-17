import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, ICONS, IMAGES} from '../utils/Theme';
import normalize from '../utils/normalize';
import {goBack, navigate} from '../utils/RootNavigation';
import BorderButton from '../components/BorderButton';

const RestuarantProfile = () => {
  const data = [
    {id: '1', img: IMAGES.DemoOne},
    {id: '2', img: IMAGES.DemoThree},
    {id: '3', img: IMAGES.DemoOne},
    {id: '4', img: IMAGES.DemoThree},
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
    <View style={{flex: 1, backgroundColor: COLORS.Background}}>
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
                source={ICONS.bookmark}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{paddingHorizontal: normalize(15), marginTop: normalize(30)}}>
          <Text
            style={{
              fontSize: normalize(18),
              color: COLORS.TextBlack,
              fontWeight: '700',
            }}>
            WOW! MOMO
          </Text>
          <Text style={styles.txtR12}>
            Hotel address text Lorem Ipsum{' '}
            <Text style={styles.txtB14}>(2.5 Km)</Text>
          </Text>
          <View
            style={{
              backgroundColor: COLORS.LightOrange,
              borderRadius: normalize(8),
              paddingVertical: normalize(2),
              width: normalize(110),
              alignItems: 'center',
              marginTop: normalize(5),
            }}>
            <Text style={styles.txtR12}>Open till 10:00 PM</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: normalize(12),
            }}>
            <Image
              source={ICONS.star}
              style={{
                height: normalize(14),
                width: normalize(14),
                resizeMode: 'contain',
                marginRight: normalize(4),
              }}
            />
            <Text style={{...styles.txtM12, color: COLORS.Primary}}>4.5</Text>
            <Text style={styles.txtM12}> ┃ 300+ reviews ┃ </Text>
            <Text style={styles.txtM12}>₹400 for two</Text>
          </View>

          <Text style={{...styles.txtB14, marginTop: normalize(3)}}>
            Pre-book Offers
          </Text>
          <ImageBackground
            source={ICONS.coupon}
            resizeMode="contain"
            style={{
              width: '100%',
              height: normalize(70),
              justifyContent: 'center',
              marginTop: normalize(7),
            }}>
            <Text style={{...styles.txtB14, marginLeft: '18%'}}>15% OFF</Text>
            <Text style={{...styles.txtR12, marginLeft: '18%'}}>
              Get up to 15% off on your total bill payment
            </Text>
          </ImageBackground>

          <Text style={{...styles.txtB14, marginTop: normalize(15)}}>
            Walk-in Offers
          </Text>
          <ImageBackground
            source={ICONS.coupontwo}
            resizeMode="contain"
            imageStyle={{borderRadius: normalize(7)}}
            style={{
              width: '100%',
              height: normalize(70),
              justifyContent: 'center',
              marginTop: normalize(7),
            }}>
            <Text style={{...styles.txtB14, marginLeft: '18%'}}>10% OFF</Text>
            <Text style={{...styles.txtR12, marginLeft: '18%'}}>
              Get Additional 15% off on your total bill.
            </Text>
          </ImageBackground>

          <Text style={{...styles.txtB14, marginTop: normalize(15)}}>Menu</Text>
          <Image
            source={IMAGES.DemoTwo}
            style={{
              height: normalize(250),
              width: '100%',
              resizeMode: 'contain',
            }}
          />

          <Text
            style={{
              ...styles.txtB14,
              marginTop: normalize(5),
              marginBottom: normalize(8),
            }}>
            Popular Dishes
          </Text>
          <Text style={styles.txtR12}>
            Lorem ipsum dish name, lorem ipsuin dish name, Lorem ipsum dish
            name, lorem ipsuin dish name
          </Text>

          <Text
            style={{
              ...styles.txtB14,
              marginTop: normalize(15),
              marginBottom: normalize(8),
            }}>
            Location and timings
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={ICONS.marker} style={styles.markerIcon} />
            <View style={{width: '90%'}}>
              <Text
                style={{
                  ...styles.txtR12,
                }}>
                Lorem ipsum Retuarant location address text, Lorem ipsum
                Retuarant location address text
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: normalize(1),
                  borderColor: COLORS.Primary,
                  borderRadius: normalize(7),
                  width: normalize(120),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: normalize(7),
                  marginTop: normalize(7),
                }}>
                <Text
                  style={{
                    ...styles.txtM12,
                    color: COLORS.Primary,
                    marginRight: normalize(4),
                  }}>
                  View on map
                </Text>
                <Image
                  source={ICONS.uparrow}
                  style={{...styles.markerIcon, marginRight: 0}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: normalize(15)}}>
            <Image source={ICONS.clock} style={styles.markerIcon} />
            <View style={{width: '90%'}}>
              <Text
                style={{
                  ...styles.txtR12,
                }}>
                Open Till 10:00 PM
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.White,
              borderRadius: normalize(7),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: normalize(15),
              paddingVertical: normalize(7),
              marginTop: normalize(15),
            }}>
            <View style={styles.fa}>
              <Image
                source={ICONS.bike}
                style={{...styles.markerIcon, marginRight: normalize(8)}}
              />
              <View>
                <Text style={styles.txtB14}>Looking for food delivery?</Text>
                <Text style={styles.txtR12}>View food delivery menu</Text>
              </View>
            </View>

            <Image
              source={ICONS.rightArrow}
              style={{...styles.markerIcon, marginRight: 0}}
            />
          </TouchableOpacity>

          <Text
            style={{
              ...styles.txtB14,
              marginTop: normalize(15),
              marginBottom: normalize(8),
            }}>
            Similar Restaurants
          </Text>
          <View>
            <FlatList
              data={Array(3)}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={() => {
                return (
                  <View
                    style={{width: normalize(240), marginRight: normalize(15)}}>
                    <ImageBackground
                      source={IMAGES.DemoOne}
                      imageStyle={{
                        borderRadius: normalize(15),
                      }}
                      style={{
                        height: normalize(240),
                        width: normalize(240),
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: COLORS.Primary,
                          height: normalize(26),
                          width: normalize(26),
                          borderRadius: normalize(7),
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'flex-end',
                          margin: normalize(10),
                        }}>
                        <Image
                          source={ICONS.bookmark}
                          style={{
                            height: normalize(14),
                            width: normalize(14),
                            resizeMode: 'contain',
                          }}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: normalize(15),
                      }}>
                      <Text
                        style={{
                          ...styles.txtB14,
                          width: '70%',
                        }}>
                        Restarant name lorem ipsum text goes here
                      </Text>

                      <View
                        style={{
                          backgroundColor: COLORS.LightOrangeOne,
                          borderRadius: normalize(8),
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingHorizontal: normalize(5),
                        }}>
                        <Image
                          source={ICONS.star}
                          style={{
                            height: normalize(14),
                            width: normalize(14),
                            resizeMode: 'contain',
                            marginRight: normalize(4),
                          }}
                        />
                        <Text style={{...styles.txtM12, color: COLORS.Primary}}>
                          4.5
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: normalize(7),
                      }}>
                      <Text style={styles.txtR12}>
                        Hotel address text Lorem Ipsum
                      </Text>
                      <Text style={styles.txtM12}>3 Km</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: normalize(7),
                      }}>
                      <Text style={styles.txtR12}>
                        Lorem ipsum special dish name
                      </Text>
                      <Text style={styles.txtM12}>₹400 for two</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={{height: normalize(100)}} />
      </ScrollView>

      <View style={styles.btmCon}>
        <BorderButton
          title={'Book a table'}
          onPress={() => navigate('BookTable')}
        />
      </View>
    </View>
  );
};

export default RestuarantProfile;

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
    backgroundColor: COLORS.Inactive,
    marginHorizontal: normalize(4),
  },
  activeDotIndicator: {
    backgroundColor: COLORS.White,
  },
  txtB14: {
    fontSize: normalize(14),
    color: COLORS.TextBlack,
    fontWeight: '700',
  },
  txtR12: {
    fontSize: normalize(12),
    color: COLORS.TextBlack,
    fontWeight: '400',
  },
  txtM12: {
    fontSize: normalize(12),
    color: COLORS.TextBlack,
    fontWeight: '500',
  },
  markerIcon: {
    height: normalize(18),
    width: normalize(18),
    resizeMode: 'contain',
    tintColor: COLORS.Primary,
    marginRight: normalize(6),
  },
  fa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faj: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  btmCon: {
    position: 'absolute',
    width: '100%',
    height: normalize(90),
    borderTopRightRadius: normalize(15),
    borderTopLeftRadius: normalize(15),
    backgroundColor: COLORS.White,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
  },
});
