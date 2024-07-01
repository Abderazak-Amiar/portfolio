import { Typography } from '@mui/material';
type logoPropType = {
  logoStyle: string;
};
function LogoComp(props: Readonly<logoPropType>) {
  const { logoStyle } = props;
  return (
    <Typography variant="h5" className={logoStyle}>
      A.Amiar
    </Typography>
  );
}

export default LogoComp;
