import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const renderLaunches = () => {
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>{error}</h4>;

    return data.launches.map(launch => {
      return (
        <LaunchItem
          key={launch.flight_number}
          launch={launch}
        />
      );
    }).reverse();
  }

  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {renderLaunches()}
    </Fragment>
  );
}

export default Launches;