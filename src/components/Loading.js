import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import LargeMessageWrapper from "./LargeMessageWrapper";

export default function Loading() {
  return (
    <LargeMessageWrapper>
      <>
        <FontAwesomeIcon className="mr-5" icon={faSpinner} spin />
        Hold on, fetching some data :)
      </>
    </LargeMessageWrapper>
  );
}
