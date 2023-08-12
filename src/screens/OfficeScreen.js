// ====== Note :======
// Office Screen Is Used as a Router
// ====== Note :======

import {
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/Colors';
import FacultyScreen from './FacultyScreen';
import OfficeAllDataComponent from '../components/OfficeAllDataComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Faculty_OfficeScreen from './Faculty_OfficeScreen';
import DepartmentsScreen from './DepartmentsScreen';

const OfficeScreen = ({navigation, route}) => {
  const {office_code, dept_name, unit_name} = route.params.content;

  // Declaring States
  const [staffsInfo, setStaffsInfo] = useState([]);
  const [teachersInfo, setTeachersInfo] = useState([]);
  const [officersInfo, setOfficersInfo] = useState([]);
  const [adminsInfo, setAdminsInfo] = useState([]);

  useEffect(() => {
    navigation.setOptions({title: `${dept_name}`});
    getDataFromLocalStorage('allProfiles');
    getDataFromLocalStorage('additionalDuty');
  }, [dept_name]); //[dept_name]

  const getDataFromLocalStorage = async key => {
    try {
      // get data with a specific key

      if (key === 'allProfiles') {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          // value previously stored
          const storedData = await JSON.parse(value);
          let filteredData = storedData.filter(
            curr_u_name => curr_u_name.dept_code == office_code,
          );
          //================>>***>>==================>>
          //  set teachers data:
          let teacherData = filteredData.filter(staff => staff.role == '1');
          // Sort data By Dept. serial Index:( deptSI)
          const sortedTeacherData = teacherData.sort((a, b) =>
            parseInt(a.deptSI) > parseInt(b.deptSI) ? 1 : -1,
          );
          setTeachersInfo(sortedTeacherData);
          //================>>***>>==================>>
          //  set Officers data:
          let officersData = filteredData.filter(staff => staff.role == '2');
          // Sort data By Dept. serial Index:( deptSI)
          const sortedOfficersData = officersData.sort((a, b) =>
            parseInt(a.deptSI) > parseInt(b.deptSI) ? 1 : -1,
          );
          setOfficersInfo(sortedOfficersData);
          //================>>***>>==================>>
          //  set Stuffs data:
          let stuffsData = filteredData.filter(staff => staff.role == '3');
          // Sort data By Dept. serial Index:( deptSI)
          const sortedStaffsData = stuffsData.sort((a, b) =>
            parseInt(a.deptSI) > parseInt(b.deptSI) ? 1 : -1,
          );
          setStaffsInfo(sortedStaffsData);

        } else {
          console.log('No data');
        }
      } else if (key === 'additionalDuty') {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          const storedData = await JSON.parse(value);
          let filteredData = storedData.filter(
            person => person.dept_name == dept_name,
          );
          setAdminsInfo(filteredData);
        } else {
          console.log('No data');
        }
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      {(() => {
        switch (unit_name) {
          // if Emergency_Route
          case 'Rajshahi_City':
            return (
              <FacultyScreen
                navigation={navigation}
                facultyName={dept_name}
                data={route.params.content}
              />
            );

          // if Emergency_Route
          case 'Emergency_Contact':
            return (
              <OfficeAllDataComponent
                teachersInfo={teachersInfo}
                staffsInfo={staffsInfo}
                officersInfo={officersInfo}
                navigation={navigation}
              />
            );

          // IF Faculty
          case 'FACULTY':
            return (
              <DepartmentsScreen
                navigation={navigation}
                dept_name={dept_name}
              />
            );
          // return (
          //   <FacultyScreen
          //     navigation={navigation}
          //     facultyName={dept_name}
          //     data={route.params.content}
          //   />
          // );

          // Default Case
          default:
            return teachersInfo || staffsInfo || officersInfo ? (
              <OfficeAllDataComponent
                adminsInfo={adminsInfo}
                teachersInfo={teachersInfo}
                officersInfo={officersInfo}
                staffsInfo={staffsInfo}
                navigation={navigation}
              />
            ) : (
              <ActivityIndicator size="large" color={colors.topBarBackground} />
            );
        }
      })()}
    </ScrollView>
  );
};

export default OfficeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    minHeight: Dimensions.get('window').height,
  },
  titleText: {
    color: colors.white,
    fontSize: 20,
    paddingVertical: 5,
    textAlign: 'center',
    backgroundColor: colors.topBarBackground,
    margin: 5,
    borderBottomColor: 10,
  },
});
