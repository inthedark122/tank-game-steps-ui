import {useState} from 'react';
import { ReactComponent as TankIcon } from '../icons/tank.svg'
import styles from './Tank.module.css'

const rotates = {
    "top": 0,
    "right": 90,
    "bottom": 180,
    "left": 270
}

export function Tank() {
    const [position, setPosition] = useState({ x: 5, y: 0 })
    const [rotate, setRotate] = useState("right")

    return <TankIcon
        className={styles.tank}
        style={{
            top: position.y * 24,
            left: position.x * 24,
            transform: `rotate(${rotates[rotate]}deg)`
        }}
    />
}
