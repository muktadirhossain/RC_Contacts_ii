import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const SingleOfficeComponents = ({category, navigation}) => {
 

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.mainContainer}
      onPress={() => navigation.navigate('OfficeScreen', {content: category})}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{category.dept_name}</Text>
        </View>
        <View>
          <Image
            source={require('../assets/Images/rightArrow1.5px.png')}
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleOfficeComponents;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
  },
  contentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: '90%',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textBreakStrategy: 'highQuality ',
    fontWeight: '600',
  },
  icon: {
    height: 35,
    width: 30,
    tintColor: colors.white,

  },
});
