import {ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import colors from '../assets/Colors';
import MenuIcon from '../components/MenuIcon';
import API from '../assets/API';

const MainHome = ({navigation}) => {
  // declare state
  const [homeScreenContent, setHomeScreenContent] = useState([]);
  const url = API.content_url;
  //  fetch Home Screen logo & Contents 
  useEffect(() => {
    axios.get(url).then(response => {
      setHomeScreenContent(response.data);
    });
  }, []);

  return (
    <View>
      <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={{marginBottom: 2000}}>
        {homeScreenContent.length > 0 ? (
          <View
            style={styles.mainContainer}>
            {homeScreenContent.map(content => (
              <MenuIcon
                key={content.id}
                content={content}
                navigation={navigation}
              />
            ))}
          </View>
        ) : (
          <ActivityIndicator size="large" color={colors.topBarBackground} />
        )}
      </ScrollView>
    </View>
  );
};

export default MainHome;

// styling

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    paddingBottom: 100,
    backgroundColor: colors.primaryBackground,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
