<h2 align="center">
  RNW-Kit
</h2>

<p align="center">
  Starting react native for web in easy way
</p>

---

This package depend on open source package:
* [react] - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [react-native] - A framework for building native apps with React.
* [react-native-web] - React Native for Web

and optional package:
* [react-app-rewired] - Override webpack configs without ejecting
* [react-router] - Declarative routing for React

### Getting Started
Install:
```sh
$ git clone https://github.com/cupliz/rnw-kit.git
$ cd rnw-kit
$ npm install
```

##### Web:
To run on web browser
```sh
$ npm run build
$ npm run web
```

##### Android:
Before starting app in Android, make sure you have virtual device connected
```sh
$ adb devices
$ adb connect [your_virtual_device:port]
```
then:
```sh
$ react-native run-android
```

##### IOS:
check your available devices by running 
```sh
$ xcrun simctl list devices
```
then run:
```sh
$ react-native run-ios
```
