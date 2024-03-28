import React from 'react'
import { Box } from '@mui/material'
import { TrafficLightProps } from '../interface'
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
  bottom: '40px',
  left: '-85px'
})

const SideRoadTrafficLight: React.FC<TrafficLightProps> = ({ color }) => {
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
    </Container>
  )
}

export default SideRoadTrafficLight
