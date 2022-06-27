import styled from "styled-components";
import { Utils } from "../../config/Utils";

export const Container = styled.div`
  width: 100%;
  height: ${Number(Utils.INPUTS.HEIGHT.replace("px", "")) + 16}px;
  // 16 = altura do label
  /* flex-wrap: wrap; */
  display: flex;
  align-items: flex-end;
  overflow: visible;
  column-gap: 7px;
  row-gap: 30px;
`;
