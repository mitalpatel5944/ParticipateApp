import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import Router from "../Router"
import Landing from '../screens/landing'
import { colors } from "../theme";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.white,
    accent: 'yellow',
  },
};


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      Splash: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Splash: false })
    }, 3000);
  }
  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={colors.blue} barStyle={'dark'} />
          <Router />
        </View>
      </PaperProvider>
    );
  }
}
