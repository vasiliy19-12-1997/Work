
import React from "react";

interface ErrorMessaggeProps {
    error:string,
}

export default function ErrorMessage({error}:ErrorMessaggeProps) {
  return <p>{error}</p>;
}
