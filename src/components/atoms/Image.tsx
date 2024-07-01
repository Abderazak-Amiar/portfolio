import { Box } from '@mui/material';
import { ImageProfileStyle } from '../../style/image-style';
type imagePropType = {
  imageLink: string;
  alt?: string;
  width?: string;
  height?: string;
};
function Image(props: Readonly<imagePropType>) {
  const { imageLink, alt, width, height } = props;
  return (
    <Box sx={ImageProfileStyle}>
      <Box
        component="img"
        alt={alt}
        src={imageLink}
        width={width}
        height={height}
      />
    </Box>
  );
}

export default Image;
