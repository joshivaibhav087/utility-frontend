import React, { useState } from "react";
import { downloadFile } from "../utils";

function ManualQuery() {
  const [data, setData] = useState({
    queryToSubmit: "",
  });

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const submitQuery = (e) => {
    var submittedQuery = data.queryToSubmit.toLowerCase();
    if (submittedQuery.length === 0) {
      alert("Empty Query");
    } else if (!submittedQuery.startsWith("select")) {
      alert("Query doesnt start with Select");
    } else if (!submittedQuery.includes("where")) {
      alert("Query doesnt contain Where");
    } else {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      let url = `${process.env.REACT_APP_MAIN}/Manual`;
      downloadFile(url, "report.xlsx", auth.token);
      
    }
  };

  return (
    <div className="App">
     
      <center>
        <h3 style={{ marginTop: "35px" }}>Enter SQL Query here!</h3>
        <form onSubmit={(e) => submitQuery(e)}>
          <div className="form-outline col-md-6" style={{ marginTop: "40px" }}>
            <textarea
              className="form-control"
              onChange={(e) => handleChange(e)}
              id="queryToSubmit"
              rows="10"
              placeholder="Select * From Database.TableName"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            style={{ marginTop: "40px" }}
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}

export default ManualQuery;
