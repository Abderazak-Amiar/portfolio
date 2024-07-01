import { Grid } from '@mui/material';
import './App.css';
import NavBarComp from './components/organisms/NavBarComp';


function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <NavBarComp />
      </Grid>
    </Grid>
  );
}

export default App;
