import { faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { StyleProp, Text, TextStyle, View } from 'react-native';
import globalStyles from '../../theme/globalStyles';
import styles from './style';

interface OptionProp {
  icon: IconDefinition;
  name: string;
  style?: StyleProp<TextStyle>;
}
const Option = (props: OptionProp) => {
  return (
    <View style={[globalStyles.row, styles.option, globalStyles.spaceBetween, props.style]}>
      <View style={globalStyles.row}>
        <FontAwesomeIcon color="rgba(65, 87, 255, 0.7)" icon={props.icon} />
        <Text style={styles.optionText}>{props.name}</Text>
      </View>
      <FontAwesomeIcon icon={faAngleRight} />
    </View>
  );
};

export default Option