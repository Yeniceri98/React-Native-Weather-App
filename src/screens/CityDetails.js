import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import moment from 'moment';

import IconText from '../components/IconText';

export default function CityDetails({ weatherData }) {
	const { name, country, population, sunrise, sunset } = weatherData;

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../../assets/city.png')} style={styles.image}>
				{/* <Text style={[styles.cityCountry, styles.city]}>City</Text> */}
				<Text style={[styles.cityCountry, styles.city]}>{name}</Text>
				<Text style={[styles.cityCountry, styles.country]}>{country}</Text>
				<View style={[styles.rowLayout, styles.populationWrapper]}>
					<IconText
						iconName="user"
						iconColor="red"
						bodyText={`Population: ${population}`}
						bodyTextStyles={styles.populationText}
					/>
				</View>
				<View style={[styles.rowLayout, styles.riseSetWrapper]}>
					<IconText
						iconName="sunrise"
						iconColor="yellow"
						bodyText={moment(sunrise).format('h:mm:ss a')}
						bodyTextStyles={styles.riseSetText}
					/>
					<IconText
						iconName="sunset"
						iconColor="orange"
						bodyText={moment(sunset).format('h:mm:ss a')}
						bodyTextStyles={styles.riseSetText}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//paddingTop: StatusBar.currentHeight,
	},
	image: {
		flex: 1,
	},
	cityCountry: {
		justifyContent: 'center',
		alignSelf: 'center',
		fontWeight: 'bold',
		color: 'white',
	},
	city: {
		fontSize: 30,
	},
	country: {
		fontSize: 40,
	},
	rowLayout: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	populationWrapper: {
		justifyContent: 'center',
		marginTop: 30,
	},
	populationText: {
		fontSize: 24,
		marginLeft: 8,
		color: 'red',
	},
	riseSetWrapper: {
		justifyContent: 'space-around',
		marginTop: 30,
	},
	riseSetText: {
		fontSize: 20,
		color: 'white',
	},
});
