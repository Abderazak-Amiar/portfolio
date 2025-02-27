import { Box, Typography } from '@mui/material';
import { badgePropType } from '@propsTypes/_.types';
import { skillStyle } from '@style/badge-list-style';

function Badge(props: Readonly<badgePropType>) {
  const { skill, icon, style } = props;
  return (
    <Box className={style}>
      {icon}
      <Typography sx={skillStyle}>{skill}</Typography>
    </Box>
  );
}

export default Badge;
