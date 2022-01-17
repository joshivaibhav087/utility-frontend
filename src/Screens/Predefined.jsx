import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { downloadFile } from "../utils";

const PreQuery = () => {
  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));

    axios(`${process.env.REACT_APP_MAIN}/props`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => {
        var dropdowndata = [];
        response.data.map((val) => {
          dropdowndata.push({ value: val, label: val });
        });
        setDropdown(dropdowndata);
      })
      .catch((error) => {
        alert(error.response ? error.response.data : "Error");
      });
  }, []);

  const [prequery, setPrequery] = useState("");
  const handleChange = (e) => {
    setPrequery(e);
  };

  console.log(prequery);

  const submitQuery = (e) => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    const url = `${process.env.REACT_APP_MAIN}/downloadExcelFile/?query=${prequery.value}`;
    downloadFile(url, "Pre-filled.xlsx", auth.token);
  };

  return (
    <div>
      
      <center>
        <form onSubmit={(e) => submitQuery(e)}>
          <label>Select a Query:</label>
          <br />
          <div className="container mt-3" style={{ width: "300px" }}>
            <Select
              options={dropdown}
              onChange={(e) => handleChange(e)}
              id="prequery"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            style={{ marginTop: "40px" }}
          >
            Submit Query
          </button>
        </form>
      </center>
    </div>
  );
};

export default PreQuery;
