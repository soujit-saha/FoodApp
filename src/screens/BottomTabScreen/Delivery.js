import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, ICONS, IMAGES} from '../../utils/Theme';
import normalize from '../../utils/normalize';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import CustomButton from '../../components/CustomButton';
import {navigate} from '../../utils/RootNavigation';

const Delivery = () => {
  const data = [
    {id: '1', img: IMAGES.Demo29},
    {id: '2', img: IMAGES.Demo29},
    {id: '3', img: IMAGES.Demo29},
  ];
  const popular = [
    {name: 'Biryani', img: IMAGES.Biryani},
    {name: 'Paneer', img: IMAGES.Paneer},
    {name: 'Vegetarian', img: IMAGES.Vegetarian},
    {name: 'Idli', img: IMAGES.idli},
    {name: 'Momos', img: IMAGES.Momos},
    {name: 'Chicken', img: IMAGES.Chicken},
    {name: 'Fast food', img: IMAGES.Burger},
    {name: 'Seafood', img: IMAGES.Seafood},
  ];

  const dataone = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
    {id: 5, name: 'Item 5'},
    {id: 6, name: 'Item 6'},
    {id: 7, name: 'Item 7'},
    {id: 8, name: 'Item 8'},
    {id: 9, name: 'Item 9'},
    {id: 10, name: 'Item 10'},
  ];

  const numcolumns = 2; // Number of items per column
  const columns = 4; // Number of items per column

  const renderColumn = ({item}) => (
    <View style={styles.column}>
      {item.map(dataItem => (
        <View
          key={dataItem.id}
          style={{
            ...GlobalStyles.fa,
            paddingRight: normalize(15),
            marginRight: normalize(15),
            marginTop: normalize(15),
          }}>
          <Image
            source={IMAGES.Demo22}
            style={{
              height: normalize(60),
              width: normalize(60),
              resizeMode: 'contain',
              marginRight: normalize(8),
            }}
          />
          <View>
            <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
              Veg salad dish name
            </Text>
            <View style={GlobalStyles.fa}>
              <Image
                source={ICONS.Mappin}
                style={{
                  height: normalize(12),
                  width: normalize(12),
                  resizeMode: 'contain',
                  tintColor: COLORS.Black,
                  marginRight: normalize(2),
                }}
              />
              <Text style={{...GlobalStyles.txtR11}}>
                Restaurant/hotel name
              </Text>
            </View>

            <View style={GlobalStyles.faj}>
              <Text style={{...GlobalStyles.txtR13, color: '#5B5857'}}>
                ₹199 <Text style={{color: COLORS.Black}}> ₹125</Text>
              </Text>
              <View style={GlobalStyles.fa}>
                <Image source={ICONS.clock} style={styles.icon12} />
                <Text style={{...GlobalStyles.txtR11}}>30 min</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: COLORS.LightOrange,
                paddingVertical: normalize(3),
                borderRadius: normalize(24),
                width: normalize(70),
                alignItems: 'center',
              }}>
              <Text style={{...GlobalStyles.txtR10, color: '#B2460B'}}>
                Free Delivery
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderNumColumn = ({item}) => (
    <View style={styles.column}>
      {item.map(dataItem => (
        <TouchableOpacity
          key={dataItem.id}
          style={{
            // marginRight: normalize(15)
            marginTop: normalize(15),
            alignItems: 'center',
          }}>
          <Image
            source={dataItem.img}
            style={{
              height: normalize(75),
              width: normalize(75),
              resizeMode: 'contain',
            }}
          />
          <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
            {dataItem.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  // Divide data into arrays of 'columns' items each
  const columnData = [];
  for (let i = 0; i < dataone.length; i += columns) {
    columnData.push(dataone.slice(i, i + columns));
  }

  const numcolumnData = [];
  for (let i = 0; i < popular.length; i += numcolumns) {
    numcolumnData.push(popular.slice(i, i + numcolumns));
  }
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
          height: normalize(120),
          width: normalize(240),
          borderRadius: normalize(8),
          marginRight: normalize(8),
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
        <View
          style={{
            ...GlobalStyles.faj,
            backgroundColor: COLORS.LightOrange,
            width: '100%',
            borderBottomRightRadius: normalize(15),
            borderBottomLeftRadius: normalize(15),
            padding: normalize(15),
          }}>
          <View>
            <View style={GlobalStyles.fa}>
              <Image
                source={ICONS.marker}
                style={{...styles.icon16, tintColor: COLORS.Primary}}
              />
              <Text style={GlobalStyles.txtM11}>Home</Text>
            </View>
            <View style={GlobalStyles.fa}>
              <Text style={GlobalStyles.txtR11}>Jadavpur, Kokata. 700 075</Text>
              <Image source={ICONS.dropdown} style={styles.icon16} />
            </View>
          </View>
          <View style={GlobalStyles.fa}>
            <TouchableOpacity>
              <Image source={ICONS.notification} style={styles.icon24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={ICONS.cart} style={styles.icon24} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            ...GlobalStyles.faj,
            marginTop: normalize(16),
            marginHorizontal: normalize(15),
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
            padding: normalize(15),
            backgroundColor: COLORS.White,
            borderRadius: normalize(8),
            marginHorizontal: normalize(15),
            marginVertical: normalize(18),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={GlobalStyles.fa}>
            <View
              style={{
                backgroundColor: COLORS.LightOrangeOne,
                height: normalize(40),
                width: normalize(40),
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: normalize(10),
              }}>
              <Image source={ICONS.calendar} style={styles.icon20} />
            </View>
            <View>
              <Text style={GlobalStyles.txtM13}>WOW! MOMO</Text>
              <Text style={GlobalStyles.txtR11}>Booking Confirmed</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.Primary,
              borderRadius: 100,
              padding: normalize(1),
            }}>
            <Image
              source={ICONS.cross}
              style={{...styles.icon16, tintColor: COLORS.White}}
            />
          </TouchableOpacity>
        </View>

        <Text style={{...GlobalStyles.txtB14, marginHorizontal: normalize(15)}}>
          For you
        </Text>
        <View style={{margin: normalize(15)}}>
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
        </View>

        <View style={{...GlobalStyles.faj, marginHorizontal: normalize(15)}}>
          <Text style={{...GlobalStyles.txtB14}}>Popular Cuisines</Text>
          <Text
            style={{...GlobalStyles.txtR11}}
            onPress={() => navigate('PopularCuisines')}>
            View All
          </Text>
        </View>

        <View style={styles.container}>
          <FlatList
            data={numcolumnData}
            renderItem={renderNumColumn}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Popular Restaurant
        </Text>
        <View
          style={{
            marginTop: normalize(15),
            marginLeft: normalize(15),
          }}>
          <FlatList
            data={Array(6)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    marginRight: normalize(10),
                  }}>
                  <Image
                    source={IMAGES.Demo4}
                    style={{
                      height: normalize(70),
                      width: normalize(70),
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      ...GlobalStyles.txtM11,
                      color: COLORS.Black,
                      marginTop: normalize(10),
                    }}>
                    Karavalli Cafe
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Vegetarian Special
        </Text>
        <View
          style={{
            marginTop: normalize(15),
            marginLeft: normalize(15),
          }}>
          <FlatList
            data={Array(6)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: normalize(10),
                    backgroundColor: COLORS.White,
                    borderRadius: normalize(8),
                    width: normalize(135),
                    overflow: 'hidden',
                  }}>
                  <View>
                    <Image
                      source={IMAGES.Demo4}
                      style={{
                        height: normalize(100),
                        width: normalize(135),
                      }}
                    />
                    <Image
                      source={ICONS.veg}
                      style={{
                        height: normalize(16),
                        width: normalize(16),
                        position: 'absolute',
                        right: 0,
                      }}
                    />
                  </View>
                  <View style={{margin: normalize(7)}}>
                    <Text
                      style={{
                        ...GlobalStyles.txtM11,
                        color: COLORS.Black,
                      }}>
                      Veg salad dish name
                    </Text>
                    <View style={GlobalStyles.fa}>
                      <Image
                        source={ICONS.Mappin}
                        style={{
                          height: normalize(12),
                          width: normalize(12),
                          resizeMode: 'contain',
                          tintColor: COLORS.Black,
                          marginRight: normalize(2),
                        }}
                      />
                      <Text style={{...GlobalStyles.txtR11}}>
                        Restaurant/hotel name
                      </Text>
                    </View>
                    <Text style={{...GlobalStyles.txtR13}}>₹125</Text>
                    <TouchableOpacity
                      style={{
                        ...GlobalStyles.fa,
                        borderWidth: normalize(1),
                        borderColor: COLORS.Primary,
                        borderRadius: normalize(8),
                        paddingVertical: normalize(8),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: normalize(7),
                      }}>
                      <Text
                        style={{...GlobalStyles.txtM13, color: COLORS.Primary}}>
                        Add
                      </Text>
                      <Image
                        source={ICONS.add}
                        style={{
                          height: normalize(20),
                          width: normalize(20),
                          resizeMode: 'contain',
                          marginLeft: normalize(3),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Non-Vegetarian Special
        </Text>
        <View
          style={{
            marginTop: normalize(15),
            marginLeft: normalize(15),
          }}>
          <FlatList
            data={Array(6)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: normalize(10),
                    backgroundColor: COLORS.White,
                    borderRadius: normalize(8),
                    width: normalize(135),
                    overflow: 'hidden',
                  }}>
                  <View>
                    <Image
                      source={IMAGES.Demo4}
                      style={{
                        height: normalize(100),
                        width: normalize(135),
                      }}
                    />
                    <Image
                      source={ICONS.nonveg}
                      style={{
                        height: normalize(16),
                        width: normalize(16),
                        position: 'absolute',
                        right: 0,
                      }}
                    />
                  </View>
                  <View style={{margin: normalize(7)}}>
                    <Text
                      style={{
                        ...GlobalStyles.txtM11,
                        color: COLORS.Black,
                      }}>
                      Veg salad dish name
                    </Text>
                    <View style={GlobalStyles.fa}>
                      <Image
                        source={ICONS.Mappin}
                        style={{
                          height: normalize(12),
                          width: normalize(12),
                          resizeMode: 'contain',
                          tintColor: COLORS.Black,
                          marginRight: normalize(2),
                        }}
                      />
                      <Text style={{...GlobalStyles.txtR11}}>
                        Restaurant/hotel name
                      </Text>
                    </View>
                    <Text style={{...GlobalStyles.txtR13}}>₹125</Text>
                    <TouchableOpacity
                      style={{
                        ...GlobalStyles.fa,
                        borderWidth: normalize(1),
                        borderColor: COLORS.Primary,
                        borderRadius: normalize(8),
                        paddingVertical: normalize(8),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: normalize(7),
                      }}>
                      <Text
                        style={{...GlobalStyles.txtM13, color: COLORS.Primary}}>
                        Add
                      </Text>
                      <Image
                        source={ICONS.add}
                        style={{
                          height: normalize(20),
                          width: normalize(20),
                          resizeMode: 'contain',
                          marginLeft: normalize(3),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Dishes Under 500
        </Text>
        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo25}
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Dishes Under 200
        </Text>

        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo25}
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Newly added
        </Text>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Popular fast food
        </Text>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Pizza Mania
        </Text>
        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo5}
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Burgers
        </Text>
        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo6}
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Desserts
        </Text>
        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo33}
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Ice-Creams
        </Text>
        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
          <FlatList
            data={Array(4)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => {
              return (
                <View
                  style={{width: normalize(120), marginRight: normalize(15)}}>
                  <ImageBackground
                    source={IMAGES.Demo28}
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

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Popular fast food
        </Text>

        <View style={styles.container}>
          <FlatList
            data={columnData}
            renderItem={renderColumn}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Newly added
        </Text>
        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
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
                    style={{
                      height: normalize(120),
                      width: normalize(120),
                      overflow: 'hidden',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: COLORS.Primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: normalize(50),
                        marginLeft: normalize(-11),
                        transform: [{rotate: '-30deg'}],
                      }}>
                      <Text
                        style={{...GlobalStyles.txtR11, color: COLORS.White}}>
                        New
                      </Text>
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
                      <Image source={ICONS.star} style={styles.icon12New} />
                      <Text style={{...GlobalStyles.txtR11}}>4.5</Text>
                    </View>
                    <Text style={GlobalStyles.txtB14}> ₹ 125</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <Text
          style={{
            ...GlobalStyles.txtB14,
            marginHorizontal: normalize(15),
            marginTop: normalize(18),
          }}>
          Desserts
        </Text>

        <View style={{marginLeft: normalize(15), marginTop: normalize(15)}}>
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

        <View
          style={{
            padding: normalize(15),
            backgroundColor: COLORS.White,
            borderRadius: normalize(8),
            marginHorizontal: normalize(15),
            marginTop: normalize(40),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={GlobalStyles.fa}>
            <View
              style={{
                backgroundColor: COLORS.LightOrangeOne,
                height: normalize(40),
                width: normalize(40),
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: normalize(6),
              }}>
              <Image source={ICONS.fastfood} style={styles.icon20} />
            </View>
            <View>
              <Text style={{...GlobalStyles.txtM11, color: COLORS.Black}}>
                Arsalan
              </Text>
              <Text style={GlobalStyles.txtR11}>View full order</Text>
            </View>
          </View>

          <View style={GlobalStyles.fa}>
            <View
              style={{
                backgroundColor: COLORS.Primary,
                marginRight: normalize(5),
                paddingHorizontal: normalize(16),
                paddingVertical: normalize(5),
                borderRadius: normalize(8),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...GlobalStyles.txtR11, color: COLORS.White}}>
                2 items | ₹928
              </Text>
              <Text style={{...GlobalStyles.txtM13, color: COLORS.White}}>
                Checkout
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.Primary,
                borderRadius: 100,
                padding: normalize(1),
              }}>
              <Image
                source={ICONS.cross}
                style={{...styles.icon16, tintColor: COLORS.White}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{margin: normalize(15)}}>
          <CustomButton
            title={'Order now'}
            onPress={() => console.log('23456')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(15),
  },
  item: {
    width: normalize(250),
  },

  dotIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(4),
    width: '100%',
    marginTop: normalize(15),
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
  icon24: {
    height: normalize(24),
    width: normalize(24),
    resizeMode: 'contain',
    marginHorizontal: normalize(5),
  },
  icon16: {
    height: normalize(16),
    width: normalize(16),
    resizeMode: 'contain',
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
  icon12New: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    marginRight: normalize(2),
    tintColor: '#FFB60D',
  },

  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: 'bule',
  },
  itemone: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    marginVertical: 8,
    // width: 100, // Adjust width as needed
  },
});
