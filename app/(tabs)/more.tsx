import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SupportChatButton } from '../../components/SupportChatButton';

export default function MoreScreen() {
  const router = useRouter();
  const [biometrics, setBiometrics] = useState(false);

  const menuItems = [
    { icon: 'person-add-outline', label: 'Account Settings', desc: 'Edit your profile and next of kin', isIon: true },
    { icon: 'shield-checkmark-outline', label: 'Verify Phone Number', desc: 'Enable OTP notifications', isIon: true },
    { icon: 'card-outline', label: 'KYC Verification', desc: 'Complete your KYC', isIon: true },
    { icon: 'chatbubble-outline', label: 'Support', desc: 'Chat with our support agents', isIon: true },
    { icon: 'fingerprint', label: 'Biometrics', desc: 'Enable Secure Login', isMCI: true, isSwitch: true },
    { icon: 'shield-outline', label: 'Security', desc: 'Add an extra layer of security', isIon: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Account</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <SupportChatButton onPress={() => console.log('Support chat pressed')} />
          <TouchableOpacity>
             <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileRow}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={30} color="#A0A0A0" />
          </View>
          <Text style={styles.userName}>@Ngene_William</Text>
          <TouchableOpacity style={styles.copyButton}>
            <Ionicons name="copy-outline" size={18} color="#A0A0A0" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.referralCard}
          onPress={() => router.push('/(tabs)/referral')}
        >
          <View style={styles.referralInfo}>
            <Text style={styles.referralTitle}>Referral</Text>
            <Text style={styles.referralDesc}>Refer friends and earn points</Text>
          </View>
          <MaterialCommunityIcons name="trophy-outline" size={24} color="#FFD700" />
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                {item.isIon ? (
                  <Ionicons name={item.icon as any} size={22} color="#2E5BFF" />
                ) : (
                  <MaterialCommunityIcons name={item.icon as any} size={22} color="#2E5BFF" />
                )}
              </View>
              <View style={styles.menuText}>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.menuDesc}>{item.desc}</Text>
              </View>
              {item.isSwitch ? (
                <Switch 
                  value={biometrics} 
                  onValueChange={setBiometrics}
                  trackColor={{ false: '#333', true: '#2E5BFF' }}
                  thumbColor={biometrics ? 'white' : '#f4f3f4'}
                />
              ) : (
                <TouchableOpacity style={styles.chevronBox}>
                  <Ionicons name="chevron-forward" size={18} color="#666" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 20,
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  copyButton: {
    marginLeft: 'auto',
    backgroundColor: '#1A1A1A',
    padding: 8,
    borderRadius: 8,
  },
  referralCard: {
    backgroundColor: '#1A233E',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 25,
  },
  referralInfo: {
    flex: 1,
  },
  referralTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  referralDesc: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  menuContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  menuIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(46, 91, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    flex: 1,
  },
  menuLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  menuDesc: {
    color: '#666',
    fontSize: 12,
  },
  chevronBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
