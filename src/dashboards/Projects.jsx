import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
} from "react-icons/fa";
// import { mycontext } from "../fetch/ContextProvider";
import AddProgram from "./AddProgram";
import { MdAddBox } from "react-icons/md";
import { IoMdCloudDownload, IoMdPrint } from "react-icons/io";

// Import jsPDF and AutoTable for PDF generation
import jsPDF from "jspdf";
import "jspdf-autotable";

function Progects() {
  // const { project, setProject } = mycontext();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [addProgram, setAddProgram] = useState(false);
  const [viewProgram, setViewProgram] = useState(false); // Controls View modal visibility
  const [selectedProgram, setSelectedProgram] = useState(null); // Store selected program data


const [project, setProject] = useState([]);


 
  useEffect(() => {
    const getproject = async () => {
      try {
        const response = await axios.get(
          "https://elis-dev-backend.onrender.com/project/getProjects"
        );
        console.log(response.data);
        setProject(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getproject();
  }, []);


  // Define table columns
  const columns = useMemo(
    () => [
      {
        Header: () => (
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        ),
        id: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedRows.includes(row.original._id)}
            onChange={() => handleSelect(row.original._id)}
          />
        ),
      },
      {
        Header: "ID",
        accessor: (row, i) => i + 1,
      },
      {
        Header: "Project Name",
        accessor: "projectTitle",
      },
      {
        Header: "Documents",
        accessor: "documents",
      },
      {
        Header: "Images",
        accessor: "images",
      },
      {
        Header: "project Content",
        accessor: "projectContent",
      },
      {
        Header: "project Rep",
        accessor: "projectRep",
      },
      {
        Header: "  project Link",
        accessor: "  projectLink",
      },

      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex gap-4">
            <FaEye
              className="text-[#ea7b30] cursor-pointer"
              onClick={() => handleView(row.original)}
            />
            <FaEdit
              className="text-[#4caf50] cursor-pointer"
              onClick={() => handleEdit(row.original)}
            />
            <FaTrash
              className="text-[#f44336] cursor-pointer"
              onClick={() => handleDelete(row.original._id)}
            />
          </div>
        ),
      },
    ],
    [selectedRows, selectAll]
  );

  // Handle selection
  const handleSelect = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);
    setSelectedRows(checked ? project.map((row) => row._id) : []);
  };

  // Open and close the AddProgram modal
  const handleProgram = () => {
    setAddProgram(!addProgram);
  };

 

  // Function to handle printing the list
  const handlePrint = () => {
    window.print();
  };

  // Function to handle downloading the list as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // AutoTable plugin for generating the table in PDF
    doc.autoTable({
      head: [["ID", "Program Name"]],
      body: project.map((row, index) => [index + 1, row.projectTitle]),
    });

    // Save the generated PDF
    doc.save("programs-list.pdf");
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    pageOptions,
    state: { pageIndex, pageSize },
    setPageSize,
  } = useTable(
    {
      columns,
      data: project,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );



  return (
    <div className="pt-20 pl-12 md:pl-24 lg:pl-48">
      {addProgram && <AddProgram handleProgram={handleProgram} />}

      {/* View Program Modal */}
      

      <div className="ml-10  pr-11 md:pl-8 pt-4 md:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-11/12 text-sm md:text-lg ">
        <div className="flex flex-row gap-4 items-center">
          <div
            className="flex flex-row gap-1 items-center text-green-500 cursor-pointer hover:underline "
            onClick={handleProgram}
          >
            <MdAddBox
              className=" text-2xl md:text-base cursor-pointer transition-colors  "
              onClick={handleProgram}
            />
            <span>Add Programs</span>
          </div>

          <div
            className="flex flex-row items-center gap-1 text-green-500 cursor-pointer hover:underline"
            onClick={handlePrint}
          >
            <IoMdPrint className="  text-sm md:text-base cursor-pointer transition-colors duration-300 " />
            <span>Print Lists</span>
          </div>

          <div
            className="flex flex-row items-center gap-1 text-green-500 cursor-pointer hover:underline"
            onClick={handleDownloadPDF}
          >
            <IoMdCloudDownload className="text-sm md:text-base cursor-pointer transition-colors duration-300 " />
            <span>Download as PDF</span>
          </div>
        </div>

        <div className="mt-2 md:mt-0 font-extralight">
          {project.length} programs
        </div>
      </div>

      <div className="m-2 md:m-5 font-sans">
        <table
          className="w-full md:w-11/12 mx-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-3 border-b border-gray-200 text-gray-700 bg-gray-100 text-left text-sm font-semibold"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="text-sm hover:bg-gray-100"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-3 border-b border-gray-200"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex flex-col md:flex-row justify-between md:justify-end pr-4 md:pr-12 pt-4 items-center gap-4 md:gap-2">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className={`${
                canPreviousPage
                  ? "bg-[#093A3E] text-white hover:bg-[#ea7b30]"
                  : "bg-gray-200 text-gray-400"
              } font-bold py-2 px-3 rounded-lg flex items-center`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className={`${
                canNextPage
                  ? "bg-[#093A3E] text-white hover:bg-[#ea7b30]"
                  : "bg-gray-200 text-gray-400"
              } font-bold py-2 px-3 rounded-lg flex items-center`}
            >
              <FaChevronRight />
            </button>
          </div>

          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm"
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Progects;
