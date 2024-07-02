import { Box, Typography } from '@mui/material';
import '../../css/skills-badge-style.css'
import { skillStyle } from '../../style/badge-list-style';
type badgePropType = {
  skill: string;
  icon?: string;
  style?: string;
};
function Badge(props: Readonly<badgePropType>) {
  const { skill, icon, style } = props;
  return (
    <Box className={style}>
      {icon}
      <Typography sx={skillStyle}>
        {skill}
      </Typography>
    </Box>
  );
}

export default Badge;
