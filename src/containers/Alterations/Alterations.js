import React, { PureComponent } from 'react';
import alters from '../../json/alter.json';
import { Alter } from '../../compoents/Alter/Alter';

export default class Alterations extends PureComponent {
  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const { alters } = this.props;
    return (
      <div className="d-md-flex justify-content-md-center mt-5 flex-md-wrap">
        {alters &&
          alters.map((item, i) => (
            <Alter alterItem={item} key={`${item.id}_${i}`} />
          ))}
      </div>
    );
  }
}
