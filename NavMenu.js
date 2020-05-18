import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
<div style={{width: '100%'}}>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="./images/guardian_logo.svg" alt="Guardian" width="160px" style={{paddingBottom: 10}}/>
        <span style={{fontSize: 25, fontWeight: 'bold', paddingLeft: 15, paddingTop: 15}}>work-assist</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fas fa-bars text-hudson-navy"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <button className="btn btn-navbar my-2 my-sm-0" type="submit">Login / Register</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="sub-nav-lg bg-hugo-blue-shade"  >
    <div className="nav container-fluid align-items-center" id="nav-tab" role="tablist">
      <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
        aria-controls="nav-hero" aria-selected="true" to="/counter/">Counter</Link>
      <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
        aria-controls="nav-hero" aria-selected="true" to="/fetchdata/">Fetch Data</Link>
    </div>
  </nav>
</div>
);
