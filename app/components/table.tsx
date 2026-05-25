import React from "react";
import { twMerge } from "tailwind-merge";

interface TableProps {
  headers: string[];
  data: TableCell[][];
  className?: string;
  maxHeight?: string;
}

type RichTableCell =
  | { kind: "bold"; value: string }
  | { className?: string; kind: "span"; style?: React.CSSProperties; value: string }
  | { code: string; kind: "code-note"; note: string };
type TableCell = string | number | RichTableCell;

function isRichCell(cell: TableCell): cell is RichTableCell {
  return typeof cell === "object" && "kind" in cell;
}

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  className = "",
  maxHeight = "400px", // Default max height
}) => {
  return (
    <div className={twMerge("relative my-8 w-full", className)}>
      <div className={"w-full overflow-auto rounded-lg border border-gray-200"} style={{ maxHeight }}>
        <table className={"w-full table-auto border-collapse text-left text-sm text-gray-500"}>
          <thead className={"sticky top-0 bg-gray-100 text-xs font-medium text-gray-700 uppercase"}>
            <tr>
              {headers.map((header) => (
                <th scope={"col"} className={"px-6 py-3"} key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                className={twMerge("bg-white hover:bg-gray-50", rowIndex !== data.length - 1 ? "border-b border-gray-200" : "")}
                key={row.map((cell) => String(cell)).join("|")}
              >
                {row.map((cell, cellIndex) => (
                  <td className={"px-6 py-4"} key={`${String(cell)}-${cellIndex}`}>
                    {isRichCell(cell) && cell.kind === "bold" && <b>{cell.value}</b>}
                    {isRichCell(cell) && cell.kind === "span" && (
                      <span className={cell.className} style={cell.style}>
                        {cell.value}
                      </span>
                    )}
                    {isRichCell(cell) && cell.kind === "code-note" && (
                      <>
                        <code>{cell.code}</code>
                        <br />
                        <br />
                        {cell.note}
                      </>
                    )}
                    {!isRichCell(cell) && cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
