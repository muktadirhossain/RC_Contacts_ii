import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import OfficeAllDataComponent from '../components/OfficeAllDataComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Faculty_OfficeScreen = ({navigation, route}) => {
  const {office_code, dept_name} = route.params.content;
  // console.log(office_code, dept_name)

  // declaring State for Staff,Teacher & Officers:
  const [staffsInfo, setStaffsInfo] = useState([]);
  const [teachersInfo, setTeachersInfo] = useState([]);
  const [officersInfo, setOfficersInfo] = useState([]);
  const [adminsInfo, setAdminsInfo] = useState([]);

  useEffect(() => {
    navigation.setOptions({title: `${dept_name}`});
    showData('allProfiles');
    showData('additionalDuty');

  }, []);

  const showData = async key => {
    try {
      // get data with a specific key
      if (key === 'allProfiles') {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          // value previously stored
          const storedData = await JSON.parse(value);
          let filteredData = storedData.filter(
            curr_u_name => curr_u_name.dept_name == dept_name,
          );
          //  set teachers data:
          let teacherData = filteredData.filter(staff => staff.role == '1');
          setTeachersInfo(teacherData);

          //  set Officers data:
          let officersData = filteredData.filter(staff => staff.role == '2');
          setOfficersInfo(officersData);
          //  set Stuffs data:
          let stuffsData = filteredData.filter(staff => staff.role == '3');
          setStaffsInfo(stuffsData);
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
    <ScrollView>
      <OfficeAllDataComponent
        teachersInfo={teachersInfo}
        staffsInfo={staffsInfo}
        officersInfo={officersInfo}
        adminsInfo={adminsInfo}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Faculty_OfficeScreen;
