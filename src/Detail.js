import React from "react";
import datas from "./data/data.json";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Detail() {
  return (
    <div className="row my-3 mx-2 ">
      <div
        class="col"
        style={{
          height: "46vh",
          borderRadius: "20px 20px",
          backgroundColor: "#D3D3D3",
        }}
      >
        <div className="row ">
          <div className="col d-flex justify-content-center align-content-center mt-5">
            <img
              src={datas[1].image}
              alt=""
              className="rounded-circle"
              style={{
                width: "130px",
                height: "130px",
                border: "5px solid red",
              }}
            />
          </div>
        </div>

        {/* name */}
        <div className="row ">
          <div className="col d-flex justify-content-center my-3">
            <h5 className="fw-bold">{datas[1].username}</h5>
          </div>
        </div>

        {/* follower */}
        <div className="row d-flex justify-content-center align-content-center">
          <div className="col-3 d-flex my-3 flex-column justify-content-end align-items-center">
            <h5 className="fw-bold">{datas[1].follower}</h5>
            <p style={{ letterSpacing: "2px" }}>Follower</p>
          </div>
          <div className="col-3 d-flex my-3 flex-column align-items-center">
            <h5 className="fw-bold">{datas[1].following}</h5>
            <p style={{ letterSpacing: "2px" }}>Following</p>
          </div>
        </div>
      </div>

      {/* button back */}
      <div className="row my-3 ">
        <div className="col d-flex justify-content-center align-items-center">
          <button
            className="btn bg-primary text-white"
            style={{ width: "100px", fontWeight: "bold" }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
