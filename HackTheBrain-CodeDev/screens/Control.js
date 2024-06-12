 import { VStack, HStack, Select, CheckIcon, Switch, Slider } from 'native-base';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import sunLightData from "../data/controls/sunlight.json";

// Card Component
function ControlCard({ 
  currentPlotIndex, 
  currentColumnIndex, 
  setCurrentColumnIndex, 
  status, 
  isShadingOpen, 
  setIsShadingOpen, 
  onChangeShadingStrength, 
  setOnChangeShadingStrength, 
  enableNotifications, 
  setEnableNotifications 
}) {
  return (
    <VStack style={{ width: '100%' }} justifyContent="space-between" flex={1}>
      <HStack justifyContent="space-between" style={styles.rowDouble}>
        <Text>Plot:</Text>
        <HStack justifyContent="space-between" style={styles.row}>
          <Text>#{currentPlotIndex + 1}</Text>
        </HStack>
      </HStack>
      <HStack justifyContent="space-between" style={styles.row}>
        <Text>Status</Text>
        <View style={styles.pill}>
          <Text style={styles.pillText}>{status}</Text>
        </View>
      </HStack>
      <HStack justifyContent="space-between" style={styles.rowDouble}>
        <Text>Column</Text>
        <HStack justifyContent="space-between" style={styles.row}>
          <Select 
            selectedValue={String(currentColumnIndex)} // Make sure to convert selectedValue to a string
            minWidth="200" 
            placeholder="Choose Column" 
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} 
            mt={1} 
            onValueChange={itemValue => setCurrentColumnIndex(parseInt(itemValue))} // Ensure onValueChange parses the value to an integer
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Select.Item key={index} label={String(index)} value={String(index)} />
            ))}
          </Select>
          <Text></Text>
        </HStack>
      </HStack>
      <HStack justifyContent="space-between" style={styles.row}>
        <Text>Open/Close Shading</Text>
        <Switch value={isShadingOpen} onToggle={() => setIsShadingOpen(!isShadingOpen)} colorScheme="amber" />
      </HStack>
      <HStack justifyContent="space-between" style={styles.rowDouble}>
        <Text>Shading Strength</Text>
        <HStack justifyContent="space-between" style={styles.row}>
          <Text>{onChangeShadingStrength}</Text>
          <Slider defaultValue={70} colorScheme="amber" onChange={v => {
            setOnChangeShadingStrength(Math.floor(v));
          }} size="sm" w="50%">
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </HStack>
      </HStack>
      <HStack justifyContent="space-between" style={styles.row}>
        <Text>Notifications</Text>
        <Switch value={enableNotifications} onToggle={() => setEnableNotifications(!enableNotifications)} colorScheme="amber" />
      </HStack>
    </VStack>
  );
}

// Main Component
export default function ControlScreen() {
  const [currentPlotIndex, setCurrentPlotIndex] = React.useState(0);
  const [currentColumnIndex, setCurrentColumnIndex] = React.useState(0);
  const [plotData, setPlotData] = React.useState(sunLightData[0]);
  const [columnData, setColumnData] = React.useState(plotData.columns[0]);

  // Update plotData when currentPlotIndex changes
  React.useEffect(() => {
    const newPlotData = sunLightData[currentPlotIndex];
    setPlotData(newPlotData);
    setColumnData(newPlotData.columns[0]);
    setCurrentColumnIndex(0);
  }, [currentPlotIndex]);

  // Update columnData when currentColumnIndex changes
  React.useEffect(() => {
    setColumnData(plotData.columns[currentColumnIndex]);
  }, [currentColumnIndex, plotData]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { flex: 1 }]}>Sunlight</Text>
      <View style={[styles.card, { flex: 5 }]}>
        <ControlCard 
          currentPlotIndex={currentPlotIndex}
          currentColumnIndex={currentColumnIndex}
          setCurrentColumnIndex={setCurrentColumnIndex}
          status={plotData.status}
          isShadingOpen={columnData.isShadingOpen}
          setIsShadingOpen={(value) => setColumnData({ ...columnData, isShadingOpen: value })}
          onChangeShadingStrength={columnData.shadingStrength}
          setOnChangeShadingStrength={(value) => setColumnData({ ...columnData, shadingStrength: value })}
          enableNotifications={columnData.enableNotifications}
          setEnableNotifications={(value) => setColumnData({ ...columnData, enableNotifications: value })}
        />
      </View>
      <View style={[styles.pagination, { flex: 1 }]}>
        {Array.from({ length: sunLightData.length }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setCurrentPlotIndex(index)}>
            <Text style={styles.pageNumber}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[styles.text, { flex: 1 }]}>Images switch different mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    textAlign: 'left',
    paddingLeft: 5,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  rowDouble: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumber: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
  pill: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  pillText: {
    color: 'white',
    fontWeight: 'bold',
  },
});