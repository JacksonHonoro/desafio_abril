import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#26a4f2',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
