import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';
/* Takes an item from `data` and renders it into the list. Example usage:
  *ItemSeparatorComponent：分割线组件，
  ListHeaderComponent：头组件
  数据：列表数据
  horizo​​ntal：设置为true则变为水平列表
  。numColumns：列数组件内部元素必须是等高的，无法支持瀑布流布局
  columnWrapperStyle：numColumns大于1时，设置每行的样式
  getItemLayout：如果我们知道行高可以用此方法节省动态计算行高的开销。
  刷新：是否正在加载数据
  onRefresh：设置此属性需要一个标准的RefreshControl控件，刷新数据
  renderItem：渲染每个组件
  onViewableItemsChanged：当一个新的项目渲染或者隐藏的时候调用此方法参数：信息：{viewableItems：阵列，改：数组} viewableItems：当前可见的项目，改为：渲染或者隐藏的项目
  scrollToEnd（ {params？：？{animated？：？boolean}}）：滚动到末尾，如果不设置getItemLayout属性的话，可能会比较卡。
  scrollToIndexparams：{动画?:布尔，索引：号码，一个viewPosition ?:数}：滚动到制定的位置
  scrollToOffset（PARAMS：{动画?:？ boolean，offset：number}）：滚动到指定的偏移的位置。
  *     <FlatList
  *       ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
  *         <View style={[style.separator, highlighted && {marginLeft: 0}]} />
  *       )}
  *       data={[{title: 'Title Text', key: 'item1'}]}
  *       renderItem={({item, separators}) => (
  *         <TouchableHighlight
  *           onPress={() => this._onPress(item)}
  *           onShowUnderlay={separators.highlight}
  *           onHideUnderlay={separators.unhighlight}>
  *           <View style={{backgroundColor: 'white'}}>
  *             <Text>{item.title}</Text>
  *           </View>
  *         </TouchableHighlight>
  *       )}
  *     />
  *
  */
var ITEM_HEIGHT = 100;
import {StackNavigator} from 'react-navigation';
class FlatListDemo extends Component  {
  static navigationOptions = {
        title: 'FlatList',
    };
    _flatList;
    _renderItem = (item)=>{
      var txt = '第' + item.index + '个' + ' title=' + item.item.title;
      var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
      return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
    }
    _header = () => {
      return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是头部</Text>;
  }

  _footer = () => {
      return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
  }

  _separator = () => {
      return <View style={{height:2,backgroundColor:'yellow'}}/>;
  }
  render(){
    /*
    数据源
    */
    var data = [];
    for (var i = 0; i < 20; i++) {
      data.push({key:i,title:i+''});
    }
    return(
      <View style={{flex:1}}>
              <Button title='滚动到指定位置' onPress={()=>{
                  //this._flatList.scrollToEnd();
                  //this._flatList.scrollToIndex({viewPosition:0,index:8});
                  this._flatList.scrollToOffset({animated: true, offset: 800});
              }}/>
              <View style={{flex:1}}>
                  <FlatList
                      ref={(ff)=>this._flatList = ff}
                      ListHeaderComponent={this._header}
                      ListFooterComponent={this._footer}
                      ItemSeparatorComponent={this._separator}
                      renderItem={this._renderItem}
                      //collectionview排列
                      // numColumns ={3}
                      // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                      // horizontal={true}

                      getItemLayout={(data,index)=>(
                      {length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
                      )}

                      //onEndReachedThreshold={5}
                      onEndReached={(info)=>{
                      console.warn(info.distanceFromEnd);
                      }}

                      //onViewableItemsChanged={(info)=>{
                      //console.warn(info);
                      //}}
                      data={data}>
                  </FlatList>
              </View>

          </View>
    );
  }
}
const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
export default App = StackNavigator({
  Home:{screen:FlatListDemo}
})
