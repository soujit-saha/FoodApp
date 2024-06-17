import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const Onboarding = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for onboarding screens
  const onboardingData = [
    {id: '1', title: 'Welcome to App', description: 'This is screen 1'},
    {id: '2', title: 'Features', description: 'This is screen 2'},
    {id: '3', title: 'Get Started', description: 'This is screen 3'},
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
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  // Render indicator function
  const renderIndicator = ({index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.indicator,
          {backgroundColor: index === currentIndex ? '#007AFF' : '#C4C4C4'},
        ]}
        onPress={() => {
          flatListRef.current.scrollToIndex({animated: true, index});
          setCurrentIndex(index);
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
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

      {/* Manual navigation buttons */}
      <View style={styles.buttonContainer}>
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
      </View>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {onboardingData.map((item, index) => renderIndicator({index}))}
      </View>
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
    marginTop: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Onboarding;
