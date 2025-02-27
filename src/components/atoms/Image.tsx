import { Box } from '@mui/material';
import { imagePropType } from '@propsTypes/_.types';
import { ImageProfileStyle } from '@style/image-style';

function Image(props: Readonly<imagePropType>) {
  const { imageLink, alt, width, height, style } = props;
  return (
    <Box sx={ImageProfileStyle}>
      <Box
        component="img"
        alt={alt}
        src={imageLink}
        width={width}
        height={height}
        className={style}
      />
    </Box>
  );
}

export default Image;
