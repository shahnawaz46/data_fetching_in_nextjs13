"use client"; // Error components must be Client Components

import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
    console.log(error)
  return <div>error</div>;
};

export default Error;
