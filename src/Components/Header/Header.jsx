
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Header() {

  return (
    <>
      <div className="header">
        <div className="header_text">
          <div className="header_heading">Shopping</div>
        </div>
        <div className="d-flex pt-2">
        <Link to="/">
          <div className="divpadding">
            <div>Home</div>
          </div>
        </Link>
        <Link to="/">
          <div className="divpadding">
            <div>Products</div>
          </div>
        </Link>
        </div>
        
        <Link to="/cart">
          <div className="header_carticon pt-2">
            {" "}
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon className="header_Shoppingcart" />
              </StyledBadge>
            </IconButton>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
