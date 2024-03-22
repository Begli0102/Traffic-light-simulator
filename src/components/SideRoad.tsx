import SideRoadTrafficLight from './SideRoadLight'
import { TrafficLightProps } from '../interface'
import { Box } from '@mui/material'


const SideRoad: React.FC<TrafficLightProps> = ({ color }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'lightgray',
        width: '200px',
        height: '100vh',
        margin: '0 auto',
        position:"relative"
      }}
    >
      <SideRoadTrafficLight color={color} />
    </Box>
  )
}

export default SideRoad
