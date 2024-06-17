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
        {/* <FlatList
          data={item.videos}
          horizontal
          renderItem={({item, index}) => {
            return ( */}
        <Video
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
        />
        {/* );
          }}
        /> */}

        <View style={styles.faj}>
          <TouchableOpacity
            style={styles.headIcon}
            onPress={() => setModalVis(!modalVis)}>
            <Image source={ICONS.filter} style={styles.icon18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerLoc}>
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
          <TouchableOpacity style={styles.headIcon}>
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
        {/* <View style={{backgroundColor: COLORS.White}}> */}
        <View
          style={{
            width: '90%',
            backgroundColor: COLORS.White,
            borderTopRightRadius: normalize(5),
            borderTopLeftRadius: normalize(5),
            padding: normalize(15),
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Filters</Text>
            <TouchableOpacity onPress={() => setModalVis(false)}>
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

          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Text onPress={() => setCount(0)}>Sort</Text>
              <Text onPress={() => setCount(1)}>Mode</Text>
              <Text onPress={() => setCount(2)}>Veg/Non-Veg</Text>
            </View>
            <View
              style={{
                width: '70%',
                borderLeftWidth: normalize(1),
                borderColor: COLORS.black,
              }}>
              {count == 0 ? (
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Relevance</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Delivery Time</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Rating</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Cost :Low to High</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Cost :High to Low</Text>
                  </View>
                </View>
              ) : count == 1 ? (
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Veg</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Non-Veg</Text>
                  </View>
                </View>
              ) : (
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Dine in</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.radioCon}>
                      <View style={styles.radioDot} />
                    </View>
                    <Text>Home Delivery</Text>
                  </View>
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
            }}>
            <Text>Cancel</Text>
            <TouchableOpacity>
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
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
});
