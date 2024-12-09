import RegisterForm from "./RegisterForm";
import Login from "./Login";
import Donated from "./Donated";
import Locations from "./Locations"
import OrderLocations from "./OrderLocations"
import Orderstart from "./Orderstart";
import OrderMain from "./OrderMain";
import Shopping from "./Shopping";
import PrepareOrder from "./PrepareOrder";
import UserTasks from "./UserTasks";
import RankSystem from "./RankSystem";
import UpdateOrderStatus from "./UpdateOrderStatus";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/RegisterForm" element={<RegisterForm/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/Donated" element={<Donated/>} />
        <Route path="/ItemLocation" element={<Locations />} />
        <Route path="/OrderLocations" element={<OrderLocations />} />
        <Route path="/os" element={<Orderstart />} />
        <Route path="/OrderMain" element={<OrderMain />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/PrepareOrder" element={<PrepareOrder />} />
        <Route path="/UserTasks" element={<UserTasks />} />
        <Route path="/RankSystem" element={<RankSystem />} />
        <Route path="/UpdateOrderStatus" element={<UpdateOrderStatus />} />
      </Routes>
    </div>
  );
}

export default App;
