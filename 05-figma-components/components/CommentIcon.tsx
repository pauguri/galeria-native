import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CommentIcon({ color }: { color: string }) {
    return (
        <Svg
            width={44}
            height={44}
            viewBox="0 0 44 44"
            fill="none"
        >
            <Path
                d="M2 40.656V6.472A4.472 4.472 0 016.472 2h31.3a4.472 4.472 0 014.472 4.472V28.83a4.471 4.471 0 01-4.471 4.471h-24.68A4.472 4.472 0 009.6 34.98l-5.212 6.515c-.792.99-2.389.43-2.389-.838z"
                stroke={color}
                strokeWidth={3.3537}
            />
        </Svg>
    )
}

export default CommentIcon
