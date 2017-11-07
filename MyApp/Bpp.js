import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
registerScreens();
Navigation.startTabBasedApp({
  tabs: [
    {
      label: '首页',
      screen: 'app.HomeScreen', // this is a registered name for a screen
      icon: require('./images/1.png'),
      selectedIcon: require('./images/1.png'), // iOS only
      title: '首页'
    },
    {
      label: '客户管理',
      screen: 'app.OfferScreen', // this is a registered name for a screen
      icon: require('./images/2.png'),
      selectedIcon: require('./images/2.png'), // iOS only
      title: '客户管理'
    },
    {
      label: '车险报价',
      screen: 'app.CustomerScreen', // this is a registered name for a screen
      icon: require('./images/3.png'),
      selectedIcon: require('./images/3.png'), // iOS only
      title: '车险报价'
    },
    {
      label: '我的',
      screen: 'app.MeScreen',
      icon: require('./images/4.png'),
      selectedIcon: require('./images/4.png'), // iOS only
      title: '我的'
    }
  ]
});
