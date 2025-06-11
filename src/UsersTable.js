import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          rows.leneth>0?
          rows.map((row) => (
            <TableRow key={row.id} sx={{"&:last-child td,&:last-child":{border:0}}}>
              <TableCell component={"th"} scope="row">
                {row.id}
              </TableCell>
              <TableCell component={"th"} scope="row">
                {row.name}
              </TableCell>
              <TableCell component={"th"} scope="row">
                <button sx={{ margin: "0px 10px" }} onClick={() => {}}>
                  update
                </button>
                <button sx={{ margin: "0px 10px" }} onClick={() => {}}>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          )):(
 <TableRow sx={{"&:last-child td,&:last-child":{border:0}}}>
<TableCell component={"th"} scope="row">
            No Data
              </TableCell>
    
 </TableRow>


          )
        
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;
