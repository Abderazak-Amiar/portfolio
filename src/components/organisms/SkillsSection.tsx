import Image from '@components/atoms/Image';
import { Grid, Typography } from '@mui/material';
import Carousel from './Carousel';

function SkillsSection() {
  return (
    <>
      <Grid container spacing={2} sx={{ marginBlock: '32px' }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography
            variant="h3"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
              },
            }}
          >
            Crafting Exceptional Web Experiences
          </Typography>
          <Image imageLink="companies.png" style="skill-section-image" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
              },
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="h5"
            sx={{
              paddingBlock: { xs: '16px', sm: '16px' },
              textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'start',
                lg: 'start',
                xl: 'start',
              },
            }}
          >
            Whether you're looking for a skilled developer to tackle complex
            back-end logic or a creative mind to design engaging user
            interfaces, I'm here to deliver exceptional results.
          </Typography>

          <Carousel />
        </Grid>
      </Grid>

      {/* <Grid container>
        <Grid item md={12}>
          <Typography variant="h2">I’v involved with..</Typography>
          <Typography variant="body1">
            HERE ARE A FEW COMPANIES IN MY PREVIOUS TIME I’VE WORKED WITH. I'VE
            MADE VARIOUS AWESOME PROJECTS. SCROLL DOWN TO CHECK MORE.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <ExperienceCardList />
        </Grid>
      </Grid> */}
      <Grid container>
        <Grid item md={12}>
          <img width={'100%'} src="commingsoon.webp" alt="" />
        </Grid>
      </Grid>
    </>
  );
}

export default SkillsSection;
