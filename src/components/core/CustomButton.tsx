import React from 'react';
import react from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';

interface CustomButtonProps extends PressableProps {
  title: string;
  textStyle: StyleProp<TextStyle> | undefined;
  pressStyle: StyleProp<TextStyle> | undefined;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Pressable style={props.pressStyle} onPress={props.onPress}>
      <Text style={props.textStyle}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomButton;
