import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

//NOTE : for now the store is provided inside PrinterListDemoPage

const store = configureStore({
    reducer: rootReducer
})

export default store;