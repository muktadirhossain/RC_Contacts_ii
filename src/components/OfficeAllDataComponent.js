import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/Colors';
import StaffComponents from './StaffComponents';

const OfficeAllDataComponent = ({
  navigation,
  teachersInfo,
  officersInfo,
  staffsInfo,
  adminsInfo,
}) => {
  const [warningText, setWarningText] = useState(
    <ActivityIndicator color={colors.topBarBackground} size="large" />,
  );
  useEffect(() => {
    setTimeout(() => {
      return setWarningText('No Data Found...!');
    }, 500);
  }, []);

  return (
    <View>
      {/* Admins Data */}
      {adminsInfo.length > 0 ? (
        <Text style={styles.titleText}> প্রশাসন </Text>
      ) : null}
      {adminsInfo
        ? adminsInfo.map(admin => (
            <View key={admin.salaryID}>
              <StaffComponents teacher={admin} navigation={navigation} />
            </View>
          ))
        : null}
      {/* Teachers Data */}
      {teachersInfo && teachersInfo.length > 0 ? (
        <Text style={styles.titleText}>
          {teachersInfo[0].dept_name === 'অধ্যক্ষ অফিস'
            ? 'প্রসাশন'
            : 'শিক্ষকবৃন্দ'}
        </Text>
      ) : null}

      {teachersInfo
        ? teachersInfo.map(teacher => (
            <View key={teacher.id}>
              <StaffComponents teacher={teacher} navigation={navigation} />
            </View>
          ))
        : null}
      {/* Officer Data  */}
      {officersInfo && officersInfo.length > 0 ? (
        <Text style={styles.titleText}>কর্মকর্তা</Text>
      ) : null}
      {officersInfo
        ? officersInfo.map(officer => (
            <View key={officer.id}>
              <StaffComponents teacher={officer} navigation={navigation} />
            </View>
          ))
        : null}
      {/* Stuffs data */}
      {staffsInfo && staffsInfo.length > 0 ? (
        <Text style={styles.titleText}>কর্মচারী</Text>
      ) : null}
      {staffsInfo
        ? staffsInfo.map(stuff => (
            <View key={stuff.id}>
              <StaffComponents teacher={stuff} navigation={navigation} />
            </View>
          ))
        : null}
      {adminsInfo.length < 1 &&
      staffsInfo.length < 1 &&
      officersInfo.length < 1 &&
      teachersInfo.length < 1 ? (
        <View>
          <Text style={styles.warningText}>{warningText}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default OfficeAllDataComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    minHeight: Dimensions.get('window').height,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 5,
    textAlign: 'center',
    backgroundColor: colors.topBarBackground,
    margin: 5,
    borderBottomColor: 10,
  },
  warningText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
    paddingTop: '50%',
  },
});
