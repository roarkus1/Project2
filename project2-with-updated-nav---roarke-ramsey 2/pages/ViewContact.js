//Dependencies.
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useContext, useEffect } from 'react';
import { Audio } from 'expo-av';

//Local imports.
import { FontSizeContext } from '../Context';
import { SoundEffectContext } from '../Context';

//Page.
const ViewContact = ({ route, navigation }) => {
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf'),
  });
  //Obtaining font size from context.
  const { fontSize, setFontSize } = useContext(FontSizeContext);

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

  //Custom styling objects for dynamic font size.
  const nameOfContactStyle = {
    flex: 1,
    fontFamily: 'Trebuchet',
    marginLeft: '33%',
    fontSize: fontSize,
  };
  const detailStyle = { fontFamily: 'Trebuchet', fontSize: fontSize * 0.66 };
  const titleStyle = { fontFamily: 'Trebuchet', fontSize: fontSize * 0.33 };
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={nameOfContactStyle}>John Doe</Text>
          <TouchableOpacity onPress={() => onPressHandler('Edit Contact')}>
            <Image
              style={styles.editButton}
              source={require('../Assets/edit-icon.png')}
            />
          </TouchableOpacity>
        </View>
        <Text>ICT Technician</Text>
      </View>
      <View>
        <View style={styles.detailContainer}>
          <Text style={detailStyle}>123456789</Text>
          <Text style={titleStyle}>Mobile</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={detailStyle}>jdoe@email.com</Text>
          <Text style={titleStyle}>Email</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={detailStyle}>123456789</Text>
          <Text style={titleStyle}>Address</Text>
        </View>
      </View>
    </View>
  );
};

//Stylesheet for page.
const styles = StyleSheet.create({
  container: { flex: 1 },
  nameContainer: { flex: 0.2, alignItems: 'center', justifyContent: 'center' },
  detailContainer: { margin: 10, borderBottomWidth: 1 },
  editButton: { height: 50, width: 50, marginRight: '10%' },
});

export default ViewContact;
