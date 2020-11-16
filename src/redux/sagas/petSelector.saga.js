import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* selectPet(action) {
  console.log(action.payload);
  try {
    yield axios.post('/api/pets', action.payload);
  } catch (error) {
    console.log(error);
  }
 }

function* petSelector() {
    yield takeLatest('SELECT_PET', selectPet);
  }
  
  export default petSelector;
  