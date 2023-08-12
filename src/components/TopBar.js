import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../assets/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopBar = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.topBarBackground} />
      <View style={styles.container}>
        <View style={{width: '15%'}}>
          <Image
            source={require('../assets/Images/Rajshahi-collage_logo.png')}
            style={{height: 50, width: 50}}
          />
        </View>
        <View style={{width: '70%'}}>
          <Text style={styles.title}>Rajshahi College Contacts</Text>
        </View>
        <View style={{width: '10%', justifyContent: 'center'}}>
          {/* info Item */}
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Image
              style={styles.icon}
              source={require('../assets/Images/info-icon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.topBarBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: colors.onFocusColor,
    fontWeight: '500',
    textAlign: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: colors.white,
  },
});
