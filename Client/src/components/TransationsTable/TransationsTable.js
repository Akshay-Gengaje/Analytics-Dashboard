import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import "./transations.css";

const TransationsTable = (props) => {
  const month = props.month;
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const API = process.env.REACT_APP_API_KEY + "api/transections";
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    fetchAPI();
  }, [page, rowsPerPage, month]);

  const fetchAPI = async () => {
    const body = {
      search: "",
      page: page + 1,
      limit: rowsPerPage,
      month: month,
    };

    await axios
      .get(API, {
        params: {
          body,
        },
      })
      .then(async (res) => {
        setRows([...res.data.products]);
        setTotal(res.data.total);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <Paper
          className="paper"
            sx={{
              width: "100%",
              overflow: "hidden",
              // background: "transparent",
              // backgroundColor: "rgba(239, 231, 235, 0.3)",
              backgroundColor: "#FFFFFF",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
          >
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className="th-row">
                    <TableCell align="center" size="medium">
                      ID
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Title
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Description
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Price
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Category
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Sold
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Image
                    </TableCell>
                    <TableCell align="center" size="medium">
                      Date of sale
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.length !== 0 ? (
                    rows.map((row) => {
                      return (
                        <TableRow key={row._id} className="tableRow">
                          <TableCell style={{ color: "#5E6E82" }}>
                            {row.id}
                          </TableCell>
                          <TableCell style={{ color: "#5E6E82" }}>
                            {row.title}
                          </TableCell>
                          <TableCell
                            style={{ color: "#5E6E82" }}
                            align="center"
                          >
                            {row.description}
                          </TableCell>
                          <TableCell
                            style={{ color: "#5E6E82" }}
                            align="center"
                          >
                            {row.price}
                          </TableCell>
                          <TableCell style={{ color: "#5E6E82" }}>
                            {row.category}
                          </TableCell>
                          <TableCell style={{ color: "#5E6E82" }}>
                            {row.sold === true ? "Sold" : "Not Sold"}
                          </TableCell>
                          <TableCell>
                            <img
                              src={row.image}
                              alt={"img"}
                              style={{ width: "6rem" }}
                            />
                          </TableCell>
                          <TableCell style={{ color: "#5E6E82" }}>
                            {row.dateOfSale}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow >
                      <TableCell colSpan={8} className="text-center">Loading</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              className="d-flex justify-content-end align-item-center p-2 text-center pagination"
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default TransationsTable;


