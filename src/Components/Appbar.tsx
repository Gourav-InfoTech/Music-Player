import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { VscBellDot } from "react-icons/vsc";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

const Appbar = () => {
  const appbar = {
    background: "rgba(16,16,18,0.97)",
    // width: "calc(100% - 288px)",
    height: "4.5em",
  };
  return (
    <>
      <div style={appbar}>
        <div className="main_bar py-6 flex justify-between align-middle">
          <div>
          <Button style={{fontSize:"20px",marginLeft:"20px"}}>
              <IoChevronBack />
            </Button>
          </div>

          <div className="flex">
            <div className="flex mr-10">
              <Input type="text" placeholder="What You Wish?" />
              <Button style={{fontSize:"20px",marginLeft:"20px"}}>
                <RiSearch2Line />
              </Button>
            </div>
            <div className="flex align-middle mr-16">
              <Button className="mr-12">
                <VscBellDot />
              </Button>
              <Button style={{fontSize:"27px"}}>
                <BsPersonCircle />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;

const Input = styled.input`
  width: 70% ;
  background-color: transparent;
  outline: none;
  caret-color: #8e8e8e;
  color: #aeaeae;
`;
const Button = styled.button`
  color: white;
  font-size: 20px;
`;
