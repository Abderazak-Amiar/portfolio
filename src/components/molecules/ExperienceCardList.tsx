import ExperienceCard from '@components/atoms/ExperienceCard';
import { EXPERIENCE_OVERVIEW } from '@constants/index';
import { Box } from '@mui/material';

function ExperienceCardList() {
  return (
    <Box sx={{ background: 'red' }}>
      {EXPERIENCE_OVERVIEW.map((item) => (
        <ExperienceCard
          key={item.id}
          companyLogo={item.logo!}
          role={item.role}
        />
      ))}
    </Box>
  );
}

export default ExperienceCardList;
