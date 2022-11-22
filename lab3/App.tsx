import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    MD3DarkTheme as DefaultTheme,
    MD3Theme,
} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';

type Repo = {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    created_at: string; // ISO-String
};

// Typing for navigation components
type RootStackParamList = {
    Overview: {};
    Repository: {
        repo: Repo;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function getRequestURL(from_date_iso: string) {
    return `https://api.github.com/search/repositories?q=language:rust&sort=stars&order=desc&created:>${from_date_iso}`;
}

// Function for sorting a given list of repo's
function filterRepos(repos: Repo[]): Repo[] {
    return repos;
}

// Shorten text to a given number of characters and add ellipsis
const shortenDiscriptionText = (text: string, length: number) => {
    let shortText = text.substring(0, length);
    return shortText.length >= length ? shortText.concat('', '...') : shortText;
};

// Component for listing repo's on click navigate to that repo
const Overview: React.FC = () => {
    const {width, height} = useWindowDimensions();

    const {repos} = useGithubRepoData();
    if (repos.length == 0) {
        return (
            <View
                style={{
                    width: width,
                    height: height,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            {repos.map((repo, idx) => {
                return <RepoItem repo={repo} key={idx} />;
            })}
        </ScrollView>
    );
};

type RepositoryProps = NativeStackScreenProps<RootStackParamList, 'Repository'>;

// Component for displaying detailed information about a given repo
const Repository: React.FC<RepositoryProps> = ({route, navigation}) => {
    return (
        <View>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                {route.params.repo.name}
            </Text>
            <View style={{paddingTop: 32}}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                    {route.params.repo.description}
                </Text>
            </View>
        </View>
    );
};

type RepoItemProps = {
    repo: Repo;
};

// Component for displaying a repo in a list
const RepoItem: React.FC<RepoItemProps> = ({repo}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Repository' as never, {repo: repo} as never);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={{width: '80%'}}>
            <View
                style={{
                    backgroundColor: 'white',
                    marginVertical: 5,
                    borderRadius: 5,
                    padding: 10,
                }}>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    {repo.name}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>
                        Created:{' '}
                    </Text>
                    <Text style={{color: 'black'}}>
                        {new Date(repo.created_at).toDateString()}
                    </Text>
                </View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
                    Description
                </Text>
                <Text style={{color: 'black'}}>
                    {shortenDiscriptionText(repo.description, 25)}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>
                        Language:{' '}
                    </Text>
                    <Text style={{color: 'black'}}>{repo.language}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: 'black',
                        }}>
                        Stars:{' '}
                    </Text>
                    <Text style={{color: 'black'}}>
                        {repo.stargazers_count}
                    </Text>

                    {/* <Pressable
                    style={{
                        backgroundColor: buttonColor,
                        width: 100,
                        height: 30,
                        alignItems: 'center',
                        borderRadius: 3,
                        justifyContent: 'center',
                    }}
                    onPress={() =>
                        navigation.navigate(
                            'Repository' as never,
                            {repo: repo} as never,
                        )
                    }
                    onPressIn={() => setButtonColor('#0a517e')}
                    onPressOut={() => setButtonColor('#24a0ed')}>
                    <Text style={{color: 'white'}}>Read more</Text>
                </Pressable> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const useGithubRepoData = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        // Make request
        fetch(getRequestURL('2022-10-01'))
            .then(value => value.json())
            .then(json => {
                setRepos(
                    json.items.map((repoEntry: any) => {
                        return {
                            created_at: repoEntry.created_at,
                            description: repoEntry.description,
                            language: repoEntry.language,
                            name: repoEntry.name,
                            stargazers_count: repoEntry.stargazers_count,
                        };
                    }),
                );
            });
    }, []);

    return {repos};
};

const theme: MD3Theme = {
    ...DefaultTheme,
};

const App = () => {
    return (
        <PaperProvider theme={theme}>
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
        </PaperProvider>
    );
};

export default App;
