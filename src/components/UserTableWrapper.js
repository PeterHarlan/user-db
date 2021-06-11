import React, { useState, useEffect } from "react";
import { Pagination, Table } from "react-bootstrap";
import styled from "styled-components";
import TableFilters from "./TableFilters";

const PAGE_SIZE = 50;
const TableContainer = styled.div`
  max-height: calc(100% - 50px);
  height: 100%;
  overflow-y: scroll;
`;

const PaginationContainer = styled.div`
  height: 50px;
`;

export default function UserTable({ originalPeopleList, fnSetUser }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [activePeopleList, setActivePeopleList] = useState([]);
  const [filterMap, setfilterMap] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    setActivePeopleList([...originalPeopleList]);
  }, [originalPeopleList]);

  useEffect(() => {
    // Filters the first name
    const filterFirstName = (person, targeName) => {
      const { title, first } = person.name || {};
      const firstName = generateFirstName(title, first);
      if (firstName.toLowerCase().includes(targeName.toLowerCase())) {
        return person;
      }
      return false;
    };

    // Filters the last name
    const filterLastName = (person, targeName) => {
      const { last } = person.name || {};
      if (last.toLowerCase().includes(targeName.toLowerCase())) {
        return person;
      }
      return false;
    };

    const filterStreet = (person, targetStreet) => {
      const { number, name } = person.location.street || {};
      const streetName = generateStreet(number, name);
      if (streetName.toLocaleLowerCase().includes(targetStreet.toLowerCase())) {
        return person;
      }
      return false;
    };

    // Maps the filter name to the filter function
    const filterFunctionMap = {
      firstName: filterFirstName,
      lastName: filterLastName,
      street: filterStreet,
    };

    // Reset the list to original state
    let peopleList = originalPeopleList;
    // Apply all active filters
    Object.entries(filterMap).forEach(([key, value]) => {
      const fnFilter = filterFunctionMap[key];
      peopleList = peopleList.filter((people) => fnFilter(people, value));
    });

    // Navigate the user back to page 1 because there are no remaineder pages
    if (peopleList.length < PAGE_SIZE) {
      fnUpdatePage(0);
    }

    // Update the current list
    setActivePeopleList([...peopleList]);
  }, [filterMap, originalPeopleList]);

  const fnUpdatePage = (newIndex) => {
    setPageIndex(newIndex);
  };

  let pageIndexes = [];
  for (let i = 0; i < activePeopleList.length / PAGE_SIZE; i++) {
    pageIndexes.push(
      <Pagination.Item
        key={i}
        active={i === pageIndex}
        onClick={() => fnUpdatePage(i)}
      >
        {i + 1}
      </Pagination.Item>
    );
  }

  const calculateRowIndex = (personIndex) => {
    return personIndex + pageIndex * PAGE_SIZE + 1;
  };

  const generateFirstName = (title, first) => {
    return title ? `${title}. ${first}` : first;
  };

  const generateStreet = (number, name) => {
    return `${number} ${name}`;
  };

  const TableBody = ({ peopleList }) => {
    // If there are no users to display
    if (peopleList.length <= 0) {
      return (
        <tr>
          <td colSpan="8">No user found</td>
        </tr>
      );
    }

    return peopleList
      .slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE)
      .map((person, index) => {
        const key = person.login.uuid;
        const { title, first, last } = person.name || {};
        const { city, state, country, postcode } = person.location || {};
        const { number, name } = person.location.street || {};
        return (
          <tr
            key={key}
            onMouseEnter={() => {
              fnSetUser(key);
            }}
          >
            <td>{calculateRowIndex(index)}</td>
            <td>{generateFirstName(title, first)}</td>
            <td>{last}</td>
            <td>{generateStreet(number, name)}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{country}</td>
            <td>{postcode}</td>
          </tr>
        );
      });
  };

  const peopleFilter = (event, filterId) => {
    event.preventDefault();

    const searchTarget = event.target.value;
    setfilterMap((prev) => {
      return { ...prev, [filterId]: searchTarget };
    });
  };

  return (
    <>
      <TableContainer>
        <h1 className="display-1">Users</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <TableFilters
                  {...{
                    fnPeopleFilter: peopleFilter,
                    filterTag: "firstName",
                    placeHolder: "First Name",
                  }}
                />
              </th>
              <th>
                <TableFilters
                  {...{
                    fnPeopleFilter: peopleFilter,
                    filterTag: "lastName",
                    placeHolder: "Last Name",
                  }}
                />
              </th>
              <th>
                <TableFilters
                  {...{
                    fnPeopleFilter: peopleFilter,
                    filterTag: "street",
                    placeHolder: "Street Name",
                  }}
                />
              </th>
              {/* TODO Add filter to the reset of these */}
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            <TableBody peopleList={activePeopleList} />
          </tbody>
        </Table>
      </TableContainer>
      <PaginationContainer className="d-flex">
        <Pagination className="mx-auto my-auto" size="sm">
          {pageIndexes}
        </Pagination>
      </PaginationContainer>
    </>
  );
}
