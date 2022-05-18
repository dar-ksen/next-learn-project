import NextLink from "next/link";
import styles from '../styles/Link.module.css'

const Link = ({children, href}) => {
  return (
    <NextLink href={href}>
      <a className={ styles.link}>{children}</a>
    </NextLink>
  )
};

export default Link;