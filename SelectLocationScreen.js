// screens/SelectLocationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectLocationScreen({ navigation }) {
  const [zoneOpen, setZoneOpen] = useState(false);
  const [zoneValue, setZoneValue] = useState(null);
  const [zoneItems, setZoneItems] = useState([
    { label: 'Banasree', value: 'banasree' },
    { label: 'Dhanmondi', value: 'dhanmondi' },
  ]);

  const [areaOpen, setAreaOpen] = useState(false);
  const [areaValue, setAreaValue] = useState(null);
  const [areaItems, setAreaItems] = useState([
    { label: 'Block D', value: 'block_d' },
    { label: 'Block E', value: 'block_e' },
  ]);

  // Custom Arrow Icons để thay thế ảnh mặc định
  const CustomArrowDown = () => (
    <Ionicons name="chevron-down" size={20} color="black" />
  );

  const CustomArrowUp = () => (
    <Ionicons name="chevron-up" size={20} color="black" />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={require('./assets/location.png')}
        style={styles.illustration}
      />

      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>Switch on your location to stay in tune with what's happening in your area</Text>

      <Text style={styles.label}>Your Zone</Text>
      <DropDownPicker
        open={zoneOpen}
        value={zoneValue}
        items={zoneItems}
        setOpen={setZoneOpen}
        setValue={setZoneValue}
        setItems={setZoneItems}
        style={styles.dropdown}
        placeholder="Select your zone"
        ArrowDownIconComponent={CustomArrowDown} // Thay bằng icon
        ArrowUpIconComponent={CustomArrowUp}    // Thay bằng icon
      />

      <Text style={styles.label}>Your Area</Text>
      <DropDownPicker
        open={areaOpen}
        value={areaValue}
        items={areaItems}
        setOpen={setAreaOpen}
        setValue={setAreaValue}
        setItems={setAreaItems}
        style={styles.dropdown}
        placeholder="Select your area"
        ArrowDownIconComponent={CustomArrowDown} // Thay bằng icon
        ArrowUpIconComponent={CustomArrowUp}    // Thay bằng icon
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 80,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    marginTop: 12,
  },
  dropdown: {
    borderColor: '#ccc',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});