import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SplashScreen from '~/pages/SplashScreen';

const Routes = createAppContainer(createSwitchNavigator({ SplashScreen, Main }));

export default Routes;
