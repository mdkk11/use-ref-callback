import './App.css';
import { UserProfileWithUseCallback } from './components/UseCallback';
import { UserProfileWithUseRef } from './components/UseRef';

function App() {
  return (
    <>
      <UserProfileWithUseCallback />
      <UserProfileWithUseRef />
    </>
  );
}

export default App;
