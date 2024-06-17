import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, ICONS} from '../utils/Theme';
import normalize from '../utils/normalize';
import Feed from '../screens/BottomTabScreen/Feed';
import Profile from '../screens/BottomTabScreen/Profile';
import Delivery from '../screens/BottomTabScreen/Delivery';
import DineIn from '../screens/BottomTabScreen/DineIn';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: normalize(60),
          borderTopWidth: normalize(1),
          borderTopColor: '#F3EDF7',
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.food}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Primary : COLORS.Inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(10),
                  fontFamily: FONTS.Medium,
                  color: focused ? COLORS.Primary : COLORS.Inactive,
                  marginTop: normalize(6),
                }}>
                Feed
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.bike}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Primary : COLORS.Inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(10),
                  fontFamily: FONTS.Medium,
                  color: focused ? COLORS.Primary : COLORS.Inactive,
                  marginTop: normalize(6),
                }}>
                Delivery
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="DineIn"
        component={DineIn}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.dinein}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Primary : COLORS.Inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(10),
                  fontFamily: FONTS.Medium,
                  color: focused ? COLORS.Primary : COLORS.Inactive,
                  marginTop: normalize(6),
                }}>
                Dine in
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.profile}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Primary : COLORS.Inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(10),
                  fontFamily: FONTS.Medium,
                  color: focused ? COLORS.Primary : COLORS.Inactive,
                  marginTop: normalize(6),
                }}>
                Profile
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
