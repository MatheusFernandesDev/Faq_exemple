import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
  }

  .area {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 500px;

    .area--title {
      width: 200px;
      text-align: right;
      padding-right: 20px;
      font-size: 14px;
      font-weight: bold;
    }

    .area--input {
      flex: 1;

      input {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
        outline: 0;
        transition: all ease 0.4s;

        &:focus {
          border: 1px solid #333;
          color: #333;
        }

        &::placeholder {
          color: #006fcf;
        }

        &.teste {
          width: auto;
        }
      }

      button {
        background-color: #333;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        padding: 5px 10px;
        cursor: pointer;
        transition: all ease 0.4s;
        outline: 0;
        width: 100%;

        &:hover {
          background-color: #006fcf;
        }
      }
    }
  }
`;
