import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import normalize from '../utils/normalize';
import {COLORS, FONTS} from '../utils/Theme';

const OTPInput = ({code, setCode, maximumLength, setIsPinReady, style}) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const boxDigit = (_, index) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View
        key={index}
        style={{
          borderRadius: normalize(8),
          height: normalize(48),
          width: normalize(42),
          borderWidth: normalize(1),
          borderColor:
            isInputBoxFocused && isValueFocused
              ? COLORS.Black
              : digit
              ? COLORS.White
              : '#DDD9D9',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            isInputBoxFocused && isValueFocused
              ? COLORS.White
              : digit
              ? COLORS.White
              : '#DDD9D9',
        }}>
        <Text
          style={{
            color: COLORS.Black,
            fontSize: normalize(20),
            fontFamily: FONTS.Regular,
            top: normalize(2),
          }}>
          {digit}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Pressable
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          width: '100%',
        }}
        onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        keyboardType="numeric"
        ref={inputRef}
        onBlur={handleOnBlur}
        style={{
          opacity: 1,
          position: 'absolute',
          backgroundColor: 'transparent',
          height: 0,
          width: 0,
        }}
      />
    </View>
  );
};

export default OTPInput;
