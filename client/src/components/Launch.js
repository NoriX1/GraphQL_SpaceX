import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = (props) => {
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: parseInt(props.match.params.flight_number) }
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <div>{error}</div>;

  const {
    mission_name,
    flight_number,
    launch_date_local,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch;
  console.log(launch_success);
  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span>
        {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_number}</li>
        <li className="list-group-item">Launch Date: <Moment format="DD.MM.YYYY HH:mm">{launch_date_local}</Moment></li>
        <li className="list-group-item">Launch Successful: {' '}
          <span className={classNames({
            'text-success': launch_success,
            'text-danger': !launch_success && launch_success !== null,
            'text-warning': launch_success === null
          })}>{launch_success ? 'Yes' : launch_success === null ? 'Not launched yet' : 'No'}</span>
        </li>
      </ul>
      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary">Back</Link>
    </div>
  );
}

export default Launch;