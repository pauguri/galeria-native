import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckIcon({ color }: { color: string }) {
    return (
        <Svg
            width={29}
            height={21}
            viewBox="0 0 29 21"
            fill="none"
        >
            <Path
                d="M2 12.3l7.143 7.2L27 1.5"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default CheckIcon
