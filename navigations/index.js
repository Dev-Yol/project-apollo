import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, Register } from "screens";
import { Colors, Metrics } from '@constants'
const { Intro, Step1, Step2 } = Register
const defaultConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.light
        },
        headerTintColor: Colors.darkGray,
    }
}

const LoginStack = createStackNavigator(
    {
        loginScreen: {
            screen: Login,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
    },
);

const RegisterStack = createStackNavigator(
    {
        IntroScreen: {
            screen: Intro,
            navigationOptions: {
                headerShown: false
            }
        },
        Step1Screen: {
            screen: Step1,
            navigationOptions: {
                title: ''
            }
        },
        Step2Screen: {
            screen: Step2,
            navigationOptions: {
                title: '',
                headerShown: true
            }
        }
    },
    {
        initialRouteName: 'IntroScreen',
        ...defaultConfig
    },
);
const StackNavigator = createStackNavigator(
    {
        // AuthLoading: AuthLoadingScreen,
        LoginScreen: LoginStack,
        RegisterScreen: RegisterStack,
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'RegisterScreen',
        ...defaultConfig
    }
)
export default createAppContainer(StackNavigator);