import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import colors from '../assets/Colors';

const AddToContactButton = ({number}) => {
  const contactData = {
    givenName: 'John',
    familyName: '',
    phoneNumbers: [
      {
        label: 'mobile',
        number: number,
      },
    ],
  };

  const handlePress = () => {
    getPermission();
    Contacts.openContactForm(contactData);
  };

  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'To save contact directly to your contacts accept permission',

      buttonPositive: 'Accept',
    }).then(res => {
      if (res == 'granted') {
        console.log('MY Console : contacts permission granted');
      } else {
        console.log(res);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../assets/Images/contact.png')}
      />
    </TouchableOpacity>
  );
};

export default AddToContactButton;

const styles = StyleSheet.create({
  button: {
    margin: 5,
    backgroundColor: colors.topBarBackground,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
