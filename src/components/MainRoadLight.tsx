import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/material'
import { TrafficLightProps } from '../interface'

const useStyles = makeStyles({
  container: {
    width: '40px',
    backgroundColor: '#000',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px',
    gap: '10px'
  }
})

const MainRoadTrafficLight: React.FC<TrafficLightProps> = ({ color }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Box
        bgcolor={color === 'red' ? 'red' : 'grey'}
        width={40}
        height={40}
        borderRadius='50%'
        mb={1}
      ></Box>
      <Box
        bgcolor={color === 'yellow' ? 'yellow' : 'grey'}
        width={40}
        height={40}
        borderRadius='50%'
        mb={1}
      ></Box>
      <Box
        bgcolor={color === 'green' ? 'green' : 'grey'}
        width={40}
        height={40}
        borderRadius='50%'
      ></Box>
    </div>
  )
}

export default MainRoadTrafficLight