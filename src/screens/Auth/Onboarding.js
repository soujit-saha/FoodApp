import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import normalize from '../../utils/normalize';
import {COLORS, FONTS, IMAGES} from '../../utils/Theme';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {navigate} from '../../utils/RootNavigation';

const {width} = Dimensions.get('window');

const Onboarding = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for onboarding screens
  const onboardingData = [
    {id: '1', txt: 'Discover', img: IMAGES.Onboardingone},
    {id: '2', txt: 'Feel', img: IMAGES.Onboardingtwo},
    {id: '3', txt: 'Top Brands', img: IMAGES.Onboardingthree},
    {id: '4', txt: '10000+ Restaurants', img: IMAGES.Onboardingfour},
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const newIndex = (currentIndex + 1) % onboardingData.length;
        flatListRef.current.scrollToIndex({animated: true, index: newIndex});
        setCurrentIndex(newIndex);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manual scroll functions
  const scrollToNext = () => {
    if (flatListRef.current) {
      const newIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({animated: true, index: newIndex});
      setCurrentIndex(newIndex);
    }
  };

  const scrollToPrev = () => {
    if (flatListRef.current) {
      const newIndex = currentIndex - 1;
      flatListRef.current.scrollToIndex({animated: true, index: newIndex});
      setCurrentIndex(newIndex);
    }
  };

  // Render item function for FlatList
  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Text style={{...GlobalStyles.txtB18, marginVertical: normalize(20)}}>
        {item.txt}
      </Text>
      <Image
        source={item.img}
        style={{
          height: normalize(400),
          width: normalize(200),
          resizeMode: 'contain',
        }}
      />
    </View>
  );

  // Render indicator function
  const renderIndicator = ({index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.indicator,
          {
            backgroundColor:
              index === currentIndex
                ? COLORS.Primary
                : 'rgba(250, 98, 15, 0.2)',
          },
        ]}
        onPress={() => {
          flatListRef.current.scrollToIndex({animated: true, index});
          setCurrentIndex(index);
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.Background}}>
      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {onboardingData.map((item, index) => renderIndicator({index}))}
      </View>
      {/* FlatList for onboarding screens */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / width);
          setCurrentIndex(index);
        }}
      />
      <View
        style={{
          ...GlobalStyles.faj,
          margin: normalize(15),
        }}>
        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={{
            width: '48%',
            justifyContent: 'center',
            alignItems: 'center',
            height: normalize(40),
            borderRadius: normalize(8),
            borderWidth: normalize(1),
            borderColor: COLORS.Primary,
          }}>
          <Text style={{...GlobalStyles.txtM13}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={{
            backgroundColor: COLORS.Primary,
            width: '48%',
            justifyContent: 'center',
            alignItems: 'center',
            height: normalize(40),
            borderRadius: normalize(8),
          }}>
          <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      {/* Manual navigation buttons */}
      {/* <View style={styles.buttonContainer}>
        <Button
          title="Prev"
          disabled={currentIndex === 0}
          onPress={scrollToPrev}
        />
        <Button
          title="Next"
          disabled={currentIndex === onboardingData.length - 1}
          onPress={scrollToNext}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(15),
  },
  indicator: {
    width: '22%',
    height: normalize(4),
    borderRadius: 99,
    marginHorizontal: normalize(2),
  },
});

export default Onboarding;
