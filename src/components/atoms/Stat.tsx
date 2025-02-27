import { Box, Typography } from '@mui/material';
import { statPropsType } from '@propsTypes/_.types';
function Stat(props: Readonly<statPropsType>) {
  const { title, content, style } = props;
  return (
    <Box className={style}>
      <Typography className="stat-title">{title}</Typography>
      <Typography className="stat-content">{content}</Typography>
    </Box>
  );
}

export default Stat;
