import React from "react";
import Link from "next/link";
import classes from '../../styles/ui/link.module.scss';

export interface IPZLink {
  className: string,
  children: React.ReactNode,
  href: string;
}

const PZLink = ({ children, href, className }: IPZLink) => {
  const reExternalLink = new RegExp('(http://)|(https://)')

  return reExternalLink.test(href)
    ? <a className={[classes.link, className].join(' ')} href={href}>{ children }</a>
    : <Link className={[classes.link, className].join(' ')} href={href}>{ children }</Link>
}

export default PZLink;
 