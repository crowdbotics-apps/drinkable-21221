import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps131712Navigator from '../features/Maps131712/navigator';
import Add-Item131711Navigator from '../features/Add-Item131711/navigator';
import Maps131707Navigator from '../features/Maps131707/navigator';
import UserProfile131703Navigator from '../features/UserProfile131703/navigator';
import Maps131663Navigator from '../features/Maps131663/navigator';
import Add-Item131662Navigator from '../features/Add-Item131662/navigator';
import Maps131658Navigator from '../features/Maps131658/navigator';
import UserProfile131654Navigator from '../features/UserProfile131654/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps131712: { screen: Maps131712Navigator },
Add-Item131711: { screen: Add-Item131711Navigator },
Maps131707: { screen: Maps131707Navigator },
UserProfile131703: { screen: UserProfile131703Navigator },
Maps131663: { screen: Maps131663Navigator },
Add-Item131662: { screen: Add-Item131662Navigator },
Maps131658: { screen: Maps131658Navigator },
UserProfile131654: { screen: UserProfile131654Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
