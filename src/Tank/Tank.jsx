import {useState, useEffect} from 'react';
import {ws, tankId} from '../ws/ws';
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
    const [tanks, setTanks] = useState([])

    useEffect(() => {
        function onKeyDown(event) {
            const {key} = event;

            if (key in POSITIONS) {
                ws.send(JSON.stringify({type: "move", position: POSITIONS[key]}))
            }

            if (key === " ") {
                ws.send(JSON.stringify({type: "shot"}))
            }
        }

        window.addEventListener("keydown", onKeyDown)
    }, [])

    useEffect(() => {
        function onMessage(message) {
            const data = JSON.parse(message.data);

            if (data.type === "refresh" && data.tanks) {
                setTanks(Object.values(data.tanks));
            }
        }
        ws.addEventListener("message", onMessage)
    }, [])



    return tanks.map(tank => <TankIcon
        className={styles.tank}
        style={{
            top: tank.y * 24,
            left: tank.x * 24,
            transform: `rotate(${rotates[tank.position]}deg)`
        }}
    />)
}
