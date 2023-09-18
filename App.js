import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './src/components/TabNavigation';
import { useGetWeather } from './src/customHooks/useGetWeather';
import ErrorPage from './src/components/ErrorPage';

export default function App() {
	const [isLoading, isError, weather] = useGetWeather(); // Custom Hook
	console.log(isLoading, isError, weather);

	if (weather) {
		console.log('Weather: \n ', weather);
	}

	if (weather && weather.list) {
		return (
			<NavigationContainer>
				<TabNavigation weather={weather} />
			</NavigationContainer>
		);
	}

	return (
		<View style={styles.loadingContainer}>
			{isError ? <ErrorPage /> : <ActivityIndicator size="large" color="blue" />}
		</View>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingText: {
		fontSize: 18,
		marginTop: 8,
	},
});

/*
  ___ React Navigation ___ 
  https://reactnavigation.org/docs/getting-started/

  Tab Navigation: https://reactnavigation.org/docs/tab-based-navigation


	___ Expo Location ___
	https://docs.expo.dev/versions/latest/sdk/location/
*/
