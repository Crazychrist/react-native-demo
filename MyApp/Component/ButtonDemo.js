import React,{Component} from 'react';
import {View ,Text ,Button,AlertIOS} from 'react-native';
import { StackNavigator } from 'react-navigation';
class ButtonDemo extends Component {
  static navigationOptions = {
        title: 'Button',
    };
  render(){
    return (
      <View style={{flex:1,marginTop:30}}>
          <Button title='我是按钮' color='red' onPress={()=>AlertIOS.prompt('温馨提醒','请输入密码',[
           {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
           {text:'确定',onPress:()=>console.log('点击了确定'),style:'destructive'}
          ],'secure-text')}/>
      </View>
    );
  }
}
export default App = StackNavigator({
  Home:{screen:ButtonDemo}
});
