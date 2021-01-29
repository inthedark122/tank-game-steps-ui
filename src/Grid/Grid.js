import styles from './Grid.module.css'
const GRID_SIZE = 20

export function Grid() {
   return Array.from({ length: GRID_SIZE }).map((_, y) => (
       <div className={styles.row}>
           {Array.from({ length: GRID_SIZE }).map((_, x) => (
               <span className={styles.cell}></span>
           ))}
       </div>
   ))
}
