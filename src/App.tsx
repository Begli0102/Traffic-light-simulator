import React, { useState } from 'react'
import { Container, Grid, Typography, Button } from '@mui/material'
import MainRoadTrafficLight from './components/MainRoadLight'
import PedestrianTrafficLight from './components/PedestrianLight'
import SensorsIcon from '@mui/icons-material/Sensors'
import MainRoad from './components/MainRoad'
import SideRoad from './components/SideRoad'
import './App.css'

type TrafficLightColor = 'red' | 'yellow' | 'green'

const App: React.FC = () => {
  // States for traffic lights and pedestrian requests
  const [mainRoadTrafficLight, setMainRoadTrafficLight] = useState<
    TrafficLightColor
  >('green')

  const [sideRoadTrafficLight, setSideRoadTrafficLight] = useState<
    TrafficLightColor
  >('red')

  const [pedestrianLight, setPedestrianLight] = useState<'red' | 'green'>('red')
  const [pedestrianRequestActive, setPedestrianRequestActive] = useState(false)
  const [trafficLightInterval, setTrafficLightInterval] = useState<
    NodeJS.Timer | undefined
  >(undefined)

  const setupTrafficLightCycle = () => {
    const cycle = () => {
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

    cycle() // Start the first cycle immediately
    const intervalId = setInterval(cycle, 10000)
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

      // Pedestrian light green, main and side road red
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
      <Grid container spacing={1}>
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
        <div className='traffic-container'>
          <Grid item>
            <MainRoadTrafficLight color={mainRoadTrafficLight} />
          </Grid>
          <Grid item display='flex' flexDirection='column' alignItems='center'>
            <PedestrianTrafficLight color={pedestrianLight} />
            <Button
              variant='contained'
              color='primary'
              onClick={handlePedestrianRequest}
              disabled={pedestrianRequestActive}
              sx={{ marginTop: '10px' }}
            >
              <SensorsIcon />
            </Button>
          </Grid>
        </div>
        <SideRoad color={sideRoadTrafficLight} />
        <MainRoad />
      </Grid>
    </Container>
  )
}

export default App
