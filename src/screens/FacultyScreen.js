import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const FacultyScreen = ({navigation, facultyName, data}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          navigation.navigate('DepartmentsScreen', {content: facultyName})
        }>
        <Text style={styles.text}>Departments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          navigation.navigate('Faculty_OfficeScreen', {content: data})
        }>
        <Text style={styles.text}>Faculty Office</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FacultyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    flex: 1,
    padding: 10,
  },
  box: {
    backgroundColor: colors.lightGray,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    padding: 15,
  },
});
