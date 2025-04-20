import React from "react";
import { twMerge } from "tailwind-merge";

interface TableProps {
  headers: string[];
  data: (string | number | React.ReactNode)[][];
  className?: string;
  maxHeight?: string;
}

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  className = "",
  maxHeight = "400px", // Default max height
}) => {
  return (
    <div className={twMerge("relative my-8 w-full", className)}>
      <div className={"w-full overflow-hidden rounded-lg border border-gray-200"}>
        {/* Header section - fixed */}
        <div className={"w-full"}>
          <table className={"w-full table-auto border-collapse text-left text-sm text-gray-500"}>
            <thead className={"bg-gray-100 text-xs font-medium text-gray-700 uppercase"}>
              <tr>
                {headers.map((header, index) => (
                  <th scope={"col"} className={"px-6 py-3"} key={index}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        {/* Body section - scrollable */}
        <div className={`w-full overflow-y-auto`} style={{ maxHeight }}>
          <table className={"w-full table-auto border-collapse text-left text-sm text-gray-500"}>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  className={twMerge("bg-white hover:bg-gray-50", rowIndex !== data.length - 1 ? "border-b border-gray-200" : "")}
                  key={rowIndex}
                >
                  {row.map((cell, cellIndex) => (
                    <td className={"px-6 py-4"} key={cellIndex}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
