import React, { useState } from "react";
import { View, Text } from "react-native";
import {stylesSelect} from '../static/styles.js';
import Select from "./Select";

export default function SelectingOptions() {
  const [colors, setColors] = useState([
    { label: "none", value: null },
    { label: "Silver", value: "Silver" },
    { label: "Black", value: "Black" },
    { label: "Blue", value: "Blue" },
    { label: "Mettalic", value: "Mettalic" }
  ]);
  const [cars, setCars] = useState([
    { label: "none", value: null, colors: ["Silver", "Black", "Blue", "Mettalic"] },
    { label: "BMW", value: 1, colors: ["Mettalic", "Silver"] },
    { label: "Audi", value: 2, colors: ["Black", "Blue"] },
    { label: "Fiat", value: 3, colors: ["Silver", "Blue"] },
    { label: "Renault", value: 4, colors: ["Mettalic", "Black"] }
  ]);
  const [availableCars, setAvailableCars] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selection, setSelection] = useState("");

  return (
    <View style={stylesSelect.container}>
      <Select
        label="Color"
        items={colors}
        selectedValue={selectedColor}
        onValueChange={size => {
          setSelectedColor(size);
          setSelectedCar(null);
          setAvailableCars(cars.filter(i => i.colors.includes(size)));
        }}
      />
      <Select
        label="Car"
        items={availableCars}
        selectedValue={selectedCar}
        onValueChange={garment => {
          setSelectedCar(garment);
          setSelection(
            `${selectedColor} ${cars.find(i => i.value === garment).label}`
          );
        }}
      />
      <Text style={stylesSelect.text}>{selection}</Text>
    </View>
  );
}