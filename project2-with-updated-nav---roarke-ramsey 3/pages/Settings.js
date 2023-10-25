//Dependencies.
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';
import { useState, createContext, useContext, useEffect } from 'react';
import * as Brightness from 'expo-brightness';

//Local imports.
import { FontSizeContext } from '../Context';
import { BrightnessContext } from '../Context';
import { SoundEffectContext } from '../Context';

//Page.
const Settings = () => {
  //Obtaining font size from context.
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  //Obtaining brightness from context.
  const { brightness, setBrightness } = useContext(BrightnessContext);
  //Toggle switch use state and toggle function.
  const { soundIsEnabled, setSoundIsEnabled } = useContext(SoundEffectContext);
  const toggleSwitch = () => setSoundIsEnabled(previousState => !previousState);

  //Set brightness to 'brightness' value. This value is set a useState hook, which is controlled by the brigtness slider.
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(brightness);
      }
    })();
  });
  //Font import.
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf'),
  });

  const textStyle = {
    fontSize: fontSize,
    fontFamily: 'Trebuchet',
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Text style={textStyle}>     Font Size:     </Text>
        <Slider
          step={1}
          minimumValue={5}
          maximumValue={100}
          value={fontSize}
          onValueChange={(slideValue) => setFontSize(slideValue)}
          minimumTrackTintColor="#941a1d"
          maximumTrackTintColor="#941a1d"
          thumbTintColor="#941a1d"
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={textStyle}>Screen Brightness:</Text>
        <Slider
          step={0.01}
          minimumValue={0}
          maximumValue={1}
          value={brightness}
          onValueChange={(slideValue) => setBrightness(slideValue)}
          minimumTrackTintColor="#941a1d"
          maximumTrackTintColor="#941a1d"
          thumbTintColor="#941a1d"
        />
      </View>
      <View>
        <Text style={textStyle}>Sound Effects:</Text>
      <Switch
        style={{marginRight: '20%'}}
        trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={soundIsEnabled ? '#941a1d' : '#941a1d'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={soundIsEnabled}
      />
      </View>
    </View>
  );
};

//Stylesheet for page.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sliderContainer: { flex: 1, margin: 40, length: '50%' },
});
export default Settings;
