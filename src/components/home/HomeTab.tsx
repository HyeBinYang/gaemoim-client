import React, { useState } from "react";
import Dropdown from "../common/Dropdown";
import Toggle from "../common/Toggle";

const HomeTab = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <ul>
        <li>전체</li>
        <li>프로젝트</li>
        <li>스터디</li>
      </ul>

      <div>
        <Dropdown />
        <Toggle
          left
          color="primary"
          size="small"
          checked={toggle}
          onClick={e => {
            setToggle(!toggle);
          }}
        >
          <h1>모집 중</h1>
        </Toggle>
      </div>
    </div>
  );
};

export default HomeTab;
