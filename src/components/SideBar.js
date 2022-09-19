import React from "react"
import logo from "../assets/images/logo.png"
import {Link, Route, Switch } from 'react-router-dom'
import ContentWarapper from "./ContentWrapper"
import LastProduct from "./LastProduct"
import CategoriesInDb from "./CategoriesInDb"
import CardList from "./CardList"
import Chart from "./Chart"
import NotFound from "./NotFound"
import SearchProducts from "./SearchProducts"
import Detail from "./Detail"


function SideBar () {

    return (

		<>

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src= {logo} alt="Digital House" />
				</div>
			</a>

			<hr className="sidebar-divider my-0"/>

			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH Productos</span></Link>
			</li>

			<hr className="sidebar-divider"/>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/last-product">
					<i className="fas fa-fw fa-folder"></i>
					<span>Last Product</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/brand">
					<i className="fas fa-fw fa-folder"></i>
					<span>Category List</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/charts">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/table">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span>
				</Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>

		<Switch>

			<Route exact={true} path="/"> <ContentWarapper /></Route>
			<Route  path="/last-product"> <LastProduct /></Route>
			<Route  path="/brand"> <CategoriesInDb /> </Route>
			<Route  path="/charts"> <CardList /> </Route>
			<Route  path="/table"> <Chart /> </Route>
			<Route  path="/detail"> <Detail/> </Route>
			<Route  path="/search"> <SearchProducts /> </Route>
			<Route  path="/last-product"> <LastProduct /></Route>
			{/* <Route  path="categories/:id"> <CategoryDetail /></Route> */}
			<Route path="*"> <NotFound /> </Route>

		</Switch>

	</>

		
    )
}

export default SideBar