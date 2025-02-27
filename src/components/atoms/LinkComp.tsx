import { linkCompPropType } from '@propsTypes/_.types';
import { Link } from 'react-router-dom';

function LinkComp(props: Readonly<linkCompPropType>) {
  const { link, linkStyle, text } = props;
  return (
    <Link to={link} className={linkStyle}>
      {text}
    </Link>
  );
}

export default LinkComp;
