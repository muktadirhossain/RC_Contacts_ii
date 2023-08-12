// The MainFavorite Page is used to display Favorite Screen
// The MainFavorite Page is used to display Favorite Screen
// The MainFavorite Page is used to display Favorite Screen

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopBar from '../../components/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteContact from '../../components/FavoriteContact';
import colors from '../../assets/Colors';

const MainFavorite = ({navigation}) => {
  const [favoriteContacts, setFavoritesContacts] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // When the Screen was focused
      getDataFromLDB('favorites');
    });

    return unsubscribe;
  }, [navigation]);
  // Favorite Contact delete Handler
  const deleteHandler = async contact => {
    console.log('deleteHandler pressed', contact);
    const filteredData = favoriteContacts.filter(item => {
      if (item !== contact) {
        return item;
      }
    });
    setFavoritesContacts(filteredData);
    savetoLDB('favorites', filteredData);
  };

  // Save New Favorite Contact to LDB:
  const savetoLDB = async (key, value) => {
    try {
      await AsyncStorage.removeItem(key);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataFromLDB = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const storedData = JSON.parse(value);
        const ids = storedData.map(o => o.id);
        const filterFavoriteContacts = storedData.filter(
          ({id}, index) => !ids.includes(id, index + 1),
        );
        setFavoritesContacts(filterFavoriteContacts);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <TopBar navigation={navigation} />
      <Text style={styles.text}>Favorite Contacts</Text>
      {favoriteContacts.length > 0 ? (
        <ScrollView>
          {favoriteContacts.map(contact => {
            return (
              <FavoriteContact
                key={contact.id}
                navigation={navigation}
                deleteHandler={deleteHandler}
                teacher={contact}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.warningBox}>
          <Image
            style={styles.image}
            source={require('../../assets/Images/pocket.png')}
          />
          <Text style={styles.warningText}>
            Favorite Contacts Will Appear here.
          </Text>
        </View>
      )}
    </View>
  );
};

export default MainFavorite;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.topBarBackground,
    fontSize: 20,
    paddingVertical: 3,
  },
  warningBox: {
    marginTop: '45%',
  },
  warningText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'lightgrey',
    fontWeight: '500',
  },
  image: {
    alignSelf: 'center',
    tintColor: colors.topBarBackground,
  },
});
