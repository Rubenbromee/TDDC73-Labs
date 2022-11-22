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

import React, { useEffect, useState } from 'react';
import {
	Dimensions,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { DropDown } from './DropDown';
import { TextInputField } from './TextInputField';

let backgroundImage = require('./img/background.jpeg');

const chip = require('./img/chip.png');
const swedbank = require('./img/swedbank.png');
const amex = require('./img/amex.png');
const dinersclub = require('./img/dinersclub.png');
const discover = require('./img/discover.png');
const mastercard = require('./img/mastercard.png');
const visa = require('./img/visa.png');

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
];

// Generate years 2022 to 1977 for the year selection
const years = R.range(1977, 2023)
	.reverse()
	.map(num => {
		return {
			label: num.toString(),
			value: num.toString(),
		};
	});

const width = Dimensions.get('screen').width;

// Takes in whatever string, returns a sanitized version of that string only containing alpha numeric numbers
function numberSanitizier(in_data: string): string {
	return in_data.replace(/[^0-9.]+/, '');
}

// Format incoming cardNumber containing 0 to 16 numbers as XXXX SPACE XXXX SPACE XXXX SPACE XXXX
function formatedCardNumber(cardNumber: string): string {
	let formattedString = '';
	for (let i = 0; i < cardNumber.length; i++) {
		formattedString += cardNumber[i];
		if ((i + 1) % 4 == 0) formattedString += ' ';
	}
	return formattedString;
}

type cardNetwork = 'visa' | 'mastercard' | 'american express' | 'discover' | 'diners club'

const App = () => {
	const [cardNumber, setCardNumber] = useState<string>('');
	const [cardHolder, setCardHolder] = useState<string>('');
	const [cvv, setCvv] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [year, setYear] = useState<string>('');
	const [backside, setBackside] = useState<boolean>(false);
	const [cardNetwork, setCardNetwork] = useState<cardNetwork>();
	const [maxCardNumberLength, setMaxCardNumberLength] = useState<number>(17)

	/* We do these 2 with custom handlers since they behave differently than normal */
	const onCardNumberChange = (newValue: string) => {
		if (newValue.length == 17) return;
		setCardNumber(numberSanitizier(newValue));
	};
	const onCvvChange = (newValue: string) => {
		if (newValue.length == 4) return;
		setCvv(numberSanitizier(newValue));
	};

	// Switch card network depending on number
	useEffect(() => {
		if (cardNumber[0] == '4') {
			setCardNetwork('visa')
			setMaxCardNumberLength(17)
		}
		else if (cardNumber[0] == '5') {
			setCardNetwork('mastercard')
			setMaxCardNumberLength(17)
		}
		else if (cardNumber[0] == '3' && (cardNumber[1] == '4' || cardNumber[1] == '7')) {
			setCardNetwork('american express')
			setMaxCardNumberLength(16)
		}
		else if (cardNumber[0] == '6') {
			setCardNetwork('discover')
			setMaxCardNumberLength(17)
		}
		else if (cardNumber[0] == '3' && (cardNumber[1] == '0' || cardNumber[1] == '6' || cardNumber[1] == '8')) {
			setCardNetwork('diners club')
			setMaxCardNumberLength(15)
		}
	}, [cardNumber])

	return (
		<KeyboardAvoidingView behavior="position">
			<SafeAreaView>
				{/* Card starts here */}
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						paddingTop: 25,
					}}>
					<ImageBackground
						source={backgroundImage}
						style={{ width: width * 0.8, height: 200 }}
						imageStyle={{ borderRadius: 12 }}>
						{!backside ? (
							<>
								<View style={style.chip}>
									<Image source={chip} />
								</View>
								{
									(cardNetwork == 'visa' && cardNumber != '') &&
									<View style={style.visa}>
										<Image source={visa} />
									</View>
								}
								{
									(cardNetwork == 'american express' && cardNumber != '') &&
									<View style={style.amex}>
										<Image source={amex} />
									</View>
								}
								{
									(cardNetwork == 'diners club' && cardNumber != '') &&
									<View style={style.dinersclub}>
										<Image source={dinersclub} />
									</View>
								}
								{
									(cardNetwork == 'discover' && cardNumber != '') &&
									<View style={style.discover}>
										<Image source={discover} />
									</View>
								}
								{
									(cardNetwork == 'mastercard' && cardNumber != '') &&
									<View style={style.mastercard}>
										<Image source={mastercard} />
									</View>
								}
								<Text style={style.cardNumber}>
									{' '}
									{formatedCardNumber(cardNumber)}{' '}
								</Text>
								<Text style={style.cardHolder}>
									{' '}
									{cardHolder}
								</Text>
								<Text style={style.expirationDate}>
									{month + '/' + year.substring(2, 4)}
								</Text>
							</>
						) : (
							<>
								<View
									style={{
										...StyleSheet.absoluteFillObject,
										backgroundColor: 'black',
										width: width * 0.8,
										height: 40,
										top: '10%',
									}}></View>
								<View
									style={{
										...StyleSheet.absoluteFillObject,
										backgroundColor: 'white',
										width: width * 0.72,
										height: 40,
										top: '40%',
										left: '5%',
										justifyContent: 'center',
										alignItems: 'flex-end',
									}}>
									<Text style={{ marginRight: 5 }}>{cvv}</Text>
								</View>
							</>
						)}
					</ImageBackground>
				</View>
				{/* Card ends here */}
				<View style={{ marginTop: 25 }}>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<TextInputField
							value={cardNumber}
							label={'Card Number'}
							setValue={onCardNumberChange}
							width={350}
							topMargin={10}
							onFocusFunction={() => setBackside(false)}
						/>
						<TextInputField
							value={cardHolder}
							label={'Card Holder'}
							setValue={setCardHolder}
							width={350}
							topMargin={10}
							onFocusFunction={() => setBackside(false)}
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: width,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<View style={{ marginHorizontal: 10 }}>
							<DropDown
								listItems={months}
								valueSetter={setMonth}
								placeHolder="Month"
							/>
						</View>
						<View style={{ marginHorizontal: 10 }}>
							<DropDown
								listItems={years}
								valueSetter={setYear}
								placeHolder="Year"
							/>
						</View>
						<View style={{ marginHorizontal: 10 }}>
							<TextInputField
								value={cvv}
								label={'CVV'}
								setValue={onCvvChange}
								width={100}
								topMargin={4}
								onFocusFunction={() => setBackside(true)}
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView >
	);
};

const style = StyleSheet.create({
	chip: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
		left: '-20%',
		top: '-15%',
	},
	swedbank: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.25 }, { scaleY: 0.25 }],
		left: '12%',
		top: '-50%',
	},
	cardNumber: {
		...StyleSheet.absoluteFillObject,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		left: '5%',
		top: '45%',
	},
	cardHolder: {
		...StyleSheet.absoluteFillObject,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		left: '5%',
		top: '80%',
	},
	expirationDate: {
		...StyleSheet.absoluteFillObject,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		left: '70%',
		top: '80%',
	},
	visa: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.25 }, { scaleY: 0.25 }],
		left: '70%',
		top: '-45%',
	},
	mastercard: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.25 }, { scaleY: 0.25 }],
		left: '65%',
		top: '-45%',
	},
	amex: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.25 }, { scaleY: 0.25 }],
		left: '65%',
		top: '-45%',
	},
	dinersclub: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.25 }, { scaleY: 0.25 }],
		left: '65%',
		top: '-45%',
	},
	discover: {
		...StyleSheet.absoluteFillObject,
		transform: [{ scaleX: 0.05 }, { scaleY: 0.05 }],
		left: '27%',
		top: '-75%',
	},
});

export default App;
