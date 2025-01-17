import {Link as LinkFromRouter} from "react-router-dom";
import styles from "src/component/link/Link.module.scss";

interface LinkProps {
  /**
   * Link value (text)
   */
  value: string;
  /**
   * Go to path page on link
   */
  path: string;
}

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return (
    <LinkFromRouter
      className={styles.link}
      to={props.path}
    >
      {props.value}
    </LinkFromRouter>
  );
};