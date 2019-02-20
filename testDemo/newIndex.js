import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import {
  FlatList,
  Image,
  InteractionManager,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import BaseView from '../../components/BaseView';
import Loading from '../../components/Loading';

import styles from '../../styles/style';
import colors from '../../styles/colors';

/**
 * 提报页面
 */
const styles = StyleSheet.create({});

class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const {} = this.props;
    return (
      <View title="问答">
      </View>
    );
  }
}

function mapStateToProps(state) {
  // const { ListFetching, questionList } = state.qa;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(detail);
