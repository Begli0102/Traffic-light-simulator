import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  pedestrianContainer: {
    display: 'flex',
    width: '200px',
    height: '200px',
    flexDirection: 'column',
    position: 'absolute',
    right: '20px'
  },
  pedestrian1: {
    backgroundColor: 'lightgray',
    width: '200px',
    height: '20px'
  },
  pedestrian2: {
    backgroundColor: '#ffff',
    width: '200px',
    height: '28px',
  }
})

const Pedestrian = () => {
  const classes = useStyles()
  return (
    <div className={classes.pedestrianContainer}>
      <div className={classes.pedestrian1}></div>
      <div className={classes.pedestrian2}></div>
      <div className={classes.pedestrian1}></div>
      <div className={classes.pedestrian2}></div>
      <div className={classes.pedestrian1}></div>
      <div className={classes.pedestrian2}></div>
      <div className={classes.pedestrian1}></div>
      <div className={classes.pedestrian2}></div>
    </div>
  )
}

export default Pedestrian
