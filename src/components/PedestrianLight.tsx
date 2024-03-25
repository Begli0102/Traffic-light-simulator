import React from 'react'
import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SensorsIcon from '@mui/icons-material/Sensors'

const useStyles = makeStyles({
  container: {
    width: '40px',
    backgroundColor: '#000',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px',
    gap: '5px',
    position: 'absolute',
    top: '-200px',
    right: '80px'
  }
})

interface IPedestrianLightProps {
  color: 'red' | 'green'
  handlePedestrianRequest: () => void
  pedestrianRequestActive: boolean
}

const PedestrianTrafficLight: React.FC<IPedestrianLightProps> = ({
  color,
  handlePedestrianRequest,
  pedestrianRequestActive
}) => {
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
      <Button
        variant='contained'
        color='primary'
        onClick={handlePedestrianRequest}
        disabled={pedestrianRequestActive}
        sx={{ position: 'absolute', bottom: '-50px' }}
      >
        <SensorsIcon />
      </Button>
    </div>
  )
}
export default PedestrianTrafficLight
