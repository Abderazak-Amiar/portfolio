import Image from '@components/atoms/Image';
import BadgeList from '@components/molecules/BadgeList';
import Hero from '@components/organisms/Hero';
import NavBarComp from '@components/organisms/NavBarComp';
import SkillsSection from '@components/organisms/SkillsSection';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Abel',
      fontStyle: 'normal',
      textTransform: 'none',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            height: { md: '100vh', lg: '100vh', xl: '100vh' },
            background: '#F5F2FF',
          }}
        >
          <NavBarComp />
          <Image
            imageLink="abderazak.png"
            width="200px"
            alt="My Photo"
            style="image-style"
          />
          <BadgeList />
          <Hero />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
          xl={10}
          sx={{
            height: { md: '100vh', lg: '100vh', xl: '100vh' },
            margin: 'auto',
            paddingInline: { xs: '16px', sm: '16px' },
          }}
        >
          <SkillsSection />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
