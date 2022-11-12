import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";
import styles from "./style";

const Reviews = () => {
  return (
    <View>
      <View>
        <View
          style={[styles.separationLine, {height: 1, width: '100%'}]}></View>

        <View style={[styles.row, styles.spaceBetween]}>
          <Text style={styles.CusName}>Erric Hoffman</Text>
          <Text>05- oct 2020</Text>
        </View>
        <View style={styles.row}>
          <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
          <Text>4.2</Text>
        </View>
        <Text>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
          utnisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas
        </Text>
      </View>

      <View>
        <View
          style={[styles.separationLine, {height: 1, width: '100%'}]}></View>

        <View style={[styles.row, styles.spaceBetween]}>
          <Text style={styles.CusName}>Erric Hoffman</Text>
          <Text>05- oct 2020</Text>
        </View>
        <View style={styles.row}>
          <FontAwesomeIcon icon={faStar} style={styles.voteStar} />
          <Text>4.2</Text>
        </View>
        <Text>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
          utnisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas
        </Text>
      </View>
    </View>
  );
};
export default Reviews;