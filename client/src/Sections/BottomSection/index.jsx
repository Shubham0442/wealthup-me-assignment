import React, { useEffect, useState } from "react";
import axios from "axios";

const BottomSection = () => {
  const [code, setCode] = useState();
  const [generatedCode, setGeneratedCode] = useState(
    JSON.parse(localStorage.getItem("code")) || {}
  );
  const [msg, setMsg] = useState({});

  const handleSubmit = () => {
    if (code !== generatedCode?.code) setMsg({ error: "Enter a valid code" });
    else {
      axios
        .post("https://odd-erin-moth-tie.cyclic.app/api/codes/use", {
          code: code,
          created_at: generatedCode?.created_at
        })
        .then((res) => {
          //   console.log(res.data);
          setMsg(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //   console.log(msg);

  const handleRefreshCode = () => {
    axios
      .get("https://odd-erin-moth-tie.cyclic.app/api/codes")
      .then((res) => {
        // console.log(res.data);
        setGeneratedCode(res.data.code);
        localStorage.setItem("code", JSON.stringify(res.data.code));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        position: "relative",
        zIndex: "1",
        marginTop: "400px",
        paddingBottom: "100px",
        color: "#fff"
      }}
    >
      <div>
        <input
          style={{ color: "black" }}
          type="text"
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={handleRefreshCode}>Refresh Code</button>
      </div>
      <div>{generatedCode?.code !== "" && generatedCode.code}</div>
      <button onClick={handleSubmit}>Submit</button>
      <div
        style={{
          color: msg?.error ? "#f70403" : "#49c62f",
          fontWeight: "600",
          fontSize: "20px"
        }}
      >
        {msg?.error || msg?.msg}
      </div>
    </div>
  );
};

export default BottomSection;
