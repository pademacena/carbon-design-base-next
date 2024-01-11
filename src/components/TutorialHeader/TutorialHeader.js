'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderMenu,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  SideNavDivider,
} from '@carbon/react';
import {
  Switcher,
  Notification,
  UserAvatar,
  Fade,
  Switcher as SwitcherIcon,
} from '@carbon/icons-react';

import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
          </Link>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <Link href="/repos" passHref legacyBehavior>
              <HeaderMenuItem>Repositories</HeaderMenuItem>
            </Link>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/repos" passHref legacyBehavior>
                  <HeaderMenuItem>Repositories</HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
            >
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
            >
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
            >
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <SideNav
          isFixedNav
          expanded={true}
          isChildOfHeader={false}
          aria-label="Side navigation"
        >
          <SideNavItems>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu" isActive={true}>
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem
                aria-current="page"
                href="https://www.carbondesignsystem.com/"
              >
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavDivider />
            <SideNavLink href="https://www.carbondesignsystem.com/">
              L0 link
            </SideNavLink>
            <SideNavLink href="https://www.carbondesignsystem.com/">
              L0 link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </>
    )}
  />
);

export default TutorialHeader;
