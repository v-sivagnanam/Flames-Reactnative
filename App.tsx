/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{ useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type InputProps = PropsWithChildren<{
  title: string;
  setName:any;
  name:string;
}>;

type ButtonProps = PropsWithChildren<{
  title: string;
  onPress: () => void;
  buttonStatus:boolean;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}


function Input({title , setName,name }: InputProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.InputTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
    </View>
  );
}

function StyleButon({title,onPress,buttonStatus}:ButtonProps): React.JSX.Element {

  return (
    <View style={styles.sectionContainer}>
        <Button disabled={buttonStatus} title={title} onPress={onPress}/>
    </View>
  )
}



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFlames = () => {
    let name1Chars = name1.toLowerCase().replace(/\s/g, '');
    let name2Chars = name2.toLowerCase().replace(/\s/g, '');

    let commonChars = '';
    for (let char of name1Chars) {
      if (name2Chars.includes(char)) {
        name2Chars = name2Chars.replace(char, '');
        commonChars += char;
      }
    }

    let remainingChars = name1Chars.length + name2Chars.length;
    let flames = ['Friends', 'Love', 'Affection', 'Enemies', 'Marriage',  'Siblings'];
    let index = remainingChars % flames.length;

    setResult(flames[index]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Flames Game">
            Testing Mode Created by Sivagnanam
          </Section>
          <Input title="Enter First Name:" setName={setName1} name={name1}/>
          <Input title="Enter Second Name:" setName={setName2} name={name2}/>
        </View>
        <StyleButon title='Calculate' buttonStatus={!name1 || !name2} onPress={calculateFlames}/>
        {result && (
          <>
        <Section title="Open Your eye">
        </Section>
        <Section title={result}></Section>
        </>
       )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign:'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  InputTitle: {
    fontSize:16,
    fontWeight:'400'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;
