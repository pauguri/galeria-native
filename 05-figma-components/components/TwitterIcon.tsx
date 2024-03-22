import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function TwitterIcon() {
  return (
    <Svg
      width={75}
      height={75}
      viewBox="0 0 75 75"
      fill="none"
    >
      <Circle cx={37.5} cy={37.5} r={37.5} fill="#1AA9E6" />
      <Path
        d="M54.322 25.015s-2.965 1.751-4.613 2.248A6.582 6.582 0 0038.16 31.67v1.47a15.662 15.662 0 01-13.223-6.656s-5.876 13.223 7.346 19.1A17.102 17.102 0 0122 48.521c13.223 7.346 29.383 0 29.383-16.896a6.61 6.61 0 00-.117-1.22c1.5-1.478 3.056-5.391 3.056-5.391z"
        fill="#fff"
      />
    </Svg>
  )
}

export default TwitterIcon
