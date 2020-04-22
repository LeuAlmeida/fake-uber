/* eslint-disable react/state-in-constructor */
import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

export default function Map() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setRegion({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, // sucesso

      () => {}, // erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled
      />
    </View>
  );
}
