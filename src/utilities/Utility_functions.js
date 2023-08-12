import AsyncStorage from '@react-native-async-storage/async-storage';

const sortArray = (array, key) =>
  array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });

//  sort array of objects alphabetically

  function sortArrayOfObjects(array, key) {
    return array.sort((a, b) => {
      const x = a[key].toLowerCase();
      const y = b[key].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  // Get data from Local Storage
  // const showDataFromLocalStorage = async (key,dept_name) => {
  //   try {
  //     // get data with a specific key

  //     if (key === 'allProfiles') {
  //       const value = await AsyncStorage.getItem(key);
  //       if (value !== null) {
  //         // value previously stored
  //         const storedData = await JSON.parse(value);
  //         let filteredData = storedData.filter(
  //           curr_u_name => curr_u_name.dept_name == dept_name,
  //         );
  //         //  set teachers data:
  //         let teacherData = filteredData.filter(staff => staff.role == '1');
  //         setTeachersInfo(teacherData);

  //         //  set Officers data:
  //         let officersData = filteredData.filter(staff => staff.role == '2');
  //         setOfficersInfo(officersData);
  //         //  set Stuffs data:
  //         let stuffsData = filteredData.filter(staff => staff.role == '3');
  //         setStaffsInfo(stuffsData);
  //       } else {
  //         console.log('No data');
  //       }
  //     } else if (key === 'additionalDuty') {
  //       const value = await AsyncStorage.getItem(key);
  //       if (value !== null) {
  //         const storedData = await JSON.parse(value);
  //         let filteredData = storedData.filter(
  //           person => person.dept_name == dept_name,
  //         );
  //         setAdminsInfo(filteredData);
  //       } else {
  //         console.log('No data');
  //       }
  //     }
  //   } catch (e) {
  //     // error reading value
  //     console.log(e);
  //   }
  // };


export  {sortArray,sortArrayOfObjects};