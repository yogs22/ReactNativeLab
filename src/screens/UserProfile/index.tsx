import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header, List, Profile} from '~/components';
import {colors, getData} from '~/utils';
import {Navigation} from '~/types/component';

export default function UserProfile({navigation}: Navigation) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    picture_url: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
  });
  return (
    <View style={styles.container}>
      <Header title="User Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={profile.name}
        profile={profile.picture_url}
        desc={profile.email}
      />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidlines"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
