import React from "react";
import Dropdown from "../common/Dropdown";
import styled from "styled-components";
import colors from "@/src/style/color";
import { useDispatch } from "react-redux";
import { setInput } from "@/src/store/register";
import { useAppSelector } from "@/src/store/hooks";
import { BsChevronDown } from "react-icons/bs";

const Wrapper = styled.div`
  .select__options {
    width: 300px;
    border: 1px solid black;
    background-color: #fff;
    top: 60px;
  }

  .select__item {
    padding: 20px 10px;

    &:hover {
      background-color: ${colors.lightblue[50]};
    }
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Select = styled.div`
  width: 300px;
  height: 50px;
  padding: 10px 20px 10px 10px;
  border: 1px solid ${colors.grey[500]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: ${colors.grey[700]};

  p {
    user-select: none;
  }
`;

interface RegisterSelectProps {
  title: string;
  options: string[];
}

const RegisterSelect: React.FC<RegisterSelectProps> = ({ title, options }) => {
  const { input } = useAppSelector(state => state.registerReducer);
  const { type } = input;
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Title className="select__title">{title}</Title>
      <Dropdown>
        <Dropdown.Trigger>
          <Select>
            <p>{type === "1" ? "프로젝트" : "스터디"}</p>
            <BsChevronDown />
          </Select>
        </Dropdown.Trigger>
        <Dropdown.List className="select__options">
          {options.map((option, index) => (
            <Dropdown.Item
              className="select__item"
              key={index}
              onSelect={() => {
                dispatch(setInput({ name: "type", value: String(index + 1) }));
              }}
            >
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </Wrapper>
  );
};

export default RegisterSelect;
