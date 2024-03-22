import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FacebookIcon from './FacbookIcon'
import TwitterIcon from './TwitterIcon'

export default function SocialButton({ label, type = "twitter", align = "left" }: { label: string, type?: "facebook" | "twitter", align?: "left" | "right" }) {
  return (
    <View style={[styles.container, type == "twitter" ? styles.twitterContainer : styles.facebookContainer]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.icon, align == 'left' ? { left: 0 } : { right: 0 }]}>
        {type == "facebook" && <FacebookIcon />}
        {type == "twitter" && <TwitterIcon />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    paddingHorizontal: 92,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    position: 'relative'
  },
  label: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  facebookContainer: {
    backgroundColor: "#9BABCC"
  },
  twitterContainer: {
    backgroundColor: "#8CD3F1"
  },
  icon: {
    position: 'absolute',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: "#FFFFFF",
    overflow: 'hidden',
  }
})