import React from 'react'
import { View, Platform } from "react-native"

export { NativeRouter as Router, AndroidBackButton, Link, Route, Redirect, Switch } from "react-router-native";
export const Setup = class Common extends React.Component {
  constructor() {
    super();
    this.state = {isReady: false };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View {...this.props}>{this.props.children}</View>
    )
  }
}