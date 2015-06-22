import React from 'react';

export default class MastHead extends React.Component {

  propTypes: {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mnv-ec-masthead">
        <div className="mnv-ec-masthead-outer-wrap">
          <div className="mnv-ec-masthead-wrap">
            <a href={this.props.logo.href} className="mnv-ec-masthead-logo svg-logo">
              <img alt={this.props.logo.alt} src={this.props.logo.src} className="mh-logo"/>
            </a>
            <h1 className="mnv-ec-masthead-text">
              <span className="mnv-ec-masthead-title">{this.props.title}</span>
              <span className="mnv-ec-masthead-flytitle">{this.props.subtitle}</span>
            </h1>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

MastHead.defaultProps = {
  logo: {
    href: "http://www.economist.com",
    alt: "The Economist",
    src: "//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg"
  }
};