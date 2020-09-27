import React from 'react';

const MissionKey = () => {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success"></span>
        = Success
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger"></span>
        = Fail
      </p>
      <p>
        <span className="px-3 mr-2 bg-warning"></span>
        = Not launched yet
      </p>
    </div>
  );
}

export default MissionKey;