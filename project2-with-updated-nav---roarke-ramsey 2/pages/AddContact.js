//Dependencies.
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect } from 'react';
import { Audio } from 'expo-av';

//Local imports.
import { FontSizeContext } from '../Context';
import { SoundEffectContext } from '../Context';

//Page.
const AddContact = ({ navigation, Settings }) => {
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

  //Custom styling objects for dynamic font size.
  const nameOfContactStyle = {
    flex: 1,
    fontFamily: 'Trebuchet',
    marginLeft: '40%',
    fontSize: fontSize,
  };
  const detailStyle = { fontFamily: 'Trebuchet', fontSize: fontSize * 0.66 };
  const titleStyle = { fontFamily: 'Trebuchet', fontSize: fontSize * 0.33 };

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
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput style={nameOfContactStyle} placeholder="Name"></TextInput>
          <Image
            style={styles.editButton}
            source={require('../Assets/edit-icon.png')}
          />
        </View>
        <TextInput placeholder="Position"></TextInput>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.detailContainer}>
          <TextInput style={detailStyle} placeholder="Mobile"></TextInput>
          <Text style={titleStyle}>Mobile</Text>
        </View>
        <View style={styles.detailContainer}>
          <TextInput style={detailStyle} placeholder="Email"></TextInput>
          <Text style={titleStyle}>Email</Text>
        </View>
        <View style={styles.detailContainer}>
          <TextInput style={detailStyle} placeholder="Address"></TextInput>
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
  editButton: {
    height: 50,
    width: 50,
    marginRight: '10%',
    margin: '3%',
    opacity: 0.6,
  },
});
export default AddContact;
