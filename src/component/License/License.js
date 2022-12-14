import React from "react";
import { useTable } from "react-table";

const data = [
  { firstName: "jane", lastName: "doe", age: 20 },
  { firstName: "john", lastName: "smith", age: 21 },
  { firstName: "john", lastName: "smith", age: 21 },
  { firstName: "john", lastName: "smith", age: 21 }
];

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      }
    ]
  },


  {
    Header: "Other rrsadasdasrInfo",
    columns: [
      {
        Header: "Age",
        accessor: "age"
      }
    ]
  },




];

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <table className= "mt-5"  {...getTableProps()}>
      <thead   >
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps() }>
          {headerGroup.headers.map(column => (

            <th {...column.getHeaderProps()}>{column.render("Header")}</th>

          ))}
        </tr>
      ))}
      </thead>

      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}
