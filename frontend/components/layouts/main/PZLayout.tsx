import React from "react";
import PZHeader from "./PZHeader";
import PZFooter from "./PZFooter";

export interface IPZLayout {
  children: React.ReactNode,
}

const PZLayout = ({ children }: IPZLayout) => {
  return (
    <>
      <PZHeader  />
      { children }
      <PZFooter />
    </>
  )
};

export default PZLayout;
 