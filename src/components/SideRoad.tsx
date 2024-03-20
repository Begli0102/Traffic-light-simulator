import { makeStyles } from '@material-ui/core/styles'
import SideRoadTrafficLight from './SideRoadLight'
import { TrafficLightProps } from '../interface';

const useStyles = makeStyles({
  sideRoad: {
    backgroundColor: 'lightgray',
    width: '200px',
    height: '100vh',
    margin: '0 auto',
    position: 'absolute',
    left: '650px'
  },
  trafficLight: {
    position: 'absolute',
    bottom: '80px',
    right: '-80px'
  }
})



const SideRoad: React.FC<TrafficLightProps> = ({ color }) => {
  const classes = useStyles()
  return (
    <div className={classes.sideRoad}>
      <div className={classes.trafficLight}>
        <SideRoadTrafficLight color={color} />
      </div>
    </div>
  )
}

export default SideRoad
