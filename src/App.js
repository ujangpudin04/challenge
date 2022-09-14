import datas from "../src/data/data.json";
import Detail from "./Detail";
import Home from "./Home";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form } from "react-bootstrap";

function App() {
  // let Navigate = useNavigate();
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // // handler back
  // function handlerBack(e) {
  //   e.preventDefault();
  //   Navigate("/detail");
  // }

  return (
    <div className="row" style={{ backgroundColor: "#2B2D42" }}>
      <div
        class="col-4 bg-white m-auto p-auto"
        style={{ height: "100vh", overflowX: "hidden" }}
      >
        {datas.map((data, id) => {
          return <Home datas={data} />;
        })}
      </div>
    </div>
  );
}

export default App;
