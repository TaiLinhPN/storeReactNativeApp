import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

const FW = {
  normal: 'normal',
  bold: 'bold',
  '100': 'light',
  '200': 'light',
  '300': 'light',
  '400': 'normal',
  '500': 'normal',
  '600': 'semi-bold',
  '700': 'bold',
  '800': 'extra-bold',
  '900': 'extra-bold',
};

const disableStyles: StyleProp<TextStyle> = {
  fontStyle: 'normal',
  fontWeight: 'normal',
};

type TextProps = Text['props'];

export const CustomText = (props: TextProps) => {
  const {fontWeight = '400', fontStyle} = StyleSheet.flatten(props.style || {});

  // con di ạ, mày phải sửa tên font trong assets/fonts thành <ten font>_<fw>_<font style>.<font ext>
  const fontFamily = `overpass_${FW[fontWeight]}${
    fontStyle === 'italic' ? '_italic' : ''
  }`;

  return <Text {...props} style={[props.style, {fontFamily}, disableStyles]} />;
};
