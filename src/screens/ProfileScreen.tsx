import {faDropbox, faSquareDribbble, faSquarespace} from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../components/Profile/style';
import globalStyles from '../theme/globalStyles';
const ProfileScreen = () => {
  return (
    <View style={globalStyles.app}>
      <View style={styles.user}>
        <View style={styles.imgUserContainer}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgUser}></Image>
        </View>
        <View>
          <Text style={styles.userName}>Hi, Tai Linh</Text>
          <Text style={styles.welcomeText}>Welcome to Medtech</Text>
        </View>
      </View>
      <View style={styles.listOption}>
        <View
          style={[globalStyles.row, styles.option, globalStyles.spaceBetween]}>
          <View style={globalStyles.row}>
            <FontAwesomeIcon
              icon={faSquarespace}
            />
            <Text style={styles.optionText}>Private Account</Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
