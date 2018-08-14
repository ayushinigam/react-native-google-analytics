import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {trackEvent} from '../utils/analytics.utils'
import {YELLOW_SCREEN} from  '../config/gaEventsConstants.config'

class Yellow extends Component {

  navigateToRedScreen = () => {
    // Call the event tracker to navigate to the red screen
    trackEvent(YELLOW_SCREEN.eventCategory, YELLOW_SCREEN.events.NAVIGATE);
    this.props.goToScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.textButton} onPress={this.navigateToRedScreen}>See the next color!</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToScreen: () => {
    dispatch(NavigationActions.navigate({routeName: 'Red'}))
  }
});

export default connect(null, mapDispatchToProps)(Yellow)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    backgroundColor: '#FFFFFF',
    padding: 10
  }
});
