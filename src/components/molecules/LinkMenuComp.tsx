import { Box } from '@mui/material';
import LinkComp from '../atoms/LinkComp';
type linkMenuCompPropType = {
  menuLinksText: Array<string>;
  linkStyle?: string;
  linkMenuStyle?: string;
};
function LinkMenuComp(props: Readonly<linkMenuCompPropType>) {
  const { menuLinksText, linkStyle, linkMenuStyle } = props;
  return (
    <Box className={linkMenuStyle}>
      {menuLinksText?.map((link) => {
        return (
          <LinkComp key={link} text={link} link="#" linkStyle={linkStyle} />
        );
      })}
    </Box>
  );
}
export default LinkMenuComp;
