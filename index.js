import React from 'react';

export default class MastHead extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string,
      logo: React.PropTypes.object,
      children: React.PropTypes.element,
    };
  }

  static get defaultProps() {
    return {
      logo: {
        href: 'http://www.economist.com',
        alt: 'The Economist',
        src: '//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg',
      },
    };
  }

  render() {
    return (
      <div className="mnv-ec-masthead">
        <div className="mnv-ec-masthead-outer-wrap">
          <div className="mnv-ec-masthead-wrap">
            <a href={this.props.logo.href}
            className="mnv-ec-masthead-logo svg-logo">
              <img alt={this.props.logo.alt}
              src={this.props.logo.src}
              className="mh-logo"/>
            </a>
            {this.props.title ?
              <h1 className="mnv-ec-masthead-text">
                <span className="mnv-ec-masthead-title">
                  {this.props.title}
                </span>
                <span className="mnv-ec-masthead-flytitle">
                  {this.props.subtitle}
                </span>
              </h1> : null }
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
