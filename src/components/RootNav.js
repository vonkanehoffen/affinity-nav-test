import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { BillingIcon, OrderIcon, ProvisionIcon, SalesIcon, SelfServiceIcon, SupportIcon } from '@bit/aurora.aurora-ds.affinity-icons'

const Outer = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  overflow: hidden;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: white;
  transition: width 0.2s ease-in;
  &:hover {
    width: 140px;
  }
`;

const ListItem = styled.div`
  display: flex;
  padding: 10px 10px 10px 5px;
  align-items: center;
  width: 140px;
  color: black;
`;

const IconWrap = styled.div`
  margin-right: 10px;
  padding: 4px;
  height: 52px;
  border-radius: 14px;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  &:hover {
    border-color: black;
  }
`;

const Item = ({link, label, icon }) => (
  <Link to={link}>
    <ListItem>
      <IconWrap>{icon}</IconWrap>
      {label}
    </ListItem>
  </Link>
)

const RootNav = () => {
  return (
    <Outer>
      <Item icon={<BillingIcon/>} label="Billing" link="/billing" />
      <Item icon={<OrderIcon />} label="Order" link="/order"/>
      <Item icon={<ProvisionIcon />} label="Provision" link="/provision"/>
      <Item icon={<SalesIcon />} label="Sales" link="/sales"/>
      <Item icon={<SelfServiceIcon />} label="Self Service" link="/self-service"/>
      <Item icon={<SupportIcon />} label="Support" link="/support" />
    </Outer>
  )
}

export default RootNav