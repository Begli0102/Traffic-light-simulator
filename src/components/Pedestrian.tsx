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

const Pedestrian = () => {
  return (
    <Container>
      <Pedestrians />
      <Pedestrians />
      <Pedestrians />
      <Pedestrians />
      <Pedestrians />
    </Container>
  )
}

export default Pedestrian
