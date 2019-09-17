import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 60px;
  width: 230px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: white;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  width: 460px;
  transform: translateX(${props => (props.active ? "-230px" : 0)});
  transition: transform 0.4s;
`;
const TopLevel = styled.div`
  width: 230px;
`;
const SubLevel = styled.div`
  width: 230px;
`;

const Item = styled.div`
  padding: 10px;
  background: white;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
`;

class ProductNavComponents extends React.Component {
  state = {
    active: -1
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  setActive = active => this.setState({ active });

  render() {
    const { title, items } = this.props;
    const { active } = this.state;
    return (
      <Outer>
        <Slider active={active > -1}>
          <TopLevel>
            <Box m={1}>
              <Typography variant="h3">{title}</Typography>
            </Box>
            {items.map((item, i) =>
              item.link ? (
                <Link to={item.link} key={i}>
                  <Item>{item.label}</Item>
                </Link>
              ) : (
                <Item onClick={() => this.setActive(i)} key={i}>
                  {item.label} ->{" "}
                </Item>
              )
            )}
          </TopLevel>
          {active > -1 && (
            <SubLevel>
              <Box m={1}>
                <Typography variant="h3" onClick={() => this.setActive(-1)}>
                  Back
                </Typography>
              </Box>
              {items[active].items.map((item, i) => (
                <Link to={item.link} key={i}>
                  <Item>{item.label}</Item>
                </Link>
              ))}
            </SubLevel>
          )}
        </Slider>
      </Outer>
    );
  }
}

export default ProductNavComponents;
