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

//Page.
const EditContact = ({ navigation }) => {
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf'),
  });
  function saveHandler() {
    Alert.alert('Contact Successfully Saved!');
    navigation.navigate('Contact Page');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.nameOfContact}>John Doe</TextInput>
          <Image
            style={styles.editButton}
            source={require('../Assets/edit-icon.png')}
          />
        </View>
        <TextInput>ICT Technician</TextInput>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.detailContainer}>
          <TextInput style={styles.detail}>123456789</TextInput>
          <Text style={styles.title}>Mobile</Text>
        </View>
        <View style={styles.detailContainer}>
          <TextInput style={styles.detail}>jdoe@email.com</TextInput>
          <Text style={styles.title}>Email</Text>
        </View>
        <View style={styles.detailContainer}>
          <TextInput style={styles.detail}>123456789</TextInput>
          <Text style={styles.title}>Address</Text>
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
  nameOfContact: {
    flex: 1,
    fontSize: 30,
    fontFamily: 'Trebuchet',
    marginLeft: '33%',
  },
  detailContainer: { margin: 10, borderWidth: 1 },
  detail: { fontSize: 18, fontFamily: 'Trebuchet' },
  title: { fontSize: 15, fontFamily: 'Trebuchet' },
  editButton: { height: 50, width: 50, marginRight: '10%', opacity: 0.6 },
});
export default EditContact;
