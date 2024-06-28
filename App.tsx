import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const API_KEY = 'c87e34481e0fc2e79f2d3dbeeb408990';


export default function App() {

  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("Rain");

  const onScreenLoad = () => {
    
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=15&lon=90&APPID=${API_KEY}&units=metric`
    )
    .then(res => res.json())
    .then(json =>{

      setTemp(json.main.temp);
      setWeather(json.weather[0].main);
      
    });

  }

  useEffect(() => {
    onScreenLoad();
  })


  return (
    <View style={[styles.weatherContainer, {backgroundColor: weatherConditions[weather].color}]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name={weatherConditions[weather].icon} color={'#fff'} />
        <Text style={styles.tempText}>{temp}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
      </View>
    </View> 
  );
}



const weatherConditions : any = {
  Rain:{
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'cant touch some grass',
    icon: 'weather-rainy'
  },

  Clear: {
    color: '#f7b733',
    title: 'Clear',
    subtitle: 'time to touch some grass!',
    icon: 'weather-sunny'
  },

  Thunderstorm: {
    color: '#616161',
    title: 'Storm',
    subtitle: 'well, hi poseidon!',
    icon: 'weather-lightning'
  },

  Clouds: {
    color: '#1F1C2C',
    title: 'Cloudy',
    subtitle: 'oh, melancholic.',
    icon: 'weather-cloudy'
  },

  Snow: {
    color: '#002dff',
    title: 'Snowy',
    subtitle: 'do you have a carrot?',
    icon: 'weather-snowy'
  },

  Drizzle: {
    color: '#076785',
    title: 'Drizzle',
    subtitle: 'come on! where is the real rain?',
    icon: 'weather-hail'
  },

  Haze: {
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'come on! where is the real rain?',
    icon: 'weather-hail'
  },

  Mist: {
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: 'silent hill referance!!'
  }

}


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});
