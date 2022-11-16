import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';
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
			created_at: '2022-01-01',
			description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
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
// Component for displaying a given repo
const Repository: React.FC = () => {
	return <View></View>;
};

type RepoItemProps = {
	repo: Repo
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
	return (
		<View style={{ backgroundColor: 'white', width: '80%', marginVertical: 5 }}>
			<Text>{repo.name}</Text>
			<Text>Created at: {repo.created_at}</Text>
			<Text>{repo.description}</Text>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ fontWeight: 'bold' }}>Language: </Text>
				<Text>{repo.language}</Text>
			</View>

			<Text>Stars: {repo.stargazers_count}</Text>
		</View>
	)
}
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
