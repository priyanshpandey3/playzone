import { createMuiTheme, InputAdornment,
    makeStyles, Paper, Table, TableBody,
    TableCell, TableHead, TablePagination,
    TableRow, TableSortLabel, Toolbar } from "@material-ui/core"
    import react, { useState } from "react"
    import { useEffect } from "react"
    import { useDispatch, useSelector } from "react-redux"
    import { Link } from "react-router-dom";
    import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
   // import Controls from "../../screens/Admin/controls/Controls"
    import Search from "@material-ui/icons/Search"
    import { AddCircleOutlineTwoTone, CloseTwoTone, EditTwoTone, InfoRounded } from "@material-ui/icons"
    import { listRoles } from "./actions/usermanagementactions"
    
    import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
    import React, { Component }  from 'react';
    
    
    const theme = createMuiTheme({
    palette: {
       primary: {
           main: "#333996",
           light: '#3c44b126'
       },
       secondary: {
           main: "#f83245",
           light: '#f8324526'
       },
       background: {
           default: "#f4f5fd"
       },
    },
    overrides: {
       MuiAppBar: {
           root: {
               transform: 'translateZ(0)'
           }
       }
    },
    props: {
       MuiIconButton: {
           disableRipple: true
       }
    }
    })
    const useStyles = makeStyles({
    pageContent: {
       margin: theme.spacing(5),
       padding: theme.spacing(3),
    
    },
    table: {
       marginTop: theme.spacing(3),
       '& thead th': {
           fontWeight: '600',
           color: theme.palette.primary.main,
           backgroundColor: theme.palette.primary.light
       },
       '& tbody td': {
           fontWeight: '300'
       },
       '& tbody tr:hover': {
           backgroundColor: '#fffbf2',
           cursor: 'pointer'
       }
    },
    searchInput: {
       width: '1000px'
    },
    newButton: {
       position: 'absolute',
       right: '10px'
    }
    })
    
    const headCells = [
    { id: "id", label: "Role Id" },
    { id: "role", label: "Role" }
    
    ]
    
    export default function RoleListScreen(props) {
    const classes = useStyles();
    const pages = [4, 5, 6]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [addRolePopup, setAddrolePopUp] = useState(false)
    
    
    const userSignIn = useSelector(state => state.userSignin)
    const { userInfo } = userSignIn
    if (!userInfo) {
       props.history.push("/signin")
    }
    
    
    
    const [open, setOpen] = useState(false);
    
    const roleList = useSelector(state => state.roleList)
    const { loading, roles, error } = roleList
    
    
    
    
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(listRoles())
    
    }, [dispatch])
    
    
    const handleChangePage = (event, newPage) => {
       setPage(newPage);
    }
    
    const handleChangeRowsPerPage = event => {
       setRowsPerPage(parseInt(event.target.value, 10))
       setPage(0);
    }
    
    const handleSortRequest = cellId => {
       const isAsc = orderBy === cellId && order === "asc"
       setOrder(isAsc ? 'desc' : 'asc')
       setOrderBy(cellId)
    }
    
    const StableSort = (array) => {
       const stabilizedThis = array.map((el, index) => [el, index]);
       stabilizedThis.sort((a, b) => {
           // const order = comparator(a[0], b[0]);
           if (order !== 0) return order;
           return a[1] - b[1]
       })
       return stabilizedThis.map((el) => el[0])
    }
    
    const getComparator = (order, orderBy) => {
       return order = 'desc'
           ? (a, b) => descendingComparator(a, b, orderBy)
           : (a, b) => -descendingComparator(a, b, orderBy)
    }
    
    function descendingComparator(a, b, orderBy) {
       if (b[orderBy] < a[orderBy]) {
           return -1;
       }
       if (b[orderBy] > a[orderBy]) {
           return 1;
       }
       return 0;
    }
    
    const searchHandler = (event) => {
       let target = event.target
       setFilterFn({
           fn: items => {
               if (target.value == "")
                   return items;
               else
                   return items.filter(x => x.roleName.includes(target.value))
           }
       })
    }
    
    
    
    
    return (
       <>
           <Paper className={classes.pageContent} >
            {loading ? <div>Loading</div> : error ? <div>error</div> : roles ?
                (
                    <Container>
                        <Container>
    
    <Row>
    
    <Col md={{ span: 2, offset: 2 }}>
    
    <Link to='/addRole'><Button variant="outline-success">Add Role</Button></Link>
    </Col> </Row> </Container>
            <Row>
                <Col md={{ span: 8, offset: 3 }}>
                    <div >
                        <Toolbar>
                            {/*  
                            <Controls.Input
                                label="" variant="standard"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>)
                                }}
                                onChange={searchHandler}
    
                               />
                              */}
                        </Toolbar>
                           <Table className={classes.table}>
                                <TableHead>
                                   <TableRow>
                                       {
                                           headCells.map(headCell => (
                                               <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                                                   {headCell.disableSorting ? headCell.label :
                                                       <TableSortLabel
                                                           active={orderBy === headCell.id}
                                                           direction={orderBy === headCell.id ? order : 'asc'}
                                                           onClick={() => { handleSortRequest(headCell.id) }}
                                                       >
    
                                                           {headCell.label}
                                                       </TableSortLabel>}
                                               </TableCell>
                                           ))
                                       }
                                   </TableRow>
                               </TableHead>
    
                               {StableSort(filterFn.fn(roles)).slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(item => (
    
                                   <TableBody>
    
                                       <TableRow key={item.roleID}>
                                           <TableCell>{item.roleID}</TableCell>
                                           <TableCell>{item.roleName}</TableCell>
    
    
                                       </TableRow>
    
    
                                   </TableBody>
    
    
    
    
                               ))}
    
                           </Table>
    
    
    
    
                           <TablePagination
                               component="div"
                               page={page}
                               rowsPerPageOptions={pages}
                               rowsPerPage={rowsPerPage}
                               count={roles.length}
                               onChangePage={handleChangePage}
                               onChangeRowsPerPage={handleChangeRowsPerPage}
                           />
    
    
    
    
    
    
    
                       </div>
                       </Col>
    </Row>
                       </Container>
    
    
    
                   )
    
    
    
    
    
                   : null
    
    
    
    
               }
    
    
    
    
           
    
    
    
           </Paper>
    
    
       </>
    )
    }