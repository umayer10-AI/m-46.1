"use client"
import Link from "next/link";
import React from "react";

const LeftSideList = ({data,id}) => {

  return (
    <div className="flex flex-col">
      {data.map((v) => (
        <Link
          href={`/category/${v.category_id}`}
          key={v.category_id}
          className={id===v.category_id ? "btn btn-warning": "btn"}
        >
          {v.category_name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideList;
