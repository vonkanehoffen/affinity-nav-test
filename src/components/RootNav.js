import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BillingIcon,
  OrderIcon,
  ProvisionIcon,
  SalesIcon,
  SelfServiceIcon,
  SupportIcon
} from "./affinity-icons";

const Outer = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  overflow: hidden;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: white;
  transition: width 0.2s ease-in;
  &:hover {
    width: 140px;
  }
`;

const ListItem = styled(Link)`
  display: flex;
  padding: 10px 10px 0px 5px;
  align-items: center;
  width: 140px;
  color: black;
  text-decoration: none;
`;

const IconWrap = styled.div`
  box-sizing: content-box;
  margin-right: 10px;
  padding: 4px;
  height: 30px;
  border-radius: 14px;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

const Item = ({ link, label, icon }) => (
  <ListItem to={link}>
    <IconWrap>{icon}</IconWrap>
    {label}
  </ListItem>
);

const RootNav = () => {
  return (
    <Outer>
      <Item icon={<BillingIcon />} label="Billing" link="/billing" />
      <Item icon={<OrderIcon />} label="Order" link="/order" />
      <Item icon={<ProvisionIcon />} label="Provision" link="/provision" />
      <Item icon={<SalesIcon />} label="Sales" link="/sales" />
      <Item
        icon={<SelfServiceIcon />}
        label="Self Service"
        link="/self-service"
      />
      <Item icon={<SupportIcon />} label="Support" link="/support" />
    </Outer>
  );
};

export default RootNav;
