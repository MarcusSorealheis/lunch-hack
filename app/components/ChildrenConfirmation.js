import React from 'react';

export default class ChildrenConfirmation extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
  }

  _makeList = (obj) => Object.keys(obj).filter(key => obj[key]).join(', ');

  render() {
    return (
      <div className="form__body [ col col--1-1 ]">
        <p>
          You reported <span className="u-strong">{this.props.kids.length}</span> children in your household:
        </p>
        {
          this.props.kids.map((kid, index) => (
            <div className="form__group">
              <div className="col col--1-12">
                <h2 className="u-strong">{index + 1}.</h2>
              </div>
              <div className="col col--11-12">
                <h2 className="u-strong u-uppercase">{kid.name.first} {kid.name.last}</h2>
                <p className="u-titlecase">{kid.student ? 'Student' : 'Non-Student'}</p>
                <p className="u-titlecase">{this._makeList(kid.status)}</p>
                <p className="u-titlecase">{this._makeList(kid.ethnicity)}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
