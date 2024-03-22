import Pedestrian from './Pedestrian'
import { Box, Grid } from '@mui/material'
import MainRoadTrafficLight from './MainRoadLight'
import PedestrianTrafficLight from './PedestrianLight'

interface IMainRoadProps {
  color: 'red' | 'yellow' | 'green'
  pedestrianLight: 'red' | 'green'
  handlePedestrianRequest: () => void
  pedestrianRequestActive: boolean
}

const MainRoad: React.FC<IMainRoadProps> = ({
  color,
  pedestrianLight,
  handlePedestrianRequest,
  pedestrianRequestActive
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '200px',
        backgroundColor: 'lightgray',
        top: '30%',
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
      <Pedestrian />
      <Grid container spacing={1}>
        <div className='traffic-container'>
          <Grid item >
            <MainRoadTrafficLight color={color} />
          </Grid>
          <Grid item>
            <PedestrianTrafficLight
              color={pedestrianLight}
              handlePedestrianRequest={handlePedestrianRequest}
              pedestrianRequestActive={pedestrianRequestActive}
            />
          </Grid>
        </div>
      </Grid>
    </Box>
  )
}

export default MainRoad
