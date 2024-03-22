import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CartIcon({ color }: { color: string }) {
    return (
        <Svg
            width={49}
            height={44}
            viewBox="0 0 49 44"
            fill="none"
        >
            <G
                stroke={color}
                strokeWidth={3.42857}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M3.714 7.714h43.429l-6.857 22.857H10.57L3.714 7.714zm0 0L2 2M22 38.571a3.429 3.429 0 01-6.857 0M35.714 38.571a3.429 3.429 0 01-6.857 0" />
            </G>
        </Svg>
    )
}

export default CartIcon
