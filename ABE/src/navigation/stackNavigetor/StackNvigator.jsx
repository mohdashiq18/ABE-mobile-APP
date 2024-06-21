import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import DrawNavigator from '../drawNavigator/DrawNavigator';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DrawNavigator}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default StackNavigation;