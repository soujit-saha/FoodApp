import {LogBox, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNav from './src/navigators/StackNav';
import {COLORS} from './src/utils/Theme';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.Black}
        animated
        barStyle={'light-content'}
      />
      <StackNav />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
