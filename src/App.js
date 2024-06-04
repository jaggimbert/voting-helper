import { getGoogleApiKey } from './constants/keys';
import './App.css';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { findElectionsNearMe } from './services/electionInfoRetrievalService';

function App() {

  return (
    <div className="App">
      <ReactGoogleAutocomplete
        apiKey={getGoogleApiKey()}
        onPlaceSelected={(place) => {
          findElectionsNearMe(place.formatted_address);
        }}
      />
    </div>
  );
}

export default App;
