//Dependencies.
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useContext, useEffect } from 'react';
import { Audio } from 'expo-av';


//Local imports.
import { FontSizeContext } from '../Context';
import { SoundEffectContext } from '../Context';

//Page.
const EditContact = ({ navigation }) => {
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
      require('../Assets/Sound-Effects/success_bell-6776.mp3')
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
  
  //Obtaining font size from context.
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  //Custom styling objects for dynamic font size.
  const nameOfContactStyle = {
    flex: 1,
    fontFamily: 'Trebuchet',
    marginLeft: '33%',
    fontSize: fontSize,
  };
  const detailStyle = { fontFamily: 'Trebuchet', fontSize: fontSize * 0.66 };
  const titleStyle = { fontFamily: 'Trebuchet', fontSize: fontSize * 0.33 };

  //Save handler.
  function saveHandler() {
    if (soundIsEnabled === true) {
      playSound();
    }
    Alert.alert('Contact Successfully Created!');
    navigation.navigate('Contact Page');
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={nameOfContactStyle}>John Doe</TextInput>
          <Image
            style={styles.editButton}
            source={require('../Assets/edit-icon.png')}
          />
        </View>
        <TextInput>ICT Technician</TextInput>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.detailContainer}>
          <TextInput style={detailStyle}>123456789</TextInput>
          <Text style={titleStyle}>Mobile</Text>
        </View>
        <View style={styles.detailContainer}>
          <TextInput style={detailStyle}>jdoe@email.com</TextInput>
          <Text style={titleStyle}>Email</Text>
        </View>
        <View style={styles.detailContainer}>
          <TextInput style={detailStyle}>123456789</TextInput>
          <Text style={titleStyle}>Address</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row-reverse' }}>
        <TouchableOpacity
          onPress={() => {
            saveHandler();
          }}>
          <Image
            style={{ width: 50, height: 50, margin: 10 }}
            source={require('../Assets/tick-coloured.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Stylesheet for page.
const styles = StyleSheet.create({
  container: { flex: 1 },
  nameContainer: { flex: 0.2, alignItems: 'center', justifyContent: 'center' },
  detailContainer: { margin: 10, borderWidth: 1 },
  editButton: { height: 50, width: 50, marginRight: '10%', opacity: 0.6 },
});
export default EditContact;
