import { Box, Typography } from '@mui/material';
import { articlePropType } from '@propsTypes/_.types';
import {
  articleBoxStyle,
  articleContentStyle,
  articleHeadingStyle,
} from '@style/article-style';

function Article(props: Readonly<articlePropType>) {
  const { contentStyle, children, heading } = props;
  return (
    <Box sx={articleBoxStyle}>
      <Typography sx={articleHeadingStyle}>{heading}</Typography>
      <Typography sx={articleContentStyle} className={contentStyle}>
        {children}
      </Typography>
    </Box>
  );
}

export default Article;
