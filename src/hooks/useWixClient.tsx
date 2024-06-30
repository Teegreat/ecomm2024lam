"use client";

import { WixClientContext } from "@/context/WixContext";
import { useContext, useEffect } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
