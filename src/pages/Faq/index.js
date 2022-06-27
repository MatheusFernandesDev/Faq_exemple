import React, { useEffect, useState } from "react";
import { PageArea } from "./styled";

import Datas from "./Datas";

import { PageContainer, PageTitle } from "../../components/MainComponents";

const FaqPage = () => {
  return (
    <PageContainer>
      <PageTitle> FAQ </PageTitle>
      <PageArea>
        <form>
          <Datas />
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default FaqPage;
