// import { Navigation } from 'react-native-navigation';
// import { registerScreens } from './screens/index';
//
// const components = [
//   HomeScreen,
//   MeScreen,
//   OfferScreen,
//   CustomerScreen
// ];
//
// registerScreens('app', components);
//
// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: '首页',
//       screen: 'app.HomeScreen', // this is a registered name for a screen
//       icon: require('./images/1.png'),
//       selectedIcon: require('./images/1.png'), // iOS only
//       title: '首页'
//     },
//     {
//       label: '客户管理',
//       screen: 'app.OfferScreen', // this is a registered name for a screen
//       icon: require('./images/2.png'),
//       selectedIcon: require('./images/2.png'), // iOS only
//       title: '客户管理'
//     },
//     {
//       label: '车险报价',
//       screen: 'app.CustomerScreen', // this is a registered name for a screen
//       icon: require('./images/3.png'),
//       selectedIcon: require('../images/3.png'), // iOS only
//       title: '车险报价'
//     },
//     {
//       label: '我的',
//       screen: 'app.MeScreen',
//       icon: require('./images/4.png'),
//       selectedIcon: require('./images/4.png'), // iOS only
//       title: '我的'
//     }
//   ]
// });
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
export default class ActivityIndicatorDemo extends Component {
    static navigationOptions = {
        title: 'ActivityIndicator',
    };
    render() {
        return (
            <View style={{flex:1,marginTop:30}}>
                <View style={{flexDirection:'row'}}>
                    <Text>全部默认：</Text>
                    <ActivityIndicator />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>添加背景色：</Text>
                    <ActivityIndicator style={{backgroundColor:'blue'}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>animating=false （隐藏）：</Text>
                    <ActivityIndicator animating={false}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>设置color：</Text>
                    <ActivityIndicator color='red'/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>size small：</Text>
                    <ActivityIndicator size="small"/>
                    <Text>size large：</Text>
                    <ActivityIndicator size="large"/>

                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>view props属性设置：</Text>
                    <ActivityIndicator style={{height:100,width:80,backgroundColor:'black'}} />

                </View>
            </View>
        );
    }
}
