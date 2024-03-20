import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { PedestrianLightProps } from '../interface'

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

const PedestrianTrafficLight: React.FC<PedestrianLightProps> = ({ color }) => {
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
        bgcolor={color === 'green' ? 'green' : 'grey'}
        width={40}
        height={40}
        borderRadius='50%'
      ></Box>
    </div>
  )
}
export default PedestrianTrafficLight
