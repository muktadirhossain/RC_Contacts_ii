import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import colors from '../assets/Colors';

const MenuIcon = ({source, title, navigation, unit_name}) => {
  const content = {
    icon: '',
    id: 14,
    title: title,
    unit_name: unit_name,
  };

  return (
    <TouchableHighlight
      activeOpacity={0.9}
      underlayColor="#ddd"
      style={styles.container}
      onPress={() => navigation.navigate('CategoryScreen', {content: content})}>
      <View style={styles.contentBox}>
        <Image style={styles.icon} source={source} />
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.topBarBackground,
    // borderColor: colors.primaryLight,
    margin: 10,
  },
  icon: {
    height: 120,
    width: 120,
    tintColor: colors.topBarBackground,
  },
  title: {
    color: colors.topBarBackground,
    paddingBottom:2,
    fontSize: 16,
    fontWeight: '600',
  },
  contentBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
