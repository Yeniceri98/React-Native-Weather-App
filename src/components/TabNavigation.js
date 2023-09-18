import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import CityDetails from '../screens/CityDetails';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation({ weather }) {
	return (
		<Tab.Navigator
			screenOptions={{
				headerTitleAlign: 'center', // NOT: iOS'ta default olarak başlık center iken Android'de solda olur
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: {
					backgroundColor: 'khaki',
				},
				headerStyle: {
					backgroundColor: 'khaki',
				},
				headerTitleStyle: {
					color: 'tomato',
					fontSize: 24,
					fontWeight: 'bold',
				},
			}}
		>
			<Tab.Screen
				name="Current"
				//component={CurrentWeather}	// NOT: Real Data'yı "weather" propsuyla aldık. Burada children olarak geçirmemiz gerektiği için yoruma alıp aşağıda children olarak düzenledik
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name="weather-cloudy"
							size={25}
							color={focused ? 'tomato' : 'black'}
						/>
					),
				}}
			>
				{() => <CurrentWeather weatherData={weather.list[0]} />}
			</Tab.Screen>
			<Tab.Screen
				name="Upcoming"
				//component={UpcomingWeather}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name="weather-cloudy-clock"
							size={25}
							color={focused ? 'tomato' : 'black'}
						/>
					),
				}}
			>
				{() => <UpcomingWeather weatherData={weather.list} />}
			</Tab.Screen>
			<Tab.Screen
				name="City"
				//component={CityDetails}
				options={{
					tabBarIcon: ({ focused }) => (
						<MaterialIcons name="location-city" size={25} color={focused ? 'tomato' : 'black'} />
					),
				}}
			>
				{() => <CityDetails weatherData={weather.city} />}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
