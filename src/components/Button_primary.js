import {StyleSheet, TouchableOpacity, Linking, Image} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const Button_primary = ({title, number, _DO}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(`${_DO}:${number}`);
      }}
      style={styles.button}>
      {_DO === 'tel' ? (
        <Image
          style={styles.icon}
          source={require('../assets/Images/phone-outgoing.png')}
        />
      ) : (
        <Image
          style={styles.icon}
          source={require('../assets/Images/mail-plus.png')}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button_primary;

const styles = StyleSheet.create({
  button: {
    margin: 5,
    backgroundColor: colors.topBarBackground,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    height: 25,
    width: 25,
    tintColor: 'white',
  },
});
