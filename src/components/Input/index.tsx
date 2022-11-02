import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './style';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface InputProps extends TextInputProps {
  icon?: IconDefinition;
  label: string;
  error?: string
}

const Input = (props: InputProps) => {
  return (
    <View style={{marginBottom: 20}}>
      <View style={{flexDirection: 'row', alignItems: "center"}}>
        {props.icon && <FontAwesomeIcon icon={props.icon} style={{marginEnd: 10}}/>}
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <TextInput style={styles.textInput} {...props} />
      {props.error && <Text style={{marginTop: 10, color: "red"}}>{props.error}</Text>}
    </View>
  );
};

export default Input;
