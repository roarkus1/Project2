//Dependencies.
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, createContext, useContext, useEffect } from 'react';

//Local Imports.
import AddContact from './pages/AddContact';
import ContactPage from './pages/ContactPage';
import EditContact from './pages/EditContact';
import ViewContact from './pages/ViewContact';
import Settings from './pages/Settings';
import CustomHeader from './Header';
import { FontSizeContext } from './Context';
import { BrightnessContext } from './Context';
import { SoundEffectContext } from './Context';

//Creating navigators.
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Main stack navigator.
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Contact Page"
      screenOptions={{
        headerStyle: { backgroundColor: '#941a1d' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Add Contact"
        component={AddContact}
        options={{ title: 'Add Contact' }}
      />
      <Stack.Screen
        name="Contact Page"
        component={ContactPage}
        options={{ headerTitle: () => <CustomHeader /> }}
      />
      <Stack.Screen
        name="Edit Contact"
        component={EditContact}
        options={{ title: 'Edit Contact' }}
      />
      <Stack.Screen
        name="View Contact"
        component={ViewContact}
        options={{ title: 'View Contact' }}
      />
    </Stack.Navigator>
  );
}

//Settings Stack.
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#941a1d' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
}

//Main app with tab navigator.
function App() {
  //Font size state hook.
  const [fontSize, setFontSize] = useState(30);
  //Brightness state hook.
  const [brightness, setBrightness] = useState(200);
  //Sound toggle state hook.
  const [soundIsEnabled, setSoundIsEnabled] = useState(false);

  return (
    <SoundEffectContext.Provider value={{ soundIsEnabled, setSoundIsEnabled }}>
      <BrightnessContext.Provider value={{ brightness, setBrightness }}>
        <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Contact Page"
              tabBarOptions={{
                activeTintColor: '#941a1d',
              }}>
              <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="SettingsStack"
                component={SettingsStack}
                options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="settings"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </FontSizeContext.Provider>
      </BrightnessContext.Provider>
    </SoundEffectContext.Provider>
  );
}

export default App;
