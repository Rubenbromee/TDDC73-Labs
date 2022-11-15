import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
const Stack = createNativeStackNavigator();
type Repo = {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  created_at: string; // ISO-String
};
// Function for retrieveing a list of repo's
function retrieveRepos(): Repo[] {
  return [
    {
      created_at: '',
      description: '',
      stargazers_count: 0,
      language: '',
      name: '',
    },
    {
      created_at: '',
      description: '',
      stargazers_count: 0,
      language: '',
      name: '',
    },
    {
      created_at: '',
      description: '',
      stargazers_count: 0,
      language: '',
      name: '',
    },
    {
      created_at: '',
      description: '',
      stargazers_count: 0,
      language: '',
      name: '',
    },
    {
      created_at: '',
      description: '',
      stargazers_count: 0,
      language: '',
      name: '',
    },
  ];
}
// Function for sorting a given list of repo's
function filterRepos(repos: Repo[]): Repo[] {
  return repos;
}
// Component for listing repo's on click navigate to that repo
const Overview: React.FC = () => {
  return <View></View>;
};
// Component for displaying a given repo
const Repository: React.FC = () => {
  return <View></View>;
};
type RootStackParamList = {
  Overview: {
    repos: Repo[];
  };
  Repository: {
    repo: Repo;
  };
};
const App = () => {
  // BLOCKER
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={{title: 'Select a trending repo!'}}
        />
        <Stack.Screen
          options={{title: 'This is a repo'}}
          name="Repository"
          component={Repository}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
