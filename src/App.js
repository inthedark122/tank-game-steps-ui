import './ws/ws'
import {Grid} from './Grid/Grid';
import { ReactComponent as Tank } from './icons/tank.svg'

export function App() {
  return (
    <div>
      <Grid></Grid>
      <Tank />
    </div>
  );
}
