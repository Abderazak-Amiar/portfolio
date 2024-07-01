import { Link } from 'react-router-dom';
type linkCompPropType = {
  link: string;
  linkStyle?: string;
  text: string;
};
function LinkComp(props: Readonly<linkCompPropType>) {
  const { link, linkStyle, text } = props;
  return (
    <Link to={link} className={linkStyle}>
      {text}
    </Link>
  );
}

export default LinkComp;
