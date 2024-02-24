import { useEffect, useState } from "react";
import "./HopIcon.css";

export default function HopIcon({ stage, size }: { stage: string, size: number }) {
    const [letter, setLetter] = useState("");

    useEffect(() => {
        const letter = stage[0].toUpperCase();
        if (letter) {
            setLetter(letter);
        }
    }, [stage]);

    return (
        <div className="hop-icon" title={stage + " add"} style={{ width: size + 'px', height: size + 'px' }}>
            <span style={{ fontSize: (size * 0.6) + 'px' }}>{letter}</span>
        </div>
    )
}
