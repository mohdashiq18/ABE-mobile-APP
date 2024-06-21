import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/dist/AntDesign';
import Arrow  from 'react-native-vector-icons/dist/FontAwesome';
import Approval  from 'react-native-vector-icons/dist/MaterialIcons';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomDrawerContent = (props) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsSubmenuOpen(!isSubmenuOpen);
  };
 const subMenuApproval=[{
    title:'Salary Increment',
    path:'SubItem1',
 },
 {
    title:'Service HY Claim',
    path:'SubItem1',
 },
 {
    title:'PDI',
    path:'SubItem1',
 },
 {
    title:'Commissioning',
    path:'SubItem1',
 },
 {
    title:'PDI HY Claim',
    path:'SubItem1',
 },
 {
    title:'Commissioning HY Claim',
    path:'SubItem1',
 },
 {
    title:'Customer',
    path:'SubItem1',
 },
 {
    title:'Dealer',
    path:'SubItem1',
 },
 {
    title:'Product Type',
    path:'SubItem1',
 },
 {
    title:'Handeling Material',
    path:'SubItem1',
 },
 {
    title:'Make',
    path:'SubItem1',
 },
 {
    title:'Model',
    path:'SubItem1',
 },
 {
    title:'Machine Attachment',
    path:'SubItem1',
 },
 {
    title:'Machine Application',
    path:'SubItem1',
 },
 {
    title:'Service Type',
    path:'SubItem1',
 },
 {
    title:'Machine',
    path:'SubItem1',
 },
 {
    title:'Warranty Term',
    path:'SubItem1',
 },
 {
    title:'Strength Change',
    path:'SubItem1',
 },
 {
    title:'Credit Memo',
    path:'SubItem1',
 }]
  return (
    <View style={{ flex: 1, backgroundColor: '#eee'}}>
      <DrawerContentScrollView {...props} >
        {/* <DrawerItemList {...props} /> */}
        <View style={{width:'100%',backgroundColor:'#6a51ae',paddingVertical:10,paddingLeft:10,marginTop:-5,flexDirection:'row',alignItems:'center',gap:10}}>
        <Avatar.Text size={50} label="AD" />
        <View>
            <Text style={{fontSize:23,color:'white',fontWeight:700}}>Admin</Text>
        </View>
        </View>
        <TouchableOpacity  style={{ padding: 10,flexDirection:'row',alignItems:'center'}} onPress={()=>props.navigation.navigate('Dashboard')} >
        <Icon name="dashboard" size={24} color="#212529"  /><Text style={{ fontSize: 18, marginLeft: 10,color:'#212529' }}>Deshboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSubmenu} style={{ padding: 10,flexDirection:'row',alignItems:'center'}}>
        <Approval name="approval" size={24} color="#212529"  /><Text style={{ fontSize: 18, marginLeft: 10,color:'#212529' }}>Approval</Text><View style={{ flex: 1 }} />
       {isSubmenuOpen ?  <Arrow name="angle-up" size={24} color="#212529"  />: <Arrow name="angle-down" size={24} color="#212529"  />}
        </TouchableOpacity>
        {isSubmenuOpen && (
          <View style={{ paddingLeft: 20 }}>
            {subMenuApproval.map((el,i)=><TouchableOpacity key={i} onPress={()=>props.navigation.navigate(el.path)} style={{ padding: 10,flexDirection:'row',marginTop:-5,alignItems:'center'}}>
        <Icon name="minuscircleo" size={12} color="gray"  /><Text style={{ fontSize: 14, marginLeft: 10,color:'gray' }}>{el.title}</Text>
        </TouchableOpacity>)}
            

          </View>
        )}
        
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
