// import { makeStyles } from '@mui/styles'
import styled from 'styled-components'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '200px',
  flexDirection: 'column',
  position: 'absolute',
  right: '10px',
  gap: '15px',
  paddingTop: '15px'
})
const Pedestrians = styled.div({
  backgroundColor: '#ffff',
  width: '200px',
  height: '22px'
})

// const useStyles = makeStyles({
//   pedestrianContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     height: '200px',
//     flexDirection: 'column',
//     position: 'absolute',
//     right: '10px',
//     gap: '15px',
//     paddingTop: '15px'
//   },

//   pedestrian: {
//     backgroundColor: '#ffff',
//     width: '200px',
//     height: '22px'
//   }
// })

const Pedestrian = () => {
  // const classes = useStyles()
  return (
    <Container>
      <Pedestrians />
      <Pedestrians />
      <Pedestrians />
      <Pedestrians />
      <Pedestrians />
    </Container>

    // <div className={classes.pedestrianContainer}>
    //   <div className={classes.pedestrian}></div>
    //   <div className={classes.pedestrian}></div>
    //   <div className={classes.pedestrian}></div>
    //   <div className={classes.pedestrian}></div>
    //   <div className={classes.pedestrian}></div>
    // </div>
  )
}

export default Pedestrian
