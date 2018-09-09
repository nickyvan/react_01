import React, { Component } from 'react';
import Article from '../Article/index';
import Banner from '../Banner';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Banner
          bg={`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
          title="Latest Blog Posts"
          subtitle="Read and get updated on how we progress."
        />
        <main className="main-content bg-gray">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <Article />
              <hr />
              <Article />
              <nav className="flexbox mb-50">
                <a className="btn btn-white disabled">
                  <i className="ti-arrow-left fs-9 mr-4" /> Newer
                </a>
                <a className="btn btn-white" href="#">
                  Older
                  <i className="ti-arrow-right fs-9 ml-4" />
                </a>
              </nav>
            </div>
          </div>
        </main>
      </div>
    );
  }
}