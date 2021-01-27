
import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors, DefaultStyles } from '@constants';


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 25,
  },
  text: {
    color: Colors.secondary,
    textAlign: 'center',
  },
  title: {

    ...DefaultStyles.textTitle,
    ...{
      fontSize: 35,
      color: Colors.secondary,
      textAlign: 'center',
    },
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevButton: {
    color: Colors.primaryDark,
    justifyContent: 'center'
  },
  activeDotStyle: {
    backgroundColor: Colors.primary
  },
  button: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const data = [
  {
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('assets/logo.png'),

  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('assets/logo.png'),
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('assets/logo.png'),
  },
];

const AppIntro = props => {
  const _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: Colors.white,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _keyExtractor = (item) => item.title;

  const _renderButton = (type) => {
    return (<View style={styles.button}>
      <Text style={styles.prevButton}>{type}</Text>
    </View>)
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.3)" />
      <AppIntroSlider
        showPrevButton
        showSkipButton
        activeDotStyle={styles.activeDotStyle}
        keyExtractor={_keyExtractor}
        renderDoneButton={() => _renderButton('Done')}
        renderSkipButton={() => _renderButton('Skip')}
        renderPrevButton={() => _renderButton('Prev')}
        renderNextButton={() => _renderButton('Next')}
        renderItem={_renderItem}
        onDone={() => props.navigation.navigate('Login')}
        data={data}
      />
    </View>
  );
}
export default AppIntro;