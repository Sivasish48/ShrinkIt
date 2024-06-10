import { Button } from "@/components/ui/button";
import SearchInput from "./Pages/SearchInput";
//import DialogButton from "./Pages/DialogButton";
//import Nav from "./Pages/Nav";
import { TopNavbar } from "./components/ui/top-navbar";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
      <div>
      <TopNavbar/>
        <Routes>
       {/* // <SearchInput /> */}
        
        <Route path="/"  element={<SearchInput />}/>
        <Route path="/profile"  element={<Profile />}/>
       

        </Routes>

      </div>
      </Router>
    </>
  );
}



export default App;
