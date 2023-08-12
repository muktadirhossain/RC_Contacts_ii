import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const AppDescriptionScreen = () => {
  const openURL = url => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.descriptionContainer}>
        <Image
          style={{height: 100, width: 100, alignSelf: 'center'}}
          source={require('../assets/Images/Rajshahi-collage_logo.png')}
        />
        <View>
          <Text style={styles.collegeTitle}>Rajshahi College</Text>
        </View>
        <View>
          <Text style={styles.institute_desc}>
            {/* Rajshahi College is the third oldest institution of higher education
            in Bangladesh. Established in 1873 in Rajshahi city. it is the third
            oldest college in Bangladesh after Dhaka College and Chittagong
            College. In 1895, Rajshahi College was the first institution in the
            territories. The college is affiliated with the National University.
            Situated in the city center, Rajshahi College is adjacent to
            Rajshahi Collegiate School and is very near the famous Barendra
            Museum. */}
            Rajshahi College is one of the oldest institutions of higher
            education in Bangladesh. Established in 1873 in Rajshahi city with
            the financial assistance of Raja Haralal Roy Bahadur of Dubalhati.
            Raja Haranath Roy donated land for the establishment of the college
            and the annual income from the property was five thousand rupees.
            Within a short period after establishment, the college became one of
            the main centres of higher education for the inhabitants of East
            Bengal, North Bengal, Bihar, Purnia and Assam.{'\n'}{'\n'}
            Rajshahi College
            was the first institution in the territories to offers bachelor and
            honours degree courses in various disciplines since 1878 and Masters
            degree courses since 1993. The college is affiliated with the
            National University. The daily affairs of the college are run on the
            basis of guidelines prescribed by the Ministry of Education.{'\n'}{'\n'}
            It stopped enrolling Higher Secondary students in 1996 but again start
            enrolling from session 2010-2011.{'\n'}{'\n'}
            It is said to be the third oldest
            college in Bangladesh after Dhaka College and Chittagong College.
            Rajshahi College was the first institution in the territories now
            comprising Bangladesh to award a Masters degree. It also offers
            three years bachelor and four years honours degree courses in
            various disciplines. The college is affiliated with the National
            University. Situated in the city center, Rajshahi College is
            adjacent to Rajshahi Collegiate School and is very near the famous
            Barendra Museum.
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => {
            Linking.openURL('https://rc.gov.bd').catch(err =>
              console.error("Couldn't load page", err),
            );
          }}>
          <Text style={styles.btn_txt}>Visit Collage Website</Text>
        </TouchableOpacity>
      </ScrollView>

      <View>
        <Text style={styles.label}>Developed & Maintained By </Text>

        <View style={{paddingVertical: 5, paddingHorizontal: 15}}>
          <View>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 18}}>
              rajIT Solutions Ltd.
            </Text>
          </View>
          <View>
            <Text style={{color: 'black', fontSize: 15}}>
              Beside Hotel Nice International
            </Text>
          </View>
          <View>
            <Text style={{color: 'black', fontSize: 14}}>
              Holding No : #122, 3rd Floor North, Gonokpara, Ghoramara, Boalia
              Rajshahi-6100, Bangladesh.{'\n'}
              Phone No : +880-1762623193 {'\n'}
              Email : info@rajit.net;{'  Web :'}
              <Text
                style={{textDecorationLine: 'underline'}}
                onPress={() => openURL('https://rajit.net/')}>
                www.rajit.net {'\n'}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => openURL('https://rajit.net/')}>
          <Image
            style={styles.image}
            source={require('../assets/Images/rajIT-logo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    justifyContent: 'space-between',
  },
  image: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 10,
    maxWidth: 350,
    // maxHeight: 60,
  },
  descriptionContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    backgroundColor: colors.topBarBackground,
    paddingVertical: 5,
  },
  button: {
    alignItems: 'flex-end',
    backgroundColor: colors.topBarBackground,
    marginLeft: '50%',
    marginTop: 20,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },
  btn_txt: {
    color: 'white',
    paddingRight: 10,
  },
  institute_desc: {
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
    paddingTop: 5,
    lineHeight: 20,
  },
  collegeTitle: {
    color: colors.topBarBackground,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
});
