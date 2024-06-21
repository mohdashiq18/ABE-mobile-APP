import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Machine  from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Customer  from 'react-native-vector-icons/dist/Entypo';
import Service  from 'react-native-vector-icons/dist/MaterialIcons';
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20,marginTop:10 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <View style={{...styles.box,backgroundColor: '#6a51ae'}}>
            <Machine name="state-machine" size={50} color="white"/>
          <Text style={styles.boxText}>Active</Text>
          <Text style={styles.boxText}>Machines</Text>
          <Text style={{...styles.boxText,fontWeight:700}}>601</Text>
        </View>
        <View style={{...styles.box,backgroundColor: '#9579e0'}}>
        <Machine name="transfer" size={50} color="white"/>
          <Text style={styles.boxText}>Transfered In</Text>
          <Text style={styles.boxText}>Machines</Text>
          <Text style={{...styles.boxText,fontWeight:700}}>46</Text>
        </View>
        <View style={{...styles.box,backgroundColor: '#9579e0'}}>
        <Customer name="users" size={50} color="white"/>
          <Text style={styles.boxText}>Active </Text>
          <Text style={styles.boxText}>Customers</Text>
          <Text style={{...styles.boxText,fontWeight:700}}>440</Text>
        </View>
        <View style={{...styles.box,backgroundColor: '#6a51ae'}}>
        <Service name="miscellaneous-services" size={50} color="white"/>
          <Text style={styles.boxText}> Missed  </Text>
          <Text style={styles.boxText}>Services</Text>
          <Text style={{...styles.boxText,fontWeight:700}}>0</Text>
        </View>
        <View style={{...styles.box,backgroundColor: '#6a51ae'}}>
        <Customer name="archive" size={50} color="white"/>
          <Text style={styles.boxText}>Pending  </Text>
          <Text style={styles.boxText}>Claims</Text>
          <Text style={{...styles.boxText,fontWeight:700}}>323</Text>
        </View>
        <View style={{...styles.box,backgroundColor: '#9579e0'}}>
        <Machine name="trending-down" size={50} color="white"/>
          <Text style={styles.boxText}>Missed  </Text>
          <Text style={styles.boxText}>Claims</Text>
          <Text style={{...styles.boxText,fontWeight:700}}>1310</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  box: {
    width: '47%', 
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, 
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    with:'100%'
  },
};

export default Home;
