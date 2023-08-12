import {StyleSheet, Text, View, Linking, Image} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';
import Button_primary from '../components/Button_primary';

const EmergencyDetailsScreen = ({route}) => {
  const contact = route.params.content;
  const myArray = contact.cell_no.split(',');
  const contact_No = myArray[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contact</Text>
      <View>
        <Image
          style={styles.Image}
          source={require('../assets/Images/tel(1).png')}
        />
      </View>
      <View style={styles.callDiv}>
        <View style={{flex: 3}}></View>
        <View>
          <Button_primary _DO={'tel'} number={contact_No} title={'Call Now'} />
        </View>

        <View>
          <Button_primary _DO={'sms'} number={contact_No} title={'Message'} />
        </View>
        <View style={{flex: 3}}></View>
      </View>
      <Text
        style={[
          {
            paddingBottom: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: colors.black,
          },
        ]}>
        {contact.officename}
      </Text>
      <Text style={styles.text}>
        <Text style={{fontWeight: '700'}}>Telephone :</Text> {contact_No}
      </Text>
      <Text style={styles.text}>
        <Text style={{fontWeight: '700'}}>Contact For :</Text>{' '}
        {contact.officeno}
      </Text>
    </View>
  );
};

export default EmergencyDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: colors.primaryBackground,
  },
  title: {
    color: colors.topBarBackground,
    fontSize: 23,
    textAlign: 'center',
    paddingBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 18,
    paddingBottom: 5,
    borderBottomColor: colors.light_Grey,
    borderBottomWidth: 1,
  },
  callDiv: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: colors.topBarBackground,
    width: 120,
    padding: 15,
    borderRadius: 20,
    borderBottomColor: colors.light_Grey,
    borderBottomWidth: 1,
  },
  Image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderColor: colors.onFocusColor,
    borderWidth: 3.5,
    borderRadius: 100,
    marginBottom: '10%',
  },
});
