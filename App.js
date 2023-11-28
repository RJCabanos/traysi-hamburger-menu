// App.js
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import YourMainScreen from './screen/YourMainScreen';
import AboutUsScreen from './screen/AboutUsScreen';
import CustomDrawerHeader from './screen/CustomDrawerHeader';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const routes = props.state.routes;

  return (
    <DrawerContentScrollView {...props}>
      {/* Custom drawer header */}
      <CustomDrawerHeader />

      {/* Default drawer items (excluding 'AboutUs') */}
      {routes.map((route, index) => {
        if (route.name !== 'AboutUs') {
          return (
            <DrawerItem
              key={index}
              label={route.name}
              onPress={() => {
                props.navigation.navigate(route.name);
              }}
            />
          );
        }
        return null;
      })}

      {/* About Us button */}
      <DrawerItem
        label="About Us"
        onPress={() => {
          // Handle 'About Us' button press
          props.navigation.navigate('AboutUs');
        }}
      />
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: { backgroundColor: '#5FC0DE' }, // Set the background color of the sliding drawer
        }}
      >
        <Drawer.Screen name="Home" component={YourMainScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
