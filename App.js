import * as React from 'react';
import { View, Text , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import analytics, { firebase } from '@react-native-firebase/analytics'

function HomeScreen() {

  preDefinedEvent = async ()=>{
    await analytics().logLogin({
      method: 'facebook'
    })
  }

  customEvent = async () => {
    await analytics().logEvent('ticket',{
      id: 1234,
      item: 'sdsd',
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={preDefinedEvent}
        title="preDefinedEvent"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={customEvent}
        title="customEvent"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;