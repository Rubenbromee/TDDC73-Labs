import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


type Repo = {
	name: string;
	description: string;
	language: string;
	stargazers_count: number;
	created_at: string; // ISO-String
};

// Typing for navigation components
type RootStackParamList = {
	Overview: {
		repos: Repo[];
	};
	Repository: {
		repo: Repo;
	};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Function for retrieveing a list of repo's
function retrieveRepos(): Repo[] {
	return [
		{
			created_at: '2022-01-01',
			description: 'At vero  ',
			stargazers_count: 1,
			language: 'Java',
			name: 'Java Project',
		},
		{
			created_at: '2022-01-02',
			description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
			stargazers_count: 2,
			language: 'Python',
			name: 'Python Project',
		},
		{
			created_at: '2022-01-03',
			description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
			stargazers_count: 3,
			language: 'JavaScript',
			name: 'JavasSript Project',
		},
		{
			created_at: '2022-01-04',
			description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
			stargazers_count: 4,
			language: 'C++',
			name: 'C++ Project',
		},
		{
			created_at: '2022-01-05',
			description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
			stargazers_count: 5,
			language: 'C',
			name: 'C Project',
		},
	];
}

// Function for sorting a given list of repo's
function filterRepos(repos: Repo[]): Repo[] {
	return repos;
}

// Shorten text to a given number of characters and add ellipsis
const shortenDiscriptionText = (text: string, length: number) => {
	let shortText = text.substring(0, length);
	return shortText.length >= length ? shortText.concat('', '...') : shortText;
}

// Component for listing repo's on click navigate to that repo
const Overview: React.FC = () => {
	const repos = retrieveRepos();

	return (
		<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
			{repos.map((repo, idx) => {
				return <RepoItem repo={repo} key={idx} />
			})}
		</ScrollView>
	);
};

type RepositoryProps = NativeStackScreenProps<RootStackParamList, 'Repository'>

// Component for displaying detailed information about a given repo
const Repository: React.FC<RepositoryProps> = ({ route, navigation }) => {
	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
				{route.params.repo.name}
			</Text>
		</View>
	);
};

type RepoItemProps = {
	repo: Repo,
}

// Component for displaying a repo in a list
const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
	const navigation = useNavigation();
	const [buttonColor, setButtonColor] = useState('#24a0ed')
	return (
		<View style={{ backgroundColor: 'white', width: '90%', marginVertical: 5, borderRadius: 5, padding: 10 }}>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{repo.name}</Text>
			<View style={{ flexDirection: 'row', marginTop: 5 }}>
				<Text style={{ fontWeight: 'bold' }}>
					Created:{' '}
				</Text>
				<Text>
					{repo.created_at}
				</Text>
			</View>
			<Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>Description</Text>
			<Text>{shortenDiscriptionText(repo.description, 250)}</Text>
			<View style={{ flexDirection: 'row', marginTop: 5 }}>
				<Text style={{ fontWeight: 'bold' }}>Language: </Text>
				<Text>{repo.language}</Text>
			</View>
			<View style={{ flexDirection: 'row', marginTop: 5 }}>
				<Text style={{ fontWeight: 'bold' }}>
					Stars:{' '}
				</Text>
				<Text>
					{repo.stargazers_count}
				</Text>
				<View style={{ width: '85%', justifyContent: 'flex-end', flexDirection: 'row' }}>
					<Pressable
						style={{ backgroundColor: buttonColor, width: 100, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}
						onPress={() => navigation.navigate('Repository' as never, { repo: repo } as never)}
						onPressIn={() => setButtonColor('#0a517e')}
						onPressOut={() => setButtonColor('#24a0ed')}
					>
						<Text style={{ color: 'white' }}>Read more</Text>
					</Pressable>
				</View>
			</View>
		</View >
	)
}



const App = () => {
	// Get list of unfiltered repos

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Overview"
					component={Overview}
					options={{ title: 'Select a trending repo!' }}
				/>
				<Stack.Screen
					options={{ title: 'This is a repo' }}
					name="Repository"
					component={Repository}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;