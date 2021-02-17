import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Login from './Login';
import Inside from './Inside';
import About from './About';

const Loginscreen = createStackNavigator({
  //this NavStack is passing the Blogs screen and the Edit Screen
  // (They will be linked . it gives the Edit page a back arror)
  Login: {
    screen: Login,
    // navigationOptions: {
    //     //Nav options modifies the navs
    //     headerShown: false, // this removes headers

    //     cardStyle: {
    //         shadowColor: 'transparent',
    //         backgroundColor: 'transparent',
    //     },
    //     transparentCard: true,
    //     transitionConfig: () => ({
    //         containerStyle: {
    //             backgroundColor: 'transparent',
    //         },
    //     }),
    // },
  },
  About: {screen: About},

  Inside: {
    screen: Inside,
    // navigationOptions: () => ({
    //     headerTitle: 'Edit your text',
    //     headerShown: false,
    // }),
  },
});

const BottomTab = createBottomTabNavigator({
  // this is the bottom tab naigator that will be exported .
  Loginscreen: {screen: Loginscreen},
});

export default Routes = createAppContainer(BottomTab);
