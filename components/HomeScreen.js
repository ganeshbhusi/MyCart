import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      demoDataCopy: [],
      demoData: [],
    };
  }
  componentDidMount() {
    let demoData = [
      {
        imgUrl: 'https://picsum.photos/300/300',
        title: 'image1 title nfkhds fshd fhsdjkhf kjsdhfkj shdkjf h',
      },
      {
        imgUrl: 'https://picsum.photos/300/200',
        title: 'image2 title',
      },
      {
        imgUrl: 'https://picsum.photos/400/200',
        title: 'image3 title',
      },
      {
        imgUrl: 'https://picsum.photos/200/400',
        title: 'image4 title',
      },
      {
        imgUrl: 'https://picsum.photos/200/300',
        title: 'image5 title',
      },
      {
        imgUrl: 'https://picsum.photos/100/100',
        title: 'image6 title',
      },
      {
        imgUrl: 'https://picsum.photos/200/300',
        title: 'image7 title',
      },
    ];

    this.setState({demoData: demoData, demoDataCopy: demoData});
  }

  searchList = text => {
    this.setState({searchText: text});
    let filteredData = this.state.demoDataCopy.filter(item =>
      item.title.includes(text),
    );
    this.setState({demoData: filteredData});
    console.log(text);
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.searchBarView}>
          <Icon name="md-search" size={24} style={styles.iconStyle} />
          <TextInput
            style={styles.textInput}
            value={this.state.searchText}
            onChangeText={this.searchList}
          />
        </View>
        <FlatList
          data={this.state.demoData}
          numColumns={3}
          renderItem={({item, index}) => (
            <View style={styles.imaveView}>
              <Image
                source={{uri: item.imgUrl}}
                style={styles.imageDimensions}
              />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  searchBarView: {
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'silver',
  },
  imageDimensions: {
    width: Dimensions.get('window').width / 3 - 10,
    height: 180,
  },
  imaveView: {
    padding: 2,
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',
    color: 'black',
    marginBottom: 10,
    // margin: 3,
  },
  textInput: {
    flex: 1,
  },
  iconStyle: {
    padding: 10,
  },
});
export default HomeScreen;
