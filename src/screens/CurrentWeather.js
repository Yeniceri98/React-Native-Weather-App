import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather({ weatherData }) {
	console.log('Weather Data: ', weatherData);

	const {
		main: { temp, feels_like, temp_max, temp_min },
		weather,
	} = weatherData;

	const weatherCondition = weather[0].main;

	return (
		<SafeAreaView
			style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}
		>
			<View style={styles.container}>
				{/* <Feather name="sun" size={100} color="black" />    NOT: Bunun gibi tüm statik değerleri değiştirdik */}
				<Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
				<Text style={styles.temp}>{temp}°</Text>
				<Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
				<RowText
					messageOne={`High: ${temp_max}°`}
					messageTwo={`Low: ${temp_min}°`}
					containerStyle={styles.highlowWrapper}
					messageOneStyle={styles.highlowText}
					messageTwoStyle={styles.highlowText}
				/>
			</View>
			<RowText
				//messageOne={weatherType.Clear.message1}
				//messageTwo={weatherType.Clear.message2}
				messageOne={weather[0].description}
				messageTwo={weatherType[weatherCondition].message}
				containerStyle={styles.bodyWrapper}
				messageOneStyle={styles.description}
				messageTwoStyle={styles.message}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: 'pink',
		paddingTop: StatusBar.currentHeight,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	temp: {
		fontSize: 48,
	},
	feels: {
		fontSize: 30,
	},
	highlowText: {
		fontSize: 20,
		paddingRight: 5,
	},
	highlowWrapper: {
		flexDirection: 'row',
	},
	bodyWrapper: {
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		paddingLeft: 20,
		marginBottom: 40,
	},
	description: {
		fontSize: 48,
	},
	message: {
		fontSize: 30,
	},
});
