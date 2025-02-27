import LinkComp from '@components/atoms/LinkComp';
import { Box } from '@mui/material';

type linkMenuCompPropType = {
  menuLinksText: Array<string>;
  linkStyle?: string;
  linkMenuStyle?: string;
};
function LinkMenuComp(props: Readonly<linkMenuCompPropType>) {
  const { menuLinksText, linkStyle, linkMenuStyle } = props;
  return (
    <Box data-testid="navbar-links-container" className={linkMenuStyle}>
      {menuLinksText?.map((link) => {
        return (
          <LinkComp key={link} text={link} link="#" linkStyle={linkStyle} />
        );
      })}
    </Box>
  );
}
export default LinkMenuComp;
