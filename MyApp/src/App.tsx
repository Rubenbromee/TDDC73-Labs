/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as R from 'ramda';

import React, { useEffect, useState, type PropsWithChildren } from 'react';
import {
	Dimensions,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';
import { Image } from 'react-native';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { DropDown } from './DropDown';
import { TextInputField } from './TextInputField';

let backgroundImage = require('./img/background.jpeg');

const chip = require('./img/chip.png');
const swedbank = require('./img/swedbank.png');
const chipProperties = Image.resolveAssetSource(chip);

const Test: React.FC = () => {
	return (
		<View>
			<Text>BAJS</Text>
		</View>
	);
};

const months = [
	{ label: '01', value: '01' },
	{ label: '02', value: '02' },
	{ label: '03', value: '03' },
	{ label: '04', value: '04' },
	{ label: '05', value: '05' },
	{ label: '06', value: '06' },
	{ label: '07', value: '07' },
	{ label: '08', value: '08' },
	{ label: '09', value: '09' },
	{ label: '10', value: '10' },
	{ label: '11', value: '11' },
	{ label: '12', value: '12' },
]

// Generate years 2022 to 1977 for the year selection
const years = R.range(1977, 2023).reverse().map(num => {
	return {
		label: num.toString(), value: num.toString()
	}
});

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const App = () => {


	const [cardNumber, setCardNumber] = useState<string>();
	const [cardHolder, setCardHolder] = useState<string>();
	const [cvv, setCvv] = useState<string>();
	const [month, setMonth] = useState<string>('');
	const [year, setYear] = useState<string>('');
	const [backside, setBackside] = useState<boolean>(false);

	useEffect(() => {
		console.log(height);
	}, [])

	return (
		<SafeAreaView>
			<View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
				<ImageBackground source={backgroundImage} style={{ width: width * 0.8, height: 200 }} imageStyle={{ borderRadius: 12 }}>
					{
						!backside ?
							<>
								<View style={style.chip}>
									<Image source={chip} />
								</View>
								<View style={style.swedbank}>
									<Image source={swedbank} />
								</View>
								<Text style={style.cardNumber}> {cardNumber} </Text>
								<Text style={style.cardHolder}> {cardHolder}</Text>
								<Text style={style.expirationDate}>{month + '/' + year.substring(2, 4)}</Text>
							</> :
							<>
								<View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'black', width: width * 0.8, height: 40, top: '10%' }}></View>
								<View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white', width: width * 0.72, height: 40, top: '40%', left: '5%', justifyContent: 'center', alignItems: 'flex-end' }}>
									<Text style={{ marginRight: 5 }}>{cvv}</Text>
								</View>
							</>
					}

				</ImageBackground>
			</View>
			<View style={{ marginTop: 150 }}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<TextInputField label={'Card Number'} valueSetter={setCardNumber} width={350} topMargin={10} />
					<TextInputField label={'Card Holder'} valueSetter={setCardHolder} width={350} topMargin={10} />
				</View>
				<View style={{ flexDirection: 'row', width: width, alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ marginHorizontal: 10 }}>
						<DropDown listItems={months} valueSetter={setMonth} placeHolder='Month' />
					</View>
					<View style={{ marginHorizontal: 10 }}>
						<DropDown listItems={years} valueSetter={setYear} placeHolder='Year' />
					</View>
					<View style={{ marginHorizontal: 10 }}>
						<TextInputField label={'CVV'} valueSetter={setCvv} width={100} topMargin={4} onFocusFunction={setBackside} />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};


const style = StyleSheet.create({
	chip: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.60 }, { scaleY: 0.60 }],
		left: '-20%',
		top: '-15%',
	},
	swedbank: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.25 }, { scaleY: 0.25 }],
		left: '12%',
		top: '-50%'
	},
	cardNumber: {
		...StyleSheet.absoluteFillObject,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		left: '5%',
		top: '45%'
	},
	cardHolder: {
		...StyleSheet.absoluteFillObject,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		left: '5%',
		top: '80%'
	},
	expirationDate: {
		...StyleSheet.absoluteFillObject,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		left: '70%',
		top: '80%'
	}
});

export default App;
