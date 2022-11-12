import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const Voting = () => {
  return (
    <View style={{width: '100%'}}>
      <View style={[styles.row]}>
        <Text>5</Text>
        <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
        <View style={styles.voteChart}>
          <View style={[styles.fillVote, {width: '67%'}]}></View>
        </View>
        <Text>76%</Text>
      </View>

      <View style={[styles.row, styles.flexStart]}>
        <Text>4</Text>
        <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
        <View style={styles.voteChart}>
          <View style={[styles.fillVote, {width: '20%'}]}></View>
        </View>
        <Text>20%</Text>
      </View>

      <View style={[styles.row, styles.flexStart]}>
        <Text>3</Text>
        <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
        <View style={styles.voteChart}>
          <View style={[styles.fillVote, {width: '7%'}]}></View>
        </View>
        <Text>7%</Text>
      </View>

      <View style={[styles.row, styles.flexStart]}>
        <Text>2</Text>
        <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
        <View style={styles.voteChart}>
          <View style={[styles.fillVote, {width: '0%'}]}></View>
        </View>
        <Text>0%</Text>
      </View>

      <View style={[styles.row, styles.flexStart]}>
        <Text>1</Text>
        <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
        <View style={styles.voteChart}>
          <View style={[styles.fillVote, {width: '10%'}]}></View>
        </View>
        <Text>10%</Text>
      </View>
    </View>
  );
};

export default Voting