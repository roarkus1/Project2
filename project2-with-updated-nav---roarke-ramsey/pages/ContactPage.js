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

//Page.
const ContactPage = ({ navigation }) => {
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf'),
  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.contactContainer}
          onPress={() => console.log(navigation.navigate('View Contact'))}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactContainer}
          onPress={() => console.log(navigation.navigate('Add Contact'))}>
          <Text style={styles.contactText}>Add Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <Text style={styles.contactText}>John Doe</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{ margin: 10, position: 'absolute', bottom: -5, alignSelf: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Add Contact')}>
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
