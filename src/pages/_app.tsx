import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Reset } from "styled-reset";
import Header from "../components/base/Header";
import Modal from "../components/common/Modal";
import wrapper from "../store";
import { useAppSelector } from "../store/hooks";
import GlobalStyle from "../style/globals";

const App = ({ Component, pageProps }: AppProps) => {
  const { active } = useAppSelector(state => state.modalReducer);

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      {active && <Modal />}
    </Suspense>
  );
};

export default wrapper.withRedux(App);
