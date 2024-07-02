import { Grid } from '@mui/material';
import './css/App.css';
import Image from './components/atoms/Image';
import BadgeList from './components/molecules/BadgeList';
import NavBarComp from './components/organisms/NavBarComp';

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <NavBarComp />
        <Image imageLink="abderazak.png" width="200px" alt="My Photo" />
        <BadgeList />
      </Grid>
    </Grid>
  );
}

export default App;
