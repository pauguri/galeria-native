import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Avatar({ name, image }: { name?: string, image?: any }) {

  if (image) {
    return (
      <Image style={styles.avatar} source={image} />
    )
  } else if (name) {
    return (
      <View style={[styles.avatar, styles.textAvatar]}>
        <Text style={styles.text}>{getInitials(name)}</Text>
      </View>
    )
  }
}

function getInitials(name: string): string {
  let initials = "";
  name.split(' ').forEach((word) => {
    initials += word.charAt(0).toUpperCase();
  });
  return initials;
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textAvatar: {
    backgroundColor: '#559CDE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: '#fff',
    lineHeight: 17,
  },
})