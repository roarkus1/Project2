//Dependencies.
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native';
import { useFonts } from 'expo-font';

//Page.
const ViewContact = ({ route, navigation }) => {
  const [loaded] = useFonts({
    Trebuchet: require('../Assets/Fonts/trebuc.ttf')
  });
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.nameOfContact}>John Doe</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Edit Contact')}>
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
          <Text style={styles.detail}>123456789</Text>
          <Text style={styles.title}>Mobile</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detail}>jdoe@email.com</Text>
          <Text style={styles.title}>Email</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detail}>123456789</Text>
          <Text style={styles.title}>Address</Text>
        </View>
      </View>
    </View>
  );
}

//Stylesheet for page.
const styles = StyleSheet.create({
  container: { flex: 1 },
  nameContainer: { flex: 0.2, alignItems: 'center', justifyContent: 'center' },
  nameOfContact: {
    flex: 1,
    fontSize: 30,
    marginLeft: '33%',
    fontFamily: 'Trebuchet'
  },
  detailContainer: { margin: 10, borderBottomWidth: 1 },
  detail: { fontSize: 18, fontFamily: 'Trebuchet'},
  title: { fontSize: 15, fontFamily: 'Trebuchet' },
  editButton: { height: 50, width: 50, marginRight: '10%' },
});

export default ViewContact;
