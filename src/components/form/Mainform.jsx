"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Name from "./Name";
import Mail from "./Mail";
import Phone from "./Phone";
import Roll from "./Roll";
import TrackId from "./TrackId";
import Year from "./Year";
import Rate from "./Rate";

import { ThemeToggle } from "../ThemeToggle";
const Mainform = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rate: "",
    trackId: "",
    selectedYear: "",
    roll: "",
    cyber: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Name formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Mail formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Phone formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Roll formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <TrackId formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Year formData={formData} setFormData={setFormData} />;
    } else {
      return <Rate formData={formData} setFormData={setFormData} />;
    }
  };

  const FormTitles = [
    "Name",
    "Email",
    "Phone",
    "Roll",
    "TryHackME ID",
    "Year",
    "Rate",
  ];

  return (
    <div className=" flex  ">
      <ThemeToggle className={"w-4 h-4"} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   ">
        <div className="progress "></div>

        <Card className=" sm:w-[400px] w-full  rounded-none sm:border-solid border-none overflow-hidden">
          <motion.div
          // animate={{
          //   translateX: `-${page * 100}%`,
          // }}
          >
            <CardHeader>
              <motion.div>
                <CardTitle>{FormTitles[page]}</CardTitle>
              </motion.div>
              <CardDescription>
                Welcome to Defcon , register yourself
              </CardDescription>
            </CardHeader>
          </motion.div>
          <motion.div
          // animate={{
          //   translateX: `-${page * 100}%`,
          // }}
          >
            <CardContent>{PageDisplay()}</CardContent>
          </motion.div>
          <CardFooter className="flex sm:justify-between gap-10">
            <Button
              variant="outline"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Go Back
            </Button>
            <Button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("form submited");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Mainform;
