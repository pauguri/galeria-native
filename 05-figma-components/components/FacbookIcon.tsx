import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FacebookIcon() {
  return (
    <Svg
      width={75}
      height={75}
      viewBox="0 0 75 75"
      fill="none"
    >
      <Circle cx={37.5} cy={37.5} r={37.5} fill="#395898" />
      <Path
        d="M46.15 21h-5.223a8.704 8.704 0 00-8.704 8.704v5.223H27v6.964h5.223v13.927h6.963V41.891h5.223l1.741-6.964h-6.964v-5.223a1.741 1.741 0 011.741-1.74h5.223V21z"
        fill="#fff"
      />
    </Svg>
  )
}

export default FacebookIcon
