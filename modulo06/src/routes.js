import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* Pages */
import Main from './pages/Main';
import Repository from './pages/Repository';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Repository,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
