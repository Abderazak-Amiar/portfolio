import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
type logoPropType = {
  logoStyle: string;
};
function LogoComp(props: Readonly<logoPropType>) {
  const { logoStyle } = props;
  return (
    <Link to="/" className='logoLink'>
      <Typography variant="h5" className={logoStyle}>
        A.Amiar
      </Typography>
    </Link>
  );
}

export default LogoComp;
