import './App.css';
import CityCard from './components/cityCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={4}>
          <CityCard/>
          <CityCard/>
          <CityCard/>
          <CityCard/>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
