import React from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

interface MyButtonProps extends PressableProps {
  title: string;
}
const MyButton = (props: MyButtonProps) => {
  return (
    <View>
      <LinearGradient
        style={styles.button}
        colors={['rgb(74, 225, 213)', 'rgb(4, 176, 162)']}>
        <Pressable onPress={props.onPress}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default MyButton;
