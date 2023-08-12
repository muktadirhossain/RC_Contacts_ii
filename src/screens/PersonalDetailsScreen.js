import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddToContactButton from '../components/AddToContactButton';
import Button_primary from '../components/Button_primary';
import TextSplitter from '../utilities/TextSplitter';
import AddtoFavoriteBtn from '../components/AddtoFavoriteBtn';

const PersonalDetailsScreen = ({navigation, route}) => {
  const person = route.params.content;
  const [favorite, setFavorite] = useState([]);

  // Add to favorite list
  const addToFav = async () => {
    try {
      const value = await AsyncStorage.getItem('favorites');
      if (value !== null) {
        const LocalData = await JSON.parse(value);
        setFavorite([...LocalData, person]);
        await clearAll('favorites');
      } else {
        let arr = [];
        arr.push(person);
        storeData(arr, 'favorites');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Store Data to LDB Function
  const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  // Clear Data From Local Storage
  clearAll = async key => {
    try {
      await AsyncStorage.removeItem(key);
      await storeData(favorite, key);
    } catch (e) {
      console.log(e);
    }
  };
  const allMail = person.email.split(',');
  const singleMail = allMail[0];
  const allPhoneNum = person.mobile_no.split(',');
  const singlePhoneNumber = allPhoneNum[0];

  useEffect(() => {
    navigation.setOptions({title: `${person.fullNameNew}`});
  }, []);

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../assets/Images/rcLogo8.png')}
      style={styles.container}>
      <View>
        {/* Image Area */}
        {person.image == 'null' ? (
          <View>
            <Image
              style={styles.profilePhotoDefault}
              source={require('../assets/Images/user.png')}
            />
          </View>
        ) : (
          <Image
            style={styles.profilePhoto}
            source={{
              uri: person.image,
            }}
          />
        )}
      </View>
      {/* Image Area Ends*/}
      <View>
        <Text style={styles.nameText}>{person.fullNameNew.toUpperCase()}</Text>
      </View>

      
      {/* Button Container */}
      <View style={styles.button_container}>
        <Button_primary
          _DO={'tel'}
          number={singlePhoneNumber}
          title={'Call Now'}
        />
        <AddtoFavoriteBtn contact={person} addToFav={addToFav} />
        <AddToContactButton number={person.mobile_no} />
        <Button_primary
          _DO={'sms'}
          number={singlePhoneNumber}
          title={'Message'}
        />
      </View>
      {/* Button Container Ends */}


      {/* Description Container Starts */}
      <ScrollView style={{width: '90%'}}>
        <Text style={styles.descText}>
          <Text style={{fontWeight: '700'}}>Designation : </Text>
          {person.Designation.toUpperCase()}
        </Text>
        <Text style={styles.descText}>
          <Text style={{fontWeight: '700'}}>Mobile No : </Text>
          <TextSplitter array={person.mobile_no.split(',')} />
        </Text>
        <Text style={styles.descText}>
          <Text style={{fontWeight: '700'}}>Email Address : </Text>
          {person.email}
        </Text>
        <Text style={styles.descText}>
          <Text style={{fontWeight: '700'}}>Office : </Text>
          {person.dept_name === 'অধ্যক্ষ অফিস'
            ? 'রাজশাহী কলেজ'
            : person.dept_name}
          {/* teacher.dept_name === 'অধ্যক্ষ অফিস'
          ? 'রাজশাহী কলেজ'
          : teacher.dept_name */}
        </Text>
        <Text style={styles.descText}>
          <Text style={{fontWeight: '700'}}>Office Address : </Text>
          {person.office_address}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  profilePhoto: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    padding: 50,
    borderRadius: 100,
    borderWidth: 3.5,
    borderColor: colors.onFocusColor,
  },
  profilePhotoDefault: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    padding: 50,
    borderRadius: 100,
    borderWidth: 3.5,
    borderColor: colors.onFocusColor,
    tintColor: colors.topBarBackground,
  },
  nameText: {
    color: colors.topBarBackground,
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 20,
    textAlign: 'center',
  },
  descText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 5,
    borderBottomColor: colors.light_Grey,
    borderBottomWidth: 1,
    paddingHorizontal: 2,
  },
  button_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 30,
  },
});
