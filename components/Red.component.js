import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

class Red extends Component {
  render() {
    return (
      <View style={styles.redContainer}>
        <Text>We are here ✌🏻</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToScreen: () => dispatch(NavigationActions.navigate({routeName: 'Yellow'}))
});

export default connect(null, mapDispatchToProps)(Red)

const styles = StyleSheet.create({
  redContainer: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
