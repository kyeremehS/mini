import { View, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'
import { UserLocationContext } from '../../Context/UserLocationContext'
import GlobalApi from '../../Utils/GlobalApi'

export default function HomeScreen() { 

  const {location,setLocation}=useContext(UserLocationContext);
  const [placeList,setPlaceList]=useState([])
  
  useEffect(() => {
    if (location) {
      GetNearByPlace();
    }
  }, [location]);

  const GetNearByPlace=()=>{
    const data={
      "includedTypes": ['electric_vehicle_charging_station'],
      "maxResultCount": 10,
      "locationRestriction": {
      "circle": {
      "center": {
        "latitude": location?.latitude,
        "longitude": location?.longitude
      },
      "radius": 5000.0
      }
    }
  }
  //   GlobalApi.NewNearByPlace(data).then(resp=>{
  //     console.log(JSON.stringify(resp.data));
  //   })
  // }
  GlobalApi.NewNearByPlace(data).then(resp => {
      console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data); // Assuming you want to update placeList with response data
    }).catch(error => {
      console.error("Error fetching nearby places:", error);
    });
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location)=>console.log(location)}/>
      </View>
      <AppMapView />
    </View>
  )
}   

const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20
  }
});