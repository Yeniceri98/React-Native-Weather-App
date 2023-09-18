import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	FlatList,
	StatusBar,
	Image,
	ImageBackground,
} from 'react-native';

import ListItem from '../components/ListItem';
// import DATA from '../../data.json';

export default function UpcomingWeather({ weatherData }) {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../../assets/cloud.png')} style={styles.image}>
				<FlatList
					//data={DATA}
					data={weatherData}
					renderItem={({ item }) => (
						<ListItem
							condition={item.weather[0].main}
							dt_txt={item.dt_txt}
							min={item.main.temp_min}
							max={item.main.temp_max}
						/>
					)}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'cornflowerblue',
		paddingTop: StatusBar.currentHeight,
	},
	image: {
		flex: 1,
	},
});

/*
	Sample Website for Images: https://pixabay.com/
*/
