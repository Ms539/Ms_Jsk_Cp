import Adress from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

  <div className="card"style={{textAlign: "center", display: "flex",backgroundColor:'Orange' ,position:'center' ,marginLeft : '600px', marginTop : '50px',marginButtom : '20px' ,marginRight : '250px',width: '450px' }} >
   

   <ProfilePhoto />
  <FullName />
  <Adress />
    
 


  </div>
  );
}


    


export default App;
