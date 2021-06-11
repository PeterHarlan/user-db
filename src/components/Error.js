import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import LargeMessageWrapper from "./LargeMessageWrapper";

export default function Error({ error }) {
  return (
    <LargeMessageWrapper>
      <>
        <FontAwesomeIcon className="mr-5" icon={faExclamationTriangle} />
        {`${error}`}
      </>
    </LargeMessageWrapper>
  );
}
