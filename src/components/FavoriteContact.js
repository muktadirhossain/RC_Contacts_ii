import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const StaffComponents = ({teacher, navigation, deleteHandler}) => {
  return (
    <TouchableOpacity
      key={teacher.id}
      style={styles.container}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() =>
        navigation.navigate('PersonalDetailsScreen', {content: teacher})
      }>
      <View style={styles.box}>
        <Text style={styles.nameFieldText}>{teacher.fullNameNew}</Text>
        <Text style={styles.designation_text}>{teacher.Designation}</Text>
        <Text style={styles.dept_name_text}>{teacher.dept_name}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteHandler(teacher)}>
        {/* <Text style={styles.crossIcon}>X</Text> */}
        <Image
          style={styles.crossIcon}
          source={require('../assets/Images/x2.png')}
        />
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameFieldText: {
    fontSize: 20,
    color: colors.white,
    paddingBottom: 1,
    fontWeight: 'medium',
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
  crossIcon: {
    tintColor: colors.onFocusColor,
    paddingRight: 15,
    height: 40,
    width: 40,
  },
});
