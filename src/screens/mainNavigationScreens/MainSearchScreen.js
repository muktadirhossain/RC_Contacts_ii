import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Image} from 'react-native';
import API from '../../assets/API';
import colors from '../../assets/Colors';
import StaffComponents from '../../components/StaffComponents';
import TopBar from '../../components/TopBar';

const MainSearchScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API.profile).then(response => {
      setData(response.data);
    });
  }, []);
  const searchArray = searchTerm => {
    return data.filter(item =>
      item.fullNameNew.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation}/>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search People..."
      />
      {searchTerm ? (
        <View style={styles.displayContainer}>
          <FlatList
            data={searchArray(searchTerm)}
            renderItem={({item}) => <StaffComponents navigation={navigation} teacher={item} />}
          />
        </View>
      ) : (
        <View style={styles.splashView}>
          <Image source={require('../../assets/Images/search.png')} />
          <Text style={styles.splashText}>
            Searched Contacts Will Appear here
          </Text>
        </View>
      )}
    </View>
  );
};

export default MainSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
  },
  searchInput: {
    borderColor: colors.topBarBackground,
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
    color:'black',
    backgroundColor: 'lightgrey',

  },
  displayContainer: {
    paddingTop: 15,
    paddingBottom: 35,
    paddingHorizontal: 10,
  },
  splashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  splashText: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.topBarBackground,
    paddingTop: 20,
  },
});
