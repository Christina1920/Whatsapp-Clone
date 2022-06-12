import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

export default class Source extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Source Listing',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {textAlign: 'center', flex: 1},
    };
  };
  constructor(props) {
    super(props);
    setTimeout(() => {
      StatusBar.setBackgroundColor('#128C7E');
    }, 100);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api?results=10')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = data => (
    
    <TouchableOpacity style={styles.list} onPress={() => this.props.navigation.navigate('Chat')}>
      <View style={styles.main}>
        <View style={styles.row}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
            source={{uri: `${data.item.picture.large}`}}
          />
        </View>
        <View>
          <Text style={styles.label}>
            {data.item.name.title} {data.item.name.first} {data.item.name.last}
          </Text>
          <Text style={styles.label1}>{data.item.gender} </Text>
          <Text style={styles.label1}>{data.item.dob.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#075E54" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource.results}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flexDirection: 'row'
  },
  loader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
  },
  label: {
    paddingLeft: 29,
  },
  label1: {
    paddingLeft: 30,
  },
});
