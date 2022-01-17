import ReactDatatable from "@ashvin27/react-datatable";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import * as FileSaver from "file-saver";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "../Styles/table.css";
import axios from "axios";
import { downloadFile } from "../utils";
export default function Table(props) {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [records, setRecords] = useState([]);

  const columns = [
    {
      key: "id",
      text: "id",
    },
    {
      key: "name",
      text: "name",
    },
    {
      key: "email",
      text: "email id",
    },
    {
      key: "action",
      text: "Options",
      cell: (record, index) => {
        const auth = JSON.parse(sessionStorage.getItem("auth"));

        return (
          <Button
            variant="contained"
            size="small"
            onClick={() => downloadFile("", "report.txt", auth.token)}
          >
            Download
          </Button>
        );
      },
    },
  ];

  const extraButtons = [
    {
      className: "buttons-excel",
      title: "Export To Excel",
      children: [<FileCopyIcon />],

      onClick: (event) => {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        downloadFile(`${process.env.REACT_APP_MAIN}/summary`, "summary.xlsx", auth.token); //api url,filename
      },
    },
  ];

  const config = {
    key_column: "id",
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    button: {
      excel: false,
      print: false,
      extra: true,
    },
    language: {
      loading_text: "Please be patient while data loads...",
    },
  };

  const getData = () => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    let url = `${process.env.REACT_APP_MAIN}/summary`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        setTotal(res.data.length);
        setRecords(res.data);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ReactDatatable
        className="table-main"
        config={config}
        records={records}
        columns={columns}
        total_record={total}
        loading={loading}
        extraButtons={extraButtons}
      />
    </>
  );
}
