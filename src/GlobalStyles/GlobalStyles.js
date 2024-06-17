import {flingHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import {COLORS, FONTS} from '../utils/Theme';
import normalize from '../utils/normalize';

export const GlobalStyles = {
  txtB14: {
    fontSize: normalize(14),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Bold,
  },
  txtR13: {
    fontSize: normalize(13),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
  },
  txtR12: {
    fontSize: normalize(12),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
  },
  txtR11: {
    fontSize: normalize(11),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Regular,
  },
  txtM15: {
    fontSize: normalize(15),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Medium,
  },
  txtM13: {
    fontSize: normalize(13),
    color: COLORS.TextBlack,
    fontFamily: FONTS.Medium,
  },
  txtM11: {
    fontSize: normalize(11),
    color: COLORS.Primary,
    fontFamily: FONTS.Medium,
  },
  faj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
