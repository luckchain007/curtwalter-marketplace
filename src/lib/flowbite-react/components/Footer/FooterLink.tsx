import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type FooterLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export const FooterLink: FC<FooterLinkProps> = ({ href, children, className }) => {
  return (
    <li className={classNames('mr-4 last:mr-0 md:mr-6', className)}>
      <a href={href} className="hover:text-black dark:hover:text-white">
        {children}
      </a>
    </li>
  );
};
