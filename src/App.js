import {useState, useEffect} from 'react'
import {ws} from './ws/ws'
import {Grid} from './Grid/Grid';
import {Tank} from './Tank/Tank'

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
      <Grid></Grid>
      <Tank />
    </div>
  );
}
