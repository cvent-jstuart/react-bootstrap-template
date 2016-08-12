import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import { Provider } from "react-redux";
import store from "./store";

import Alert from "./routes/Bootstrap/Alert/Alert";
import Badge from "./routes/Bootstrap/Badge/Badge";
import Breadcrumb from "./routes/Bootstrap/Breadcrumb/Breadcrumb";
import Button from "./routes/Bootstrap/Button/Button";
import ButtonGroup from "./routes/Bootstrap/ButtonGroup/ButtonGroup";
import Carousel from "./routes/Bootstrap/Carousel/Carousel";
import CustomStyle from "./routes/Bootstrap/CustomStyle/CustomStyle";
import Dropdown from "./routes/Bootstrap/Dropdown/Dropdown";
import Form from "./routes/Bootstrap/Form/Form";
import FormLayout from "./routes/Bootstrap/FormLayout/FormLayout";
import Glyphicon from "./routes/Bootstrap/Glyphicon/Glyphicon";
import Grid from "./routes/Bootstrap/Grid/Grid";
import Home from "./routes/Home/Home";
import InputGroup from "./routes/Bootstrap/InputGroup/InputGroup";
import Image from "./routes/Bootstrap/Image/Image";
import Jumbotron from "./routes/Bootstrap/Jumbotron/Jumbotron";
import Label from "./routes/Bootstrap/Label/Label";
import Layout from "./routes/Layout/Layout";
import ListGroup from "./routes/Bootstrap/ListGroup/ListGroup";
import MediaObject from "./routes/Bootstrap/MediaObject/MediaObject";
import Modal from "./routes/Bootstrap/Modal/Modal";
import Nav from "./routes/Bootstrap/Nav/Nav";
import Navbar from "./routes/Bootstrap/Navbar/Navbar";
import Pager from "./routes/Bootstrap/Pager/Pager";
import PageHeader from "./routes/Bootstrap/PageHeader/PageHeader";
import Pagination from "./routes/Bootstrap/Pagination/Pagination";
import Panel from "./routes/Bootstrap/Panel/Panel";
import Popover from "./routes/Bootstrap/Popover/Popover";
import Progressbar from "./routes/Bootstrap/Progressbar/Progressbar";
import ResponsiveEmbed from "./routes/Bootstrap/ResponsiveEmbed/ResponsiveEmbed";
import SupportedControl from "./routes/Bootstrap/SupportedControl/SupportedControl";
import Tab from "./routes/Bootstrap/Tab/Tab";
import Table from "./routes/Bootstrap/Table/Table";
import Thumbnail from "./routes/Bootstrap/Thumbnail/Thumbnail";
import Tooltip from "./routes/Bootstrap/Tooltip/Tooltip";
import Transition from "./routes/Bootstrap/Transition/Transition";
import ValidationState from "./routes/Bootstrap/ValidationState/ValidationState";
import Well from "./routes/Bootstrap/Well/Well";

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

        <Route path="alerts" component={Alert}></Route>
        <Route path="badges" component={Badge}></Route>
        <Route path="breadcrumbs" component={Breadcrumb}></Route>
        <Route path="buttons" component={Button}></Route>
        <Route path="buttongroups" component={ButtonGroup}></Route>
        <Route path="carousels" component={Carousel}></Route>
        <Route path="customstyles" component={CustomStyle}></Route>
        <Route path="dropdowns" component={Dropdown}></Route>
        <Route path="forms" component={Form}></Route>
        <Route path="formlayouts" component={FormLayout}></Route>
        <Route path="glyphicons" component={Glyphicon}></Route>
        <Route path="grids" component={Grid}></Route>
        <Route path="home" component={Home}></Route>
        <Route path="inputgroups" component={InputGroup}></Route>
        <Route path="images" component={Image}></Route>
        <Route path="jumbotrons" component={Jumbotron}></Route>
        <Route path="labels" component={Label}></Route>
        <Route path="listgroups" component={ListGroup}></Route>
        <Route path="mediaobjects" component={MediaObject}></Route>
        <Route path="modals" component={Modal}></Route>
        <Route path="navs" component={Nav}></Route>
        <Route path="navbars" component={Navbar}></Route>
        <Route path="pageheaders" component={PageHeader}></Route>
        <Route path="pagers" component={Pager}></Route>
        <Route path="paginations" component={Pagination}></Route>
        <Route path="panels" component={Panel}></Route>
        <Route path="popovers" component={Popover}></Route>
        <Route path="progressbars" component={Progressbar}></Route>
        <Route path="responsiveembeds" component={ResponsiveEmbed}></Route>
        <Route path="supportedcontrols" component={SupportedControl}></Route>
        <Route path="tabs" component={Tab}></Route>
        <Route path="tables" component={Table}></Route>
        <Route path="thumbnails" component={Thumbnail}></Route>
        <Route path="tooltips" component={Tooltip}></Route>
        <Route path="transitions" component={Transition}></Route>
        <Route path="validationstates" component={ValidationState}></Route>
        <Route path="wells" component={Well}></Route>

      </Route>
    </Router>
  </Provider>,
  appRoot
);
