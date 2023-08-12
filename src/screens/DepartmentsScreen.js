import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SingleOfficeComponents from '../components/SingleOfficeComponents';
import colors from '../assets/Colors';
import {sortArrayOfObjects} from '../utilities/Utility_functions';

const DepartmentsScreen = ({navigation, route, dept_name}) => {
  // const facultyName = route.params.content;
  let facultyName;
  route ? (facultyName = route.params.content) : (facultyName= dept_name)
   

  const [data, setData] = React.useState([]);
  useEffect(() => {
    navigation.setOptions({title: `${facultyName}`});
    showData('office');
  }, []);

  const showData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        const storedData = JSON.parse(value);
        let filteredData = storedData.filter(
          item => item.faculty_name === facultyName,
        );
        // sort data Alphabetically
        const result = sortArrayOfObjects(filteredData, 'dept_name');
        setData(result);
      } else {
        console.log('No data');
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(dept => {
          return (
            <SingleOfficeComponents
              key={dept.office_code}
              category={dept}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DepartmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
});
