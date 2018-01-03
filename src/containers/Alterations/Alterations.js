import React, { PureComponent } from 'react';
import alters from '../../json/alter.json';
import { Alter } from '../../compoents/Alter/Alter';
export default class Alterations extends PureComponent {
  render() {
    return (
      <div className="container main-block">
        {alters &&
          alters.map((item, i) => (
            <Alter alterItem={item} key={`${item.id}_${i}`} />
          ))}
      </div>
    );
  }
}
