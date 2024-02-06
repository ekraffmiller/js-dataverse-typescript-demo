import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiConfig } from '@iqss/dataverse-client-javascript/dist/core'
import {DataverseApiAuthMechanism} from "@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig";
import {getDataset} from "@iqss/dataverse-client-javascript";
ApiConfig.init('http://localhost:8000/api/v1', DataverseApiAuthMechanism.API_KEY, '086d4210-ccc7-4567-a736-a96010337cf0')

function App() {
  const datasetId = 'doi:10.5072/FK2/WNGH3Y';
  const datasetVersionId = '1.0';
  getDataset.execute(datasetId, datasetVersionId).then((dataset) => {
    console.log('Dataset:', JSON.stringify(dataset));
  });
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello! Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
