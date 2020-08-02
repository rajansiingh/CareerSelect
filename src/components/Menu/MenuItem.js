import React from 'react';
import { CreateLocalLink } from '../../utils';
import UniversalLink from '../Link/UniversalLink';

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <UniversalLink to={CreateLocalLink(menuItem, wordPressUrl)}>
      {menuItem.label}
    </UniversalLink>
  );
};

export default MenuItem;
