import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Provider } from "react-redux";
import store from "./store";

import About from "./routes/About/About";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Jumbotron from "./routes/Bootstrap/Jumbotron/Jumbotron";
import Button from "./routes/Bootstrap/Button/Button";
import ButtonGroup from "./routes/Bootstrap/ButtonGroup/ButtonGroup";
import Table from "./routes/Bootstrap/Table/Table";
import Thumbnail from "./routes/Bootstrap/Thumbnail/Thumbnail";
import Label from "./routes/Bootstrap/Label/Label";
import Badge from "./routes/Bootstrap/Badge/Badge";
import Dropdown from "./routes/Bootstrap/Dropdown/Dropdown";
import Nav from "./routes/Bootstrap/Nav/Nav";
import Navbar from "./routes/Bootstrap/Navbar/Navbar";
import Alert from "./routes/Bootstrap/Alert/Alert";
import Progressbar from "./routes/Bootstrap/Progressbar/Progressbar";
import ListGroup from "./routes/Bootstrap/ListGroup/ListGroup";
import Panel from "./routes/Bootstrap/Panel/Panel";
import Well from "./routes/Bootstrap/Well/Well";
import Carousel from "./routes/Bootstrap/Carousel/Carousel";
import Modal from "./routes/Bootstrap/Modal/Modal";
import Tooltip from "./routes/Bootstrap/Tooltip/Tooltip";
import Popover from "./routes/Bootstrap/Popover/Popover";
import Breadcrumb from "./routes/Bootstrap/Breadcrumb/Breadcrumb";
import Tab from "./routes/Bootstrap/Tab/Tab";
import Pagination from "./routes/Bootstrap/Pagination/Pagination";
import Pager from "./routes/Bootstrap/Pager/Pager";
import Grid from "./routes/Bootstrap/Grid/Grid";
import PageHeader from "./routes/Bootstrap/PageHeader/PageHeader";
import Form from "./routes/Bootstrap/Form/Form";
import SupportedControl from "./routes/Bootstrap/SupportedControl/SupportedControl";
import FormLayout from "./routes/Bootstrap/FormLayout/FormLayout";
import InputGroup from "./routes/Bootstrap/InputGroup/InputGroup";


const appRoot = document.getElementById("app-root");

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={hashHistory}
      onUpdate={() => {
        window.scrollTo(0, 0)
      }}
      scrollBehavior={{
        updateScrollPosition: function updateScrollPosition() {
          window.location.hash = window.decodeURIComponent(window.location.hash);
          const hashParts = window.location.hash.split('#');
          if (hashParts.length > 2) {
            const hash = hashParts.slice(-1)[0];
            const element = document.querySelector(`#${hash}`);
            if (element) {
              element.scrollIntoView();
            }
          } else {
            window.scrollTo(0, 0);
          }
        }
      }}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="home" component={Home}></Route>
        // <Route path="about" component={About}></Route>
        // <Route path="contact" component={Contact}></Route>
        <Route path="jumbotrons" component={Jumbotron}></Route>
        <Route path="buttons" component={Button}></Route>
        <Route path="buttongroups" component={ButtonGroup}></Route>
        <Route path="tables" component={Table}></Route>
        <Route path="thumbnails" component={Thumbnail}></Route>
        <Route path="labels" component={Label}></Route>
        <Route path="badges" component={Badge}></Route>
        <Route path="dropdowns" component={Dropdown}></Route>
        <Route path="navs" component={Nav}></Route>
        <Route path="navbars" component={Navbar}></Route>
        <Route path="alerts" component={Alert}></Route>
        <Route path="progressbars" component={Progressbar}></Route>
        <Route path="listgroups" component={ListGroup}></Route>
        <Route path="panels" component={Panel}></Route>
        <Route path="wells" component={Well}></Route>
        <Route path="carousels" component={Carousel}></Route>
        <Route path="modals" component={Modal}></Route>
        <Route path="tooltips" component={Tooltip}></Route>
        <Route path="popovers" component={Popover}></Route>
        <Route path="breadcrumbs" component={Breadcrumb}></Route>
        <Route path="tabs" component={Tab}></Route>
        <Route path="paginations" component={Pagination}></Route>
        <Route path="pagers" component={Pager}></Route>
        <Route path="grids" component={Grid}></Route>
        <Route path="pageheaders" component={PageHeader}></Route>
        <Route path="forms" component={Form}></Route>
        <Route path="supportedcontrols" component={SupportedControl}></Route>
        <Route path="formlayouts" component={FormLayout}></Route>
        <Route path="inputgroups" component={InputGroup}></Route>

      </Route>
    </Router>
  </Provider>,
  appRoot
);
