import React from "react";
import MapView, { Marker } from "react-native-maps";

import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
// import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 28.603179;
const LONGITUDE = 77.2011984;
const LATITUDE_DELTA = 0.1722;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class BusLocationMap extends React.Component {
  onMapPress = (e) => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
    });
  };
  // showWelcomeMessage = {} =>{
  //   Alert.alert{'Welcome to Apni Bus Delhi'}
  // }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{ latitude: 28.549766, longitude: 77.185222 }}
            title={"R k Puram Metro"}
          ></Marker>
          <Marker
            coordinate={{ latitude: 28.749766, longitude: 77.195222 }}
            title={"Rm Metro"}
          ></Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
