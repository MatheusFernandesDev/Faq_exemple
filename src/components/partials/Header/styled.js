import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #ccc;

  a {
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;

    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      height: 60px;

      .logo-1,
      .logo-2,
      .logo-3 {
        font-size: 27px;
        font-weight: bold;
      }
      .logo-1 {
        color: #ff0000;
      }
      .logo-2 {
        color: #00ff00;
      }
      .logo-3 {
        color: #0000ff;
      }
    }
    nav {
      padding-top: 10px;
      padding-bottom: 10px;

      ul,
      li {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      ul {
        display: flex;
        align-items: center;
        height: 60px;
      }
      li {
        margin-right: 20px;
        margin-left: 20px;

        a,
        button {
          border: 0;
          background: none;
          color: #000;
          font-size: 14px;
          textdecoration: none;
          cursor: pointer;
          outline: none;

          &:hover {
            color: #9999;
          }

          &.button {
            background-color: #ff8100;
            border-radius: 4px;
            color: #fff;
            padding: 5px 10px;
          }
          &.button:hover {
            background-color: #e57706;
          }
        }
      }
    }
  }
`;
