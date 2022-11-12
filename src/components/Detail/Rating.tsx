import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import Reviews from './Reviews';
import styles, { windowWidth } from './style';
import Voting from './Voting';

const Rating = () => {
  return (
    <View style={styles.rating}>
      <Text style={styles.detailHeaderText}>Rating and Reviews</Text>
      <View
        style={[{justifyContent: 'space-evenly', width: '100%'}, styles.row]}>
        <View style={(styles.col, styles.colRating)}>
          <View style={styles.row}>
            <Text style={styles.RatingNumber}>4.4</Text>
            <FontAwesomeIcon icon={faStar} size={20} style={styles.voteStar} />
          </View>
          <Text>923 Ratings and 257 Reviews</Text>
        </View>
        <View
          style={[styles.separationLine, {height: '100%', width: 1}]}></View>
        <View>
          <Voting />
        </View>
      </View>
      <Reviews />
    </View>
  );
};

export default Rating;
