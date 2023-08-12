import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const EmergencyComponent = ({E_contact, navigation, isCity}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() =>
        navigation.navigate('EmergencyDetailsScreen', {content: E_contact})
      }>
      <Text style={styles.text}>{E_contact.officename}</Text>
      <Text style={styles.smallText}>{E_contact.officeno}</Text>
      <Text style={styles.subTitle}>Emergency Contacts</Text>
    </TouchableOpacity>
  );
};

export default EmergencyComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.lightGray,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    paddingBottom: 5,
  },
  subTitle: {
    fontSize: 12,
    color: colors.white,
    paddingVertical: 3,
  },
  smallText: {
    fontSize: 15,
    color: colors.white,
  },
});
