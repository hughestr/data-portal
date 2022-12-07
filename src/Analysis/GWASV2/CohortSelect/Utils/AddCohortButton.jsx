import React from 'react';
import { atlasDomain } from '../../Shared/wizardEndpoints/cohortMiddlewareApi';

const AddCohortButton = () => (
  <React.Fragment>
    <button
      style={{
        border: "none",
        color: "white",
        backgroundColor: "#4375B3"
      }}
      type='button'
      onClick={() => window.open(atlasDomain(), '_blank')}
    >
      Add New Cohort
    </button>
  </React.Fragment>
);

export default AddCohortButton;
