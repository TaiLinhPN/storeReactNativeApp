import { faDropbox } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './style';
const Profile = () => {
    return (
      <View style={styles.app}>
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
          <View style={styles.option}>
            <FontAwesomeIcon icon={faDropbox} />
            <Text style={styles.optionText}>Private Account</Text>
          </View>

          <View style={styles.option}>
            <FontAwesomeIcon icon={faDropbox} />
            <Text style={styles.optionText}>Private Account</Text>
          </View>

          <View style={styles.option}>
            <FontAwesomeIcon icon={faDropbox} />
            <Text style={styles.optionText}>Private Account</Text>
          </View>

          <View style={styles.option}>
            <FontAwesomeIcon icon={faDropbox} />
            <Text style={styles.optionText}>Private Account</Text>
          </View>

          <View style={styles.option}>
            <FontAwesomeIcon icon={faDropbox} />
            <Text style={styles.optionText}>Private Account</Text>
          </View>
        </View>
      </View>
    );
}

export default Profile;