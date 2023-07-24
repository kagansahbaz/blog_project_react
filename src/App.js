import Nav from "./Components/Nav";
import MainContainer from "./Components/MainContainer"
import "../src/app.css";
import {blogs, categories} from "./data/data";

function App() {
  const title = "Blog Site Title";
  
  return (
    <>
    <Nav header={title}/>
    <MainContainer blogs={blogs} categories={categories}/>
    </>
  );
}

export default App;