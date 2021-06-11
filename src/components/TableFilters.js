import React from "react";
import { Form } from "react-bootstrap";

export default function TableFilters({
  fnPeopleFilter,
  filterTag,
  placeHolder,
}) {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Control
        onChange={(e) => fnPeopleFilter(e, filterTag)}
        placeholder={placeHolder}
      />
    </Form>
  );
}
