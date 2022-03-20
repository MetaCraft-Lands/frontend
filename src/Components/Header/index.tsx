import { Row } from "antd";
import { Link } from "react-router-dom";
import {
  NavLink,
  HeaderSection,
  Span,
  NavContainer,
  NavLeft,
  NavRight,
} from "./styles";
import Login from "../WalletLogin/Login";
const Header = () => {
  const MenuItem = () => {
    return (
      <NavContainer>
        <NavLeft>
          <NavLink>
            <Link to="/">
              <Span>HOME</Span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/nft">
              <Span>MY METACRAFT</Span>
            </Link>
          </NavLink>

          <NavLink>
            <Link to="/whitepaper">
              <Span>WHITEPAPER</Span>
            </Link>
          </NavLink>
        </NavLeft>
        <NavRight>
          <NavLink>
            <Login />
          </NavLink>
        </NavRight>
      </NavContainer>
    );
  };

  return (
    <HeaderSection>
      <Row justify="space-between">
        <MenuItem />
      </Row>
    </HeaderSection>
  );
};

export default Header;
