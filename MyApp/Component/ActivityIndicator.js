import React,{Component} from 'react';
import {ActivityIndicator,Text,View,StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

 class ActivityIndicatorDemo extends Component {
  static navigationOptions={
    title: 'ActivityIndicator',
  };
  render(){

    return(
      <View style={{flex:1,marginTop:30}}>
          <ActivityIndicator size="small" color='red'/>
      </View>
    );
  }
}
export default SimpleApp = StackNavigator({
  Home: { screen: ActivityIndicatorDemo },
});

// export default ActivityIndicatorDemo;
// mudule.export = ActivityIndicatorDemo;
