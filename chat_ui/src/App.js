import './App.css';
// import FormIndex from "./modules/authForms";
import FormIndex from './modules/authForms/FormIndex';
import DashboardIndex from './modules/dashboard/DashboardIndex';
// import Input  from './components/Input';
import {Route , Routes , Navigate} from 'react-router-dom';

// const ProtectedRoute = ({child})=>{
//   console.log("1");
//   const IsLoggedIn = localStorage.getItem('user:token') !== null || true  ;
//   console.log(IsLoggedIn);

//   if(!IsLoggedIn){
//     return <Navigate to={'/user/signin'}/>
//   }else if(IsLoggedIn && ['/user/signin' , '/user/signup'].includes(window.location.pathname)){
//     return <Navigate to={'/'}/>

//   }
//   console.log("2");
//   console.log("qwerty:>>> " + child);
//     return child;
// }

function App() {
  return (
    <>
    <Routes>
      <Route path='/user/signin' exact element={
        // <ProtectedRoute>
          <FormIndex IsSignInPage={true} />
        //  </ProtectedRoute>
      } />
      <Route path='/user/signup' exact element={
      // <ProtectedRoute>
        <FormIndex IsSignInPage={false} />
      // </ProtectedRoute>
      } />
      <Route path='/' exact element={
        // <ProtectedRoute>
          <DashboardIndex />
        //  </ProtectedRoute>
      } />


    </Routes>
    
    </>
  );
}

export default App;
