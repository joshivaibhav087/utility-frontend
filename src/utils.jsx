import axios from "axios";
import FileSaver from "file-saver";

export const downloadFile = (url, fileName, token) => {
  axios
    .get(
      url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        responseType: "blob",
      }
    )
    .then((res) => {
      FileSaver.saveAs(res.data, fileName);
    })
    .catch((err) => {
      console.log(err);
    });
};
