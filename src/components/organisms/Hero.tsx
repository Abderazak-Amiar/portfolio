import Article from '@components/atoms/Article';
import Stat from '@components/atoms/Stat';

import { HERO_STATS } from '@constants/index';
import { Box, Button } from '@mui/material';
import { heroStatsStyle } from '@style/hero-style';

function Hero() {
  return (
    <Box>
      <Article
        contentStyle="contentStyle"
        heading="Hey, I’m Abderazak"
        headingStyle="headingStyle"
      >
        I'm a software engineer, specialized in web development with a MERN/PERN
        stack, Shopify and WordPress technologies.
      </Article>
      <Box sx={heroStatsStyle}>
        {HERO_STATS.map((stat) => (
          <Stat
            style="stat-style"
            key={stat.id}
            title={stat.title}
            content={stat.content}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBlock: '16px',
          marginBlock: '32px',
        }}
      >
        <Button
          sx={{ marginInline: '8px', fontSize: '18px' }}
          variant="outlined"
        >
          Learn more
        </Button>
        <Button
          sx={{ marginInline: '8px', fontSize: '18px' }}
          variant="contained"
        >
          Let's Talk
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
