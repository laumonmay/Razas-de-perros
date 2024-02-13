import '../scss/App.scss'
import dataDogs from '../data/dataDogs.json'
import { useState } from 'react';

import Form from './Form'
import Gallery from './Gallery'
import Header from './Header';

function App() {

  const [ listDogs ] = useState( dataDogs );
  console.log(listDogs);
  return (
    <div className='app'>
      <Header/>
      <main>
        
      <Form/>
      <Gallery listDogs={listDogs}/>

      </main>
    </div>
  )
}

export default App
