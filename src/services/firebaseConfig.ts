interface Config{
	apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
} //when using typescirpt


const firebaseconfig: Config = {
    apiKey: "AIzaSyBLaQmjQN6KA5awa7pT0Ucl3ZOoDwJIE34",
    authDomain: "catalogs-1dfc4.firebaseapp.com",
    databaseURL: "https://catalogs-1dfc4.firebaseio.com",
    projectId: "catalogs-1dfc4",
    storageBucket: "catalogs-1dfc4.appspot.com",
    messagingSenderId: "1023763650428",
    appId: "1:1023763650428:web:154f5ab020fc9d4be036f9",
    measurementId: "G-QG6ZP6HH66"
}

export default firebaseconfig;