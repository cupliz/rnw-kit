import React from "react";
import { View } from "react-native"

export { BrowserRouter as Router, NavLink as Link, Route, Redirect, Switch } from "react-router-dom";
export const AndroidBackButton = props => <View>{props.children}</View>;
export const Setup = props => <View {...props}>{props.children}</View>
