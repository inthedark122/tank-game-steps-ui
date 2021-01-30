import {useState, useEffect} from 'react';
import {ws} from '../ws/ws';
import { ReactComponent as TankIcon } from '../icons/tank.svg'
import styles from './Tank.module.css'

const rotates = {
    "top": 0,
    "right": 90,
    "bottom": 180,
    "left": 270
}

const POSITIONS = {
    ArrowUp: 'top',
    ArrowRight: "right",
    ArrowDown: "bottom",
    ArrowLeft: "left",
}

export function Tank() {
    const [position, setPosition] = useState({ x: 5, y: 0 })
    const [rotate, setRotate] = useState("right")

    useEffect(() => {
        function onKeyDown(event) {
            const {key} = event;

            if (key in POSITIONS) {
                ws.send(JSON.stringify({type: "move", position: POSITIONS[key]}))
            }
        }

        window.addEventListener("keydown", onKeyDown)
    }, [])


    return <TankIcon
        className={styles.tank}
        style={{
            top: position.y * 24,
            left: position.x * 24,
            transform: `rotate(${rotates[rotate]}deg)`
        }}
    />
}
