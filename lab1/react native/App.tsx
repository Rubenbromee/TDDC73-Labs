/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  ButtonProps,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  TextInput,
} from 'react-native';

const CustomButton: React.FC = () => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: pressed
            ? 'rgb(200, 200, 200)'
            : 'rgb(225, 225, 225)',
        },
      ]}
      onPress={() => {}}>
      <Text style={styles.button.text}>BUTTON</Text>
    </Pressable>
  );
};

const App = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={{backgroundColor: 'rgb(45, 133, 119)'}}>
        <Text
          style={{
            paddingVertical: 15,
            color: 'white',
            paddingLeft: 10,
            fontSize: 20,
          }}>
          Example 1
        </Text>
      </View>
      <View style={{...styles.section, ...styles.topSection}}>
        <Image
          style={styles.topImage}
          source={{
            uri: 'https://design4circle.eu/wp-content/uploads/2019/03/just_arrows.png',
          }}
        />
      </View>
      <View
        style={{
          ...styles.section,
          flex: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View>
          <CustomButton />
          <CustomButton />
        </View>
        <View>
          <CustomButton />
          <CustomButton />
        </View>
      </View>
      <View
        style={{
          ...styles.section,
          flex: 2,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              ...styles.text,
              paddingRight: 25,
              marginTop: 'auto',
              marginBottom: 'auto',
            }}>
            Email
          </Text>
          <TextInput style={styles.textInput} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'gray',
  },
  section: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  topSection: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 20,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    text: {
      color: 'black',
    },
  },
  textInput: {
    borderBottomWidth: 1,
    color: 'black',
    width: '60%',
  },
});

export default App;
