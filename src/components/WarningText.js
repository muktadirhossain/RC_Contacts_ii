import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WarningText = ({warningText}) => {
  return (
    <View style={styles.warningBox}>
      <Text style={styles.warningText}>{warningText}</Text>
    </View>
  );
};

export default WarningText;

const styles = StyleSheet.create({
  warningText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
  },
  warningBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
