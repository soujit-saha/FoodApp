import {
  View,
  FlatList,
  Text,
  InteractionManager,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {videos} from '../../utils/variables';
import normalize from '../../utils/normalize';
import Video from 'react-native-video';
import {COLORS, ICONS} from '../../utils/Theme';
import {navigate} from '../../utils/RootNavigation';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import Modal from 'react-native-modal';

// const { height, width } = Dimensions.get('window');

const Feed = () => {
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState(0);
  const [mode, setMode] = useState(0);
  const [type, setType] = useState(0);
  const [modalVis, setModalVis] = useState(false);
  const data = [
    {
      name: 'Club Aeries',
      videos: [
        require('../../assets/videos/VideoOne.mp4'),
        require('../../assets/videos/VideoTwo.mp4'),
      ],
    },
    {
      name: 'Aeries',
      videos: [
        require('../../assets/videos/VideoTwo.mp4'),
        require('../../assets/videos/VideoOne.mp4'),
      ],
    },
  ];
  const videoRef = useRef(null);
  const onViewRef = useRef(({viewableItems, changed}) => {
    setViewableItemId(viewableItems[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const [viewableItemId, setViewableItemId] = useState(0);

  const onBuffer = e => {
    console.log('bbb', e);
  };

  const onError = e => {
    console.log('eee', e);
  };

  const Item = ({item}) => {
    const [show, setShow] = useState(false);
    return (
      <View style={styles.main}>
        {/* <Video
          source={item.videos[0]}
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          // poster=""
          // posterResizeMode="cover"
          resizeMode="cover"
          repeat
          paused={true}
          style={styles.backgroundVideo}
        /> */}

        <View style={styles.faj}>
          <TouchableOpacity
            style={styles.headIcon}
            onPress={() => setModalVis(!modalVis)}>
            <Image source={ICONS.filter} style={styles.icon18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerLoc}
            onPress={() => navigate('RestaurantDetails')}>
            <Image source={ICONS.demo} style={styles.shopIcon} />
            <Text
              style={{
                ...styles.txt12,
                marginHorizontal: normalize(5),
              }}>
              Club Aeries
            </Text>
            <Image source={ICONS.navigate} style={styles.navIcon} />
            <Text style={{...styles.txt12, marginLeft: normalize(5)}}>
              3.0 Km
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headIcon}
            onPress={() => navigate('Search')}>
            <Image source={ICONS.Search} style={styles.icon18} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: Dimensions.get('window').width,
            position: 'absolute',
            bottom: 0,
            paddingHorizontal: normalize(15),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={ICONS.dish}
                  style={{
                    ...styles.icon18,
                    marginRight: normalize(8),
                  }}
                />
                <Text style={styles.txt12}>North Indian • Chinese</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: normalize(8),
                }}>
                <Image
                  source={ICONS.bill}
                  style={{
                    ...styles.icon18,
                    marginRight: normalize(8),
                  }}
                />
                <Text style={styles.txt12}>₹1800 for two</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: normalize(8),
                }}>
                <Image
                  source={ICONS.marker}
                  style={{
                    ...styles.icon18,
                    marginRight: normalize(8),
                  }}
                />
                <Text style={styles.txt12}>Gariahat, Kolkata</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: normalize(5)}}>
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
                  <Text style={{...GlobalStyles.txtR11, color: COLORS.White}}>
                    4.5
                  </Text>
                </View>
                <View style={styles.smallcon}>
                  <Text style={{...GlobalStyles.txtR11, color: COLORS.White}}>
                    Non Veg
                  </Text>
                </View>
                <View style={styles.smallcon}>
                  <Text style={{...GlobalStyles.txtR11, color: COLORS.White}}>
                    Flat 30% off
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Image
                    source={show ? ICONS.Likeheart : ICONS.heart}
                    style={styles.icon18}
                  />
                </TouchableOpacity>
                <Text style={styles.txt12}>2K</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: normalize(8),
                }}>
                <Image source={ICONS.sms} style={styles.icon18} />
                <Text style={styles.txt12}>128</Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  marginTop: normalize(8),
                }}>
                <Image source={ICONS.share} style={styles.icon18} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigate('RestuarantProfile')}
            style={styles.btn}>
            <Text style={styles.txt12}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        // snapToInterval={normalize(730)}
        decelerationRate={'fast'}
        disableIntervalMomentum
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => <Item item={item} />}
        // renderItem={() => RenderItem()}
      />
      <Modal isVisible={modalVis} onBackdropPress={() => setModalVis(false)}>
        <View
          style={{
            width: '90%',
            backgroundColor: COLORS.White,
            borderTopRightRadius: normalize(5),
            borderTopLeftRadius: normalize(5),
            paddingHorizontal: normalize(15),
            paddingTop: normalize(10),
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: normalize(4.5),
              width: normalize(25),
              backgroundColor: 'rgba(127, 127, 127, 0.4)',
              borderRadius: normalize(8),
              alignSelf: 'center',
              marginBottom: normalize(5),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{...GlobalStyles.txtB14}}>Filters</Text>
            <TouchableOpacity
              onPress={() => setModalVis(false)}
              style={{
                backgroundColor: 'rgba(127, 127, 127, 0.2)',
                borderRadius: 100,
                padding: 1,
              }}>
              <Image
                source={ICONS.cross}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: normalize(16)}}>
            <View style={{width: '40%'}}>
              <Text
                onPress={() => setCount(0)}
                style={{
                  ...GlobalStyles.txtM14,
                  color: count == 0 ? COLORS.Primary : COLORS.TextBlack,
                }}>
                Sort
              </Text>
              <Text
                onPress={() => setCount(1)}
                style={{
                  ...GlobalStyles.txtM14,
                  marginTop: normalize(25),
                  color: count == 1 ? COLORS.Primary : COLORS.TextBlack,
                }}>
                Mode
              </Text>
              <Text
                onPress={() => setCount(2)}
                style={{
                  ...GlobalStyles.txtM14,
                  marginTop: normalize(25),
                  color: count == 2 ? COLORS.Primary : COLORS.TextBlack,
                }}>
                Veg/Non-Veg
              </Text>
            </View>
            <View
              style={{
                width: '60%',
                borderLeftWidth: normalize(1),
                borderColor: COLORS.Black,
                paddingLeft: normalize(10),
              }}>
              {count == 0 ? (
                <View>
                  <TouchableOpacity
                    onPress={() => setSort(0)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={styles.radioCon}>
                      {sort == 0 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Relevance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSort(1)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(25),
                    }}>
                    <View style={styles.radioCon}>
                      {sort == 1 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Delivery Time</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSort(2)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(25),
                    }}>
                    <View style={styles.radioCon}>
                      {sort == 2 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Rating</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSort(3)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(25),
                    }}>
                    <View style={styles.radioCon}>
                      {sort == 3 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Cost :Low to High</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSort(4)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(25),
                    }}>
                    <View style={styles.radioCon}>
                      {sort == 4 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Cost :High to Low</Text>
                  </TouchableOpacity>
                </View>
              ) : count == 1 ? (
                <View>
                  <TouchableOpacity
                    onPress={() => setMode(0)}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      {mode == 0 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Veg</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setMode(1)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(25),
                    }}>
                    <View style={styles.radioCon}>
                      {mode == 1 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Non-Veg</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => setType(0)}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      {type == 0 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Dine in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setType(1)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(25),
                    }}>
                    <View style={styles.radioCon}>
                      {type == 1 && <View style={styles.radioDot} />}
                    </View>
                    <Text style={GlobalStyles.txtM14}>Home Delivery</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              marginTop: normalize(50),
              marginBottom: normalize(18),
            }}>
            <Text
              onPress={() => setModalVis(false)}
              style={{...GlobalStyles.txtR13}}>
              Cancel
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.Primary,
                paddingVertical: normalize(8),
                paddingHorizontal: normalize(28),
                borderRadius: normalize(8),
                marginLeft: normalize(10),
              }}>
              <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('window').height - normalize(75),
    paddingHorizontal: normalize(16),
    paddingTop: normalize(12),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  headIcon: {
    height: normalize(36),
    width: normalize(36),
    borderRadius: 100,
    backgroundColor: 'rgba(255, 239, 231, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon18: {height: normalize(20), width: normalize(20), resizeMode: 'contain'},
  faj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLoc: {
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(6),
    borderRadius: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 239, 231, 0.25)',
  },
  shopIcon: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  txt12: {fontSize: normalize(12), color: COLORS.White, fontWeight: '500'},
  txt10: {fontSize: normalize(10), color: COLORS.White, fontWeight: '400'},
  navIcon: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  btn: {
    width: '100%',
    height: normalize(40),
    borderRadius: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Primary,
    marginVertical: normalize(10),
  },
  smallcon: {
    backgroundColor: COLORS.trnsparent,
    padding: normalize(4),
    borderRadius: normalize(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(8),
    marginRight: normalize(4),
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
});
