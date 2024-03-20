import { makeStyles } from '@material-ui/core/styles'
import Pedestrian from './Pedestrian'

const useStyles = makeStyles({
  mainRoad: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '200px',
    position: 'relative'
  }
})

const MainRoad = () => {
  const classes = useStyles()
  return (
    <div className={classes.mainRoad}>
      <Pedestrian />
    </div>
  )
}

export default MainRoad
