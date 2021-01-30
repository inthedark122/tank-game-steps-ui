import {useState, useEffect} from 'react'
import {ws} from './ws/ws'
import {Grid} from './Grid/Grid';
import {Tank} from './Tank/Tank'
import {Bullets} from './Bullets/Bullets'

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ws.addEventListener("open", () => {
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <Grid />
      <Tank />
      <Bullets />
    </div>
  );
}
