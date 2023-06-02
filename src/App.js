import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowDetail from './components/ShowDetail';
import BookingForm from "./components/BookingForm"
function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/show/:id" element={<ShowDetail/>} />
        <Route path="/booking/:showId" element={<BookingForm />} />
    </Routes>
  );
}

export default App;
