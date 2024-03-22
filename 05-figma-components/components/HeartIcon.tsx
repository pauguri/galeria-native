import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartIcon({ color }: { color: string }) {
    return (
        <Svg
            width={49}
            height={44}
            viewBox="0 0 49 44"
            fill="none"
        >
            <Path
                d="M46.444 15.027c0 3.437-1.32 6.738-3.675 9.18-5.425 5.622-10.686 11.485-16.313 16.904a3.251 3.251 0 01-4.57-.1L5.675 24.206c-4.9-5.079-4.9-13.279 0-18.358 4.948-5.13 13.01-5.13 17.957 0l.59.61.589-.61C27.183 3.388 30.414 2 33.79 2c3.375 0 6.606 1.388 8.979 3.848 2.356 2.442 3.675 5.743 3.675 9.18z"
                stroke={color}
                strokeWidth={3.33333}
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default HeartIcon
