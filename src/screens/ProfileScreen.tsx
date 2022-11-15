import { faSquarespace} from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faClock, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight, faGear, faStethoscope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Option from '../components/Profile/Option';
import styles from '../components/Profile/style';
import globalStyles from '../theme/globalStyles';

interface Option {
  icon: IconDefinition,
  name: string,
  onPress?: () => void
}
const listOption: Option[] = [
  {icon: faSquarespace, name: 'Private Account'},
  {icon: faStethoscope, name: 'My Consults'},
  {icon: faFileLines, name: 'My orders'},
  {icon: faClock, name: 'Billing'},
  {icon: faCircleQuestion, name: 'Faq'},
  {icon: faGear, name: 'Settings'},
];
const ProfileScreen = () => {


  return (
    <View style={globalStyles.app}>
      <Text style={styles.headText}>My Profile</Text>
      <View style={styles.user}>
        <View style={styles.imgUserContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/564x/f1/f8/d5/f1f8d56063fd6d833539d36a05652c82.jpg',
            }}
            style={styles.imgUser}></Image>
        </View>
        <View>
          <Text style={styles.userName}>Hi, Tai Linh</Text>
          <Text style={styles.welcomeText}>Welcome to Medtech</Text>
        </View>
      </View>
      <View style={styles.listOption}>
        {listOption.map((option, index) => {
          return (
            <Option
              key={index}
              icon={option.icon}
              name={option.name}
              style={{borderTopWidth: index === 0 ? 0 : 1}}
            />
          );



          
        })}
      </View>
    </View>
  );
};

export default ProfileScreen;
