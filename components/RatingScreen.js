import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

class RatingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ratings: 3,
    };
  }

  updateRating = num => {
    this.setState({ratings: num + 1});
  };

  render() {
    let stars = [];
    for (var i = 1; i <= 5; i++) {
      let path = require('./star-filled.png');
      if (i > this.state.ratings) {
        path = require('./star-unfilled.png');
      }
      stars.push(<Image style={styles.image} source={path} />);
    }

    return (
      <View style={styles.container}>
        <View style={styles.starContainer}>
          {stars.map((item, index) => (
            <TouchableOpacity onPress={() => this.updateRating(index)}>
              {item}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    display: 'flex',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#515354',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
    minWidth: 100,
    marginTop: 40,
  },

  buttonText: {
    fontSize: 16,
    // textTransform: 'capitalize',
    color: '#FFFFFF',
  },
});

export default RatingScreen;
