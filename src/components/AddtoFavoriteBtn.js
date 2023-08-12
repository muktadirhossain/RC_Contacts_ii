import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddtoFavoriteBtn = ({addToFav, contact}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  useEffect(() => {
    getDataFromLDB('favorites');
  });

  const getDataFromLDB = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const storedData = JSON.parse(value);
        const ids = storedData.map(o => o.id);
        const filterFavoriteContacts = storedData.filter(
          ({id}, index) => !ids.includes(id, index + 1),
        );
        filterFavoriteContacts.map(element => {
          if (element.id == contact.id) {
            return setIsFavorite(true);
          } else {
            return null;
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      {isFavorite ? null : (
        <TouchableOpacity style={styles.button_style} onPress={addToFav}>
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: 'white',
            }}
            source={require('../assets/Images/heart.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddtoFavoriteBtn;

const styles = StyleSheet.create({
  button_style: {
    margin: 5,
    backgroundColor: colors.topBarBackground,
    padding: 10,
    borderRadius: 10,
  },
});
