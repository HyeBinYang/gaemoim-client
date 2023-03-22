import type { AppProps } from "next/app";
import { Reset } from "styled-reset";
import Header from "../components/base/Header";
import Modal from "../components/common/Modal";
import wrapper from "../store";
import { useAppSelector } from "../store/hooks";
import GlobalStyle from "../style/globals";

function App({ Component, pageProps }: AppProps) {
  const { active } = useAppSelector(state => state.modalReducer);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      {active && <Modal />}
    </>
  );
}

export default wrapper.withRedux(App);
