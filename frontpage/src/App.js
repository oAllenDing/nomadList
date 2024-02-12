import './App.css';
import CityCard from './components/cityCard';
import SearchAppBar from './components/navBar';
import MainAvatar from './components/avatar';
import Description from './components/description';
import DescButtons from './components/buttons';
import AddTrip from './components/addTrip';
import TripDesc from './components/addTripDesc';
import ResidencyCalendar from './components/residencyCalendar';
import Exposure from './components/exposure';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <MainAvatar/>
      <Description/>
      <DescButtons/>
      <AddTrip/>
      <TripDesc/>
      <CityCard/>
      <ResidencyCalendar/>
      <Exposure/>
    </div>
  );
}

export default App;
