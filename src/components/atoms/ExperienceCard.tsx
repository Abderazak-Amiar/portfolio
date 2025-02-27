import Image from '@components/atoms/Image';
import { Paper, Typography } from '@mui/material';
import { experienceCardType } from '@propsTypes/_.types';

function ExperienceCard(props: Readonly<experienceCardType>) {
  const { companyLogo, role } = props;
  return (
    <Paper
      sx={{
        border: 'solid 1px var(--primary-light1)',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignmentBaseline: 'central',
        width: '400px',
      }}
    >
      <Image imageLink={companyLogo} width="125px" />
      <Typography variant="h5">{role}</Typography>
    </Paper>
  );
}

export default ExperienceCard;
