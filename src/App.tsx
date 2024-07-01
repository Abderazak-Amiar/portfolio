import { Grid } from '@mui/material';
import './App.css';
import NavBarComp from './components/organisms/NavBarComp';
import Image from './components/atoms/Image';


function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <NavBarComp />
        <Image imageLink="abderazak.png" width='200px' alt="My Photo" />
      </Grid>
    </Grid>
  );
}

export default App;
