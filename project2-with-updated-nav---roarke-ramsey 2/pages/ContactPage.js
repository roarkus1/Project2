//Dependencies
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useContext, useEffect } from 'react';
import { Audio } from 'expo-av';

//Local imports.
import { FontSizeContext } from '../Context';
import { SoundEffectContext } from '../Context';

//Page.
const ContactPage = ({ navigation }) => {
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf'),
  });

  //Sound effect toggle state.
  const { soundIsEnabled, setSoundIsEnabled } = useContext(SoundEffectContext);
  //Sound file use state.
  const [sound, setSound] = React.useState();

  //Play sound function.
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../Assets/Sound-Effects/bubble-sound-43207.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  //On press handler.
  function onPressHandler(page) {
    if (soundIsEnabled === true) {
      playSound();
    }
    navigation.navigate(page);
  }

  //Obtaining font size from context.
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const textStyle = {
    fontSize: fontSize,
    fontFamily: 'Trebuchet',
    margin: 10,
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.contactContainer}
          onPress={() => onPressHandler('View Contact')}>
          <Text style={textStyle}>John Doe</Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          margin: 10,
          position: 'absolute',
          bottom: -5,
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => onPressHandler('Add Contact')}>
          <Image
            style={{ width: 60, height: 60, margin: 10 }}
            source={require('../Assets/plus-coloured.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Stylesheet for page.
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fffff',
    flex: 1,
  },
  contactContainer: {
    flex: 0.1,
    backgroundColor: '#D9D9D9',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  contactText: {
    fontFamily: 'Trebuchet',
    fontSize: 30,
    margin: 10,
  },
  roundButton: { flex: 1 },
  roundButtonImage: {
    width: 60,
    height: 60,
    position: 'absolute',
    flexDirection: 'row-reverse',
  },
});
export default ContactPage;
