import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <header className="header header-inverse bg-fixed" style={{backgroundImage: `${this.props.bg}`}} data-overlay={8}>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>{this.props.title}</h1>
            <p class="fs-20 opacity-70">{this.props.subtitle}</p>
          </div>
        </div>
      </div>
    </header>
    )
  }
}
