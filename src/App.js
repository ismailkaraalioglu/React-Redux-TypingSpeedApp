import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { wordsData } from "./wordsData";
import { shuffleWords } from "./utils/shuffleWords";
import { useDispatch } from "react-redux";
import { setWordsData } from "./redux/words/wordSlice";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWordsData(shuffleWords(wordsData)));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
