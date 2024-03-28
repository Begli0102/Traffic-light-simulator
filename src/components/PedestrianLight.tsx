import React from 'react'
import { Box, Button } from '@mui/material'
import SensorsIcon from '@mui/icons-material/Sensors'
import styled from 'styled-components'

const Container = styled.div({
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
})

interface IPedestrianLightProps {
  color: 'red' | 'green'
  handlePedestrianRequest: () => void
  startButtonClicked: boolean
}

const PedestrianTrafficLight: React.FC<IPedestrianLightProps> = ({
  color,
  handlePedestrianRequest,
  startButtonClicked
}) => {
  return (
    <Container>
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
        disabled={!startButtonClicked}
        sx={{ position: 'absolute', bottom: '-50px' }}
      >
        <SensorsIcon />
      </Button>
    </Container>
  )
}
export default PedestrianTrafficLight
