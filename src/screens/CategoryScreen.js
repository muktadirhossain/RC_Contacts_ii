/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../assets/Colors';
import SingleOfficeComponents from '../components/SingleOfficeComponents';
import {sortArrayOfObjects} from '../utilities/Utility_functions';
import EmergencyComponent from '../components/EmergencyComponent';
import WarningText from '../components/WarningText';

const CategoryScreen = ({navigation, route}) => {
  const {unit_name} = route.params.content;
  const [categoryName, setCategoryName] = useState([]);
  const [emergencyContact, setEmergencyContact] = useState([]);
  const [warningText, setWarningText] = useState(
    <ActivityIndicator color={colors.topBarBackground} size="large" />,
  );

  useEffect(() => {
    setTimeout(() => {
      return setWarningText('Please Connect to the Internet & Try Again...!');
    }, 1000);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: `${
        unit_name === 'ADMIN'
          ? 'প্রশাসন'
          : unit_name === 'DEPARTMENTS'
          ? 'বিভাগ সমূহ'
          : unit_name === 'FACULTY'
          ? 'অনুষদ'
          : unit_name === 'FACILITIES'
          ? 'স্থাপনা সমূহ'
          : unit_name === 'CLUBS'
          ? 'সংগঠন সমূহ'
          : unit_name === 'HOSTEL'
          ? 'হোস্টেল'
          : unit_name === 'Emergency_Contact'
          ? 'জরুরী সেবা'
          : unit_name === 'Rajshahi_City'
          ? 'রাজশাহী নগরী'
          : unit_name
      }`,
    });
    showDataAndFilter('office');
    unit_name === 'Emergency_Contact'
      ? getDataFromLDB('emergency_contacts')
      : getDataFromLDB('rajshahi_city');
  }, [unit_name]);
  const showDataAndFilter = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        const storedData = JSON.parse(value);
        let filteredData = storedData.filter(
          curr_u_name => curr_u_name.unit_name === unit_name,
        );
        // sort data Alphabetically
        const result = sortArrayOfObjects(filteredData, 'dept_name');
        setCategoryName(result);
      } else {
        console.log('No data');
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const getDataFromLDB = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const storedData = JSON.parse(value);
        setEmergencyContact(storedData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  switch (unit_name) {
    case 'Emergency_Contact':
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {emergencyContact.map(contact => {
            return (
              <EmergencyComponent
                key={contact.id}
                navigation={navigation}
                E_contact={contact}
                isCity={false}
              />
            );
          })}
          {emergencyContact.length < 1 ? (
            <WarningText warningText={warningText} />
          ) : null}
        </ScrollView>
      );
    case 'Rajshahi_City':
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {emergencyContact.map(contact => {
            return (
              <EmergencyComponent
                key={contact.id}
                navigation={navigation}
                E_contact={contact}
                isCity={true}
              />
            );
          })}
          {emergencyContact.length < 1 ? (
            <WarningText warningText={warningText} />
          ) : null}
        </ScrollView>
      );
    default:
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {console.log('cat')}
          {categoryName.map(category => (
            <SingleOfficeComponents
              key={category.office_code}
              category={category}
              navigation={navigation}
            />
          ))}
          {categoryName.length < 1 && <WarningText warningText={warningText} />}
        </ScrollView>
      );
  }
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    paddingVertical: 5,
    minHeight: Dimensions.get('window').height,
  },
});
