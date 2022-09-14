import React from "react";
// import { useNavigate, useEffect } from "react-router-dom";

function Home({ datas, handlerBack, onClick, id }) {
  // const userDetail = useFakeInactiveUser();
  // useEffect(() => {
  //   if (userIsInactive) {
  //     fake.logout();
  //     navigate("/session-timed-out");
  //   }
  // }, [userIsInactive]);

  return (
    <div
      class="row my-3 mx-2"
      style={{
        height: "100px",
        borderRadius: "20px 20px",
        backgroundColor: "#2B2D42",
      }}
    >
      <div className="d-flex ">
        <img
          src={datas.image}
          alt=""
          className="rounded-circle p-2"
          style={{ width: "100px", height: "100px" }}
        />
        <div className="m-auto p-auto ms-0 text-white">
          <h5>{datas.username}</h5>
          <p>{datas.follower}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
