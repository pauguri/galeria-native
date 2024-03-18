import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SingleCheck(props: any) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4 8l3.5 3.5 7-7"
                stroke={props.color ?? '#97A2AD'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function DoubleCheck(props: any) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M2.53 7.47a.75.75 0 00-1.06 1.06l1.06-1.06zM5.5 11.5l-.53.53a.75.75 0 001.06 0l-.53-.53zm7.53-6.47a.75.75 0 00-1.06-1.06l1.06 1.06zM9.5 11.5l-.53.53a.75.75 0 001.06 0l-.53-.53zm7.53-6.47a.75.75 0 00-1.06-1.06l1.06 1.06zM1.47 8.53l3.5 3.5 1.06-1.06-3.5-3.5-1.06 1.06zm4.56 3.5l7-7-1.06-1.06-7 7 1.06 1.06zm1.94-1l1 1 1.06-1.06-1-1-1.06 1.06zm2.06 1l7-7-1.06-1.06-7 7 1.06 1.06z"
                fill={props.color ?? "#3A73A8"}
            />
        </Svg>
    )
}

export default function Check({ read, double }: { read?: boolean, double?: boolean }) {


    const color = read ? '#3A73A8' : '#97A2AD';

    if (double) {
        return <DoubleCheck />
    } else {
        return <SingleCheck color={color} />
    }
}