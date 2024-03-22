import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  pedestrianContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '200px',
    flexDirection: 'column',
    position: 'absolute',
    right: '10px',
    gap: '15px',
    paddingTop:"15px"
  },

  pedestrian: {
    backgroundColor: '#ffff',
    width: '200px',
    height: '22px'
  }
})

const Pedestrian = () => {
  const classes = useStyles()
  return (
    <div className={classes.pedestrianContainer}>
      <div className={classes.pedestrian}></div>
      <div className={classes.pedestrian}></div>
      <div className={classes.pedestrian}></div>
      <div className={classes.pedestrian}></div>
      <div className={classes.pedestrian}></div>
    </div>
  )
}

export default Pedestrian
