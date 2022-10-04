import { Container, ContainerProps } from "@mui/material";
import {
  GridColumnMenu,
  GridColumnMenuContainer,
  GridColumnMenuProps,
  GridFilterMenuItem,
  SortGridMenuItems,
  useGridApiRef,
  DataGrid,
  GridColumns,
} from "@mui/x-data-grid";
import { usePeopleContext } from "../contexts/PeopleContext";
import { usePeople, Person } from "../core/people";

const columns: GridColumns<Person> = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 180,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },
  {
    field: "avatar",
    headerName: "Picture",
    width: 200,
  },
];

export function PeopleGrid(props: ContainerProps): JSX.Element {
  const { sx, ...other } = props;
  const { newPeople } = usePeopleContext();

  console.log(newPeople);

  return (
    <Container
      sx={{ py: 2, display: "flex", flexDirection: "column", ...sx }}
      {...other}
    >
      <DataGrid sx={{ flexGrow: 1 }} rows={newPeople} columns={columns} />
    </Container>
  );
}
