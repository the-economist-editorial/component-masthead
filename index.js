import React from 'react';

export default class MastHead extends React.Component {

  // static defaultProps() {
  //   return {
  //     subtitle: 'Cooolll'
  //   };
  // }

  propTypes: {
    title: React.propTypes.string.isRequired,
    subtitle: React.propTypes.string
  }

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="mnv-ec-masthead">
        <div className="mnv-ec-masthead-outer-wrap">
          <div className="mnv-ec-masthead-wrap">
            <a href="http://www.economist.com" className="mnv-ec-masthead-logo svg-logo">
              <img alt="The Economist" src="//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg" className="mh-logo"/>
            </a>
            <h1 className="mnv-ec-masthead-text">
              <span className="mnv-ec-masthead-title">{this.props.title}</span>
              <span className="mnv-ec-masthead-flytitle">{this.props.subtitle}</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }

}