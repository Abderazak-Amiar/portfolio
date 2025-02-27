import { Typography } from '@mui/material';
import { logoPropType } from '@propsTypes/_.types';
import { Link } from 'react-router-dom';

function LogoComp(props: Readonly<logoPropType>) {
  const { logoStyle } = props;
  return (
    <Link to="/" className="logoLink">
      <Typography className={logoStyle}>A.Amiar</Typography>
    </Link>
  );
}

export default LogoComp;
