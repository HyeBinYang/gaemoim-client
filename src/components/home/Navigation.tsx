import React from "react";
import styled from "styled-components";
import Text from "../common/Text";
import Link from "next/link";

const Wrapper = styled.header``;

export default function Navigation() {
  return (
    <Wrapper>
      <Link href="#">Gaemoim</Link>
    </Wrapper>
  );
}
