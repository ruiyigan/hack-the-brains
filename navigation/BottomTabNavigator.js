import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import ControlScreen from '../Screens/ControlScreen';
import SocialScreen from '../Screens/SocialScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

function Circle({ title }) {
  return (
    <View style={styles.circle}>
      <Text style={styles.circleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let title;
          if (route.name === 'Home') {
          } else if (route.name === 'Search') {
          } else if (route.name === 'Notifications') {
          } else if (route.name === 'Profile') {
          }
          return <Circle title={title} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Control" component={ControlScreen} />
      <Tab.Screen name="Social" component={SocialScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
