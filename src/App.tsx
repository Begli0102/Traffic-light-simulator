import React, { useState } from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import MainRoad from './components/MainRoad'
import SideRoad from './components/SideRoad'

type TrafficLightColor = 'red' | 'yellow' | 'green'
type PedestrianLightColor = 'red' | 'green'

const App: React.FC = () => {
  // States for traffic lights and pedestrian requests
  const [mainRoadTrafficLight, setMainRoadTrafficLight] = useState<
    TrafficLightColor
  >('green')
  const [sideRoadTrafficLight, setSideRoadTrafficLight] = useState<
    TrafficLightColor
  >('red')
  const [pedestrianLight, setPedestrianLight] = useState<PedestrianLightColor>(
    'red'
  )
  const [pedestrianRequestActive, setPedestrianRequestActive] = useState(false)
  const [trafficLightInterval, setTrafficLightInterval] = useState<
    NodeJS.Timer | undefined
  >(undefined)

  const setupTrafficLightCycle = () => {
    const interval = () => {
      if (!pedestrianRequestActive) {
        setMainRoadTrafficLight('yellow')
        setSideRoadTrafficLight('yellow')

        // Main Road
        setTimeout(() => {
          setMainRoadTrafficLight('red')
        }, 1000)
        setTimeout(() => {
          setMainRoadTrafficLight('yellow')
        }, 3000)
        setTimeout(() => {
          setMainRoadTrafficLight('green')
        }, 5000)

        // Side Road
        setTimeout(() => {
          setSideRoadTrafficLight('green')
        }, 1000)
        setTimeout(() => {
          setSideRoadTrafficLight('yellow')
        }, 6000)
        setTimeout(() => {
          setSideRoadTrafficLight('red')
        }, 7000)
      }
    }

    interval() // Start the first cycle immediately
    const intervalId = setInterval(interval, 9000)
    setTrafficLightInterval(intervalId)
  }

  const handleStart = () => {
    if (!trafficLightInterval) {
      setupTrafficLightCycle()
    }
  }

  const handlePedestrianRequest = () => {
    if (!pedestrianRequestActive) {
      setPedestrianRequestActive(true)

      // Stop regular traffic light cycle
      if (trafficLightInterval) {
        clearInterval(trafficLightInterval)
      }

      setPedestrianLight('green')

      // Main Road
      setMainRoadTrafficLight('yellow')
      setTimeout(() => {
        setMainRoadTrafficLight('red')
      }, 1000)

      //Side Road
      setSideRoadTrafficLight('yellow')
      setTimeout(() => {
        setSideRoadTrafficLight('red')
      }, 1000)

      // Pedestrian crossing time
      setTimeout(() => {
        setPedestrianLight('red')
        setPedestrianRequestActive(false)

        // Restart regular traffic light cycle
        setupTrafficLightCycle()
      }, 5000) // Pedestrian crossing time
    }
  }

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography textAlign='center' variant='h4' gutterBottom>
        Traffic Lights Demo
      </Typography>
      <Button
        variant='contained'
        sx={{ marginBottom: '20px' }}
        onClick={() => {
          handleStart()
        }}
        disabled={pedestrianRequestActive}
      >
        Start
      </Button>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SideRoad color={sideRoadTrafficLight} />
        <MainRoad
          color={mainRoadTrafficLight}
          pedestrianLight={pedestrianLight}
          handlePedestrianRequest={handlePedestrianRequest}
          pedestrianRequestActive={pedestrianRequestActive}
        />
      </Box>
    </Container>
  )
}

export default App
