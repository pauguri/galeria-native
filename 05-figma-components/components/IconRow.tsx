import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import CommentIcon from './CommentIcon';

type ValidIcon = "heart" | "cart" | "comment";

export default function IconRow({ mode = "light", icons }: { mode?: "light" | "dark", icons: ValidIcon[] }) {

  const iconColor = mode === "light" ? "#C9D6CC" : "#85BC92";

  return (
    <View style={[styles.container, mode == 'light' ? styles.containerLight : styles.containerDark]}>
      {icons.map((icon, index) => (
        <>
          {index != 0 && <View style={[styles.separator, mode === "light" ? styles.separatorLight : styles.separatorDark]}></View>}
          {icon === "heart" && <HeartIcon color={iconColor} />}
          {icon === "cart" && <CartIcon color={iconColor} />}
          {icon === "comment" && <CommentIcon color={iconColor} />}
        </>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 42,
    alignItems: 'center',
    paddingHorizontal: 42,
    paddingVertical: 10,
    borderRadius: 60,
  },
  containerLight: {
    backgroundColor: "#FFFFFF",
  },
  containerDark: {
    backgroundColor: "#2D2D2D",
  },
  separator: {
    width: 3,
    height: '100%'
  },
  separatorLight: {
    backgroundColor: "#C9D6CC",
  },
  separatorDark: {
    backgroundColor: "#85BC92"
  },
});