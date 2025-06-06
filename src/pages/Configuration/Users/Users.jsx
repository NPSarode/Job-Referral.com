import React, { useEffect, useMemo, useState } from "react";

import TableContainer from "../../../common/TableContainer";
import { Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { 
  getUsers as onGetUsers 
} from '../../../store/actions'

const Users = () => {

  const [userData, setUserData] = useState([])

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.userReducer)

  const columns = useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Created On",
        accessor: "created_on",
        Cell: cellProps => {
          return cellProps.cell.row.original.created_on.split("T").join(" ").split("Z");
        },
      }
    ],
    []
  );

  useEffect(() => {
    setUserData(users.users || [])
  },[users.users])

  useEffect(() => {
    dispatch(onGetUsers())
  }, [dispatch])

  return (
    <div className="page-content mt-4">
      <div className="container-fluid">
        <Card>
          <CardBody>
            <TableContainer
              columns={columns}
              data={userData}
              // isGlobalFilter={true}
              customPageSize={10}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Users;
