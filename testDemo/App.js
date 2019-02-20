import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

class Tab1 extends Component {
  state = {
    isVisible: false,
  };

  hideModal(isTab2 = false) {
    this.setState({
      isVisible: !this.state.isVisible,
    });
    if (isTab2) {
      this.props.change();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.hideModal()}
          title="button"
          color="#841584"
        />
        <Modal
          animationType={'fade'}
          transparent
          visible={this.state.isVisible}
          onRequestClose={() => this.hideModal()}
        >

          <TouchableOpacity style={styles.modal} onPress={() => this.hideModal(true)}>
            <View style={styles.modalContent}>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: 'https://imgs.xkcd.com/comics/physics_suppression.png' }}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    )
  }
}

class Tab2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          tab2
        </Text>
      </View>
    )
  }
}

export default class App extends Component<Props> {
  state = {
    selectedTab: true,
  };

  changeTab() {
    console.log('dada');
    this.setState({
      selectedTab: false,
    })
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={selectedTab}
          title="tab1"
          titleStyle={{ marginBottom: 10 }}
          selectedTitleStyle={{ fontSize: 16 }}
          onPress={() => this.setState({ selectedTab: true })}>
          <Tab1 change={() => this.changeTab()} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={!selectedTab}
          title="tab2"
          titleStyle={{ marginBottom: 10 }}
          selectedTitleStyle={{ fontSize: 16 }}
          onPress={() => this.setState({ selectedTab: false })}>
          <Tab2 />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modal: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 50 + (Platform.OS === 'android' ? 43 : 63),
    backgroundColor: 'rgba(127, 127, 127, .6)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 15,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
