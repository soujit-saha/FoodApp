import {ToastAndroid} from 'react-native';

export default function showAlert(message, isLong = false) {
  ToastAndroid.show(
    message,
    isLong == true ? ToastAndroid.LONG : ToastAndroid.SHORT,
    50,
  );
}
