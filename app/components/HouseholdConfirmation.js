import React from 'react';

export default class HouseholdConfirmation extends React.Component {
  static propTypes = {
    kids: React.PropTypes.array,
    household: React.PropTypes.object,
  };

  static defaultProps = {
    kids: [],
    household: { adults: [] },
  };

  _makeList = (obj) => Object.keys(obj).filter(key => obj[key]).join(', ');

  render() {
    const { adults, childIncome } = this.props.household;
    const kids = this.props.kids;
    return (
      <div className="form__body [ col col--1-1 ]">
        <p> You reported <span className="u-strong">{adults.length + kids.length}</span> total household members: </p>
        <p> <span className="u-strong">{kids.length}</span> {kids.length > 1 ? 'children' : 'child'} earning ${childIncome.total} </p>
        <p> <span className="u-strong">{adults.length}</span> adult{adults.length > 1 ? 's' : ''} earning ${
          adults.map(adult => parseInt(adult.earnings.total) +
                              parseInt(adult.publicAssistance.total) +
                              parseInt(adult.otherIncome.total))
        } </p>
        {
          adults.map((adult, index) => (
            <div className="form__group">
              <div className="col col--1-12">
                <h2 className="u-strong">{index + 1}.</h2>
              </div>
              <div className="col col--11-12">
                <h2 className="u-strong u-uppercase">{adult.name.first} {adult.name.last}</h2>
                <p>{adult.earnings.hasNone ? 'No earnings' : `$${adult.earnings.total} from earnings, ${adult.earnings.types[adult.earnings.type]}` }</p>
                <p>{adult.publicAssistance.hasNone ? 'No public assistance' : `$${adult.publicAssistance.total} from publicAssistance, ${adult.publicAssistance.types[adult.publicAssistance.type]}` }</p>
                <p>{adult.otherIncome.hasNone ? 'No other income' : `$${adult.otherIncome.total} from otherIncome, ${adult.otherIncome.types[adult.otherIncome.type]}` }</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
