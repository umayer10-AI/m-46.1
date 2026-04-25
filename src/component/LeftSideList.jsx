"use client"
import { Data } from "@/context/Context";
import Link from "next/link";
import React, { useContext } from "react";

const LeftSideList = ({data}) => {

    const {c,setC} = useContext(Data)

  return (
    <div className="flex flex-col">
      {data.map((v) => (
        <Link
          onClick={() => setC(v.category_id)}
          href={`/category/${v.category_id}`}
          key={v.category_id}
          className={c===v.category_id ? "btn btn-warning": "btn"}
        >
          {v.category_name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideList;
