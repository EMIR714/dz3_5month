import './App.css';
import NumberList from './pages/numberList/NumberList';
// import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className="App">
    {/* <MainPage /> */}
    <UsersPage />
    <NumberList />
    </div>
  );
}

export default App;
