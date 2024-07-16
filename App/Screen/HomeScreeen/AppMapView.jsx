import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';
import MapViewStlye from '../../Utils/MapViewStyle.json'

export default function AppMapView() {

    const {location,setLocation} = useContext(UserLocationContext);   
  return location?.latitude&&( 
    <View>
      <MapView style={styles.map}
      provider={PROVIDER_DEFAULT}
      customMapStyle={MapViewStlye}
      // showsUserLocation={true}
      region={{
        latitude: 5.6311,
        longitude: -0.1609,
        latitudeDelta:0.0422,
        longitudeDelta:0.0421
      }} 
      >
        <Marker 
          coordinate={{
            latitude: 5.6311,
            longitude: -0.1609
          }}
        >

          {/* <Image source={require('./../../../assets/images/marker.png')} 
            style={{width:60,height:60}}
          /> */}
        </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
});