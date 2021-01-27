import { Platform } from 'react-native'

let platform = Platform.OS
const IS_ANDROID = platform === 'android'

export default {
	env: 'preprod',
	platform,
	is_dev: false,
	is_android: IS_ANDROID,
	cipher: {
		key: '',
		iv: ''
	},
	companyName: '',
	hotline1: '',
	hotline2: '',
	user_max_age: 100,
	user_min_age: 16,
	max_pin_length: 6,
	allowed_idle_time: 5 * 60000,
	checkLocation: true,
	defaultLatitude: '0.0',
	defaultLongitude: '0.0',
	password_criteria: {
		minLength: 8,
		hasNum: true,
		hasSpecialChar: true
	},
	country: {
		PH: 'Philippines'
	},
	currency: {
		PH: 'PhP'
	},
	mobilePrefixPH: '+63',
	mobileMaskPH: '+63 [000] [000] [0000]',
	error: {
		onlyLetters: 'Only letters are accepted',
		onlyLettersInName: 'Only letters are accepted in the name field',
		onlyNumbers: 'Numbers only',
		onlyAlphaNum: 'Letters and Numbers only',
		noSpecialChars: 'Letters and Numbers only',
		notAllowedChar: 'You used an invalid character',
		email: 'Invalid Email Address',
		emailNotAllowedChar: 'Numbers, letters, periods (.), underscores (_) and at signs (@) are the only characters allowed for the email address',
		birthdate: 'Invalid Birthdate',
		notAllowedAge: `You have not reached the minimum age requirement of 16 years old`,
		mobile: 'Invalid mobile number',
		pwdNotMatch: 'Passwords do not match',
		network: 'You have slow internet connection',
		atl1: '1attempt_left',
		atl2: '2attempt_left',
		blk1d: 'block_account_1day',
		blk: 'block_account',
		wrongInfo: 'You entered the wrong information',
		incompleteMiddlename: 'Please provide complete middle name',
		featureNotAvailable: 'Sorry, this is not yet available. We are still updating this feature to make sure we provide the best experience for you'
	},
	allowedSpecialChars: {
		common: [
			' ', '+', '-', '@', '$', '(', ')', '*', "/", ':', '#', ',', '=', '!', '?', '.', '[', ']', '{', '}', '<', '>', '&', '_', '%', '√', '|', '\\', '~', '•', '`', '...', '€', '¥', '£', '¢', 'α', 'β', '^', '®', '©', '™', 'π', '¤', ';'
		],
		email: [
			'@', '.', '_'
		],
		address: [
			'.', '-', ',', '&', '/', '\\', ' '
		]
	},
	suffixOptions: [
		{ label: 'Jr' },
		{ label: 'Sr' },
		{ label: 'I' },
		{ label: 'II' },
		{ label: 'III' },
		{ label: 'IV' },
		{ label: 'V' },
		{ label: 'Others' }
	],

}