import {createStackNavigator} from 'react-navigation';
import Yellow from '../components/Yellow.component';
import Red from '../components/Red.component';

const Router = createStackNavigator({
  Yellow: {
    screen: Yellow,
    navigationOptions: {
      title: 'Yellow Screen',
    }
  },
  Red: {
    screen: Red,
    navigationOptions: {
      title: 'Red Screen',
    }
  }
});

export default Router;
