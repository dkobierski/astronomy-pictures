import React from 'react';

import './ActionBar.scss';

type ActionBarProps = { left: React.ReactNode; right: React.ReactNode };

const ActionBar = ({ left, right }: ActionBarProps) => {
  return (
    <div className="action-bar">
      <div className="action-bar-left">{left}</div>
      <div className="action-bar-right">{right}</div>
    </div>
  );
};

export default ActionBar;
