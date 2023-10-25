//Dependencies.
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

//Page.
const Settings = () => {
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf'),
  });
  const [brightness, setBrightness] = useState(250);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Font Size:</Text>
      <View style={styles.buttonContainer}>
        <Slider
          step={1}
          minimumValue={50}
          maximumValue={500}
          value={brightness}
          onValueChange={(slideValue) => setBrightness(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
      </View>
      <Text style={styles.text}>Screen Brightness:</Text>
      <View></View>
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
  text: { fontFamily: 'Trebuchet', fontSize: 25 },
});
export default Settings;
