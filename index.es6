import React from 'react';
import Icon from '@economist/component-icon';

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
        type: 'economist-small',
        size: '100%',
      },
    };
  }

  render() {
    let title = null;
    if (this.props.title) {
      title = (
        <h1 className="Masthead--title-wrap">
          <span className="Masthead--title">
            {this.props.title}
          </span>
          <span className="Masthead--flytitle">
            {this.props.subtitle}
          </span>
        </h1>
      );
    }
    return (
      <div className="Masthead">
        <div className="Masthead--container">
          <a
            href={this.props.logo.href}
            className="Masthead--logo"
            title={this.props.logo.alt}
          >
            <Icon
              icon={this.props.logo.type} background="transparent" size="100%"
            />
          </a>
          {title}
          {this.props.children}
        </div>
      </div>
    );
  }
}
