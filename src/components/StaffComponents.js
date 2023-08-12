import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const StaffComponents = ({teacher, navigation}) => {
  return (
    <TouchableOpacity
      key={teacher.id}
      style={styles.container}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('PersonalDetailsScreen', {content: teacher})
      }>
      <Text style={styles.nameFieldText}>{teacher.fullNameNew}</Text>
      <Text style={styles.designation_text}>{teacher.Designation}</Text>
      <Text style={styles.dept_name_text}>
        {teacher.dept_name === 'অধ্যক্ষ অফিস'
          ? 'রাজশাহী কলেজ'
          : teacher.dept_name}
      </Text>
    </TouchableOpacity>
  );
};

export default StaffComponents;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.lightGray,
  },
  nameFieldText: {
    fontSize: 20,
    // color: colors.topBarBackground,
    color: colors.white,
    paddingBottom: 1,
  },
  designation_text: {
    fontSize: 15,
    color: colors.white,
    paddingVertical: 3,
  },
  dept_name_text: {
    fontSize: 14,
    color: colors.white,
  },
});
