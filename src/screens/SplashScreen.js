import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import TopBar from '../components/TopBar';
import colors from '../assets/Colors';

const SplashScreen = ({navigation, gotoMainScreen}) => {
  return (
    <View>
      <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../assets/Images/Rajshahi-collage_logo.png')}
            // source={require('../assets/Images/rcadminbuilding50.png')}
          />
          <TouchableOpacity
            onPress={gotoMainScreen}
            style={{
              backgroundColor: colors.topBarBackground,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              height:50,
              borderRadius:15
            }}>
            <Text
              style={{
                color: colors.onFocusColor,
                fontWeight:'bold',
                fontSize:20,
                paddingLeft:20
              }}>
              মূল পাতা
            </Text>
            <Image
              style={{
                tintColor: colors.onFocusColor,
                height:20
              }}
              source={require('../assets/Images/rightArrow1.5px.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 150}}>
          {/* <ActivityIndicator size={30} color={colors.topBarBackground} /> */}
          {/* <TouchableOpacity
            style={{
              backgroundColor: colors.topBarBackground,
              width: 200,
              alignSelf: 'center',
              height: 50,
              justifyContent: 'center',
              borderRadius:10,
              marginBottom:5
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                justifyContent: 'center',
                color:colors.onFocusColor
              }}>
              {'মূল পাতা >'}
            </Text>
          </TouchableOpacity> */}
          <Text style={styles.welcomeText}>
            Welcome to{'\n'}Rajshahi College Contacts APP
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    paddingHorizontal: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    height: '60%',
    width: '76%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: colors.topBarBackground,
  },
});
