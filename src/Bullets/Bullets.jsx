import React, { useState, useEffect } from "react";
import { ws } from "../ws/ws";
import styles from './Bullets.module.css'

export function Bullets() {
    const [bullets, setBullets] = useState([])

    useEffect(() => {
        function onMessage(message) {
            const data = JSON.parse(message.data);

            if (data.bullets) {
                setBullets(data.bullets);
            }
        }
    
        ws.addEventListener("message", onMessage);

        return () => {
            ws.removeEventListener("message", onMessage);
        }
    }, [])
    
    return bullets.map((bullet) => (
        <div
          className={styles.root}
          style={{
            top: 24 * bullet.y + 10,
            left: 24 * bullet.x + 10,
          }}
        />
    ))
}