import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CrossIcon({ color }: { color: string }) {
    return (
        <Svg
            width={28}
            height={29}
            viewBox="0 0 28 29"
            fill="none"
        >
            <Path
                d="M1.5 27L14 14.5m0 0L26.5 2M14 14.5L1.5 2M14 14.5L26.5 27"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default CrossIcon
