import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import MenuItem from './MenuItem';
import s from './Menu.module.scss';

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`
    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query GETMAINMENU {
        wpgraphql {
            menuItems(where: {location: PRIMARY}) {
                nodes {
                    ...MenuItem
                }
            }
            generalSettings {
                url
            }
        }
    }
`;

const Menu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.wpgraphql.menuItems) {
          const menuItems = data.wpgraphql.menuItems.nodes;
          const wordPressUrl = data.wpgraphql.generalSettings.url;

          return (
            <nav className={s.navigation} id={'menu-navigation'}>
              {
                menuItems &&
                menuItems.map((menuItem) => (
                  <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
                ))
              }
            </nav>
          );
        }
        return null;
      }}
    />
  );
};

export default Menu;
