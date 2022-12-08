import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SelectCohortDropDown from '../SelectCohortDropDown/SelectCohortDropDown';
import '../../../GWASUIApp/GWASUIApp.css';

const CustomDichotomousCovariates = ({ dispatch, setVariableType, type, covariates }) => {
  const [firstPopulation, setFirstPopulation] = useState(undefined);
  const [secondPopulation, setSecondPopulation] = useState(undefined);
  const [providedName, setProvidedName] = useState('');

  const handleDichotomousSubmit = () => {
    const dichotomous = {
      variable_type: 'custom_dichotomous',
      cohort_ids: [
        firstPopulation.cohort_definition_id,
        secondPopulation.cohort_definition_id,
      ],
      provided_name: providedName,
    };
    dispatch(
      { accessor: type, payload: type === "outcome" ? dichotomous : [...covariates, dichotomous] }
    );
    setVariableType(undefined);
    if (type === "outcome") {
      dispatch({
        accessor: "currentStep", payload: 2
      })
    }
  };

  const customDichotomousValidation = providedName.length === 0
    || firstPopulation === undefined
    || secondPopulation === undefined;

  return (
    <div>
      <div
        data-tour='name'>
        <input
          type='text'
          onChange={(e) => setProvidedName(e.target.value)}
          value={providedName}
          placeholder='Provide a name...'
          // style={{
          //   width: '50%',
          //   textSize: 'small',
          //   paddingLeft: 5,
          //   height: 45,
          //   borderRadius: 5,
          //   marginTop: 5,
          // }}
        />
        <button
          type='button'
          onClick={() => setVariableType(undefined)}
        >
          cancel
        </button>
        <div data-tour='add-button'>
          <button
            type='button'
            disabled={customDichotomousValidation}
            className={`${!customDichotomousValidation ? 'GWASUI-btnEnable' : ''
              } GWASUI-dichBtn`}
            onClick={() => handleDichotomousSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
      <React.Fragment>
        <div data-tour='choosing-dichotomous'>
          <div
            data-tour='table-repeat'>
            <div style={{ display: "flex", direction: "row" }}>
              <h3>Get Value 0</h3>
              <SelectCohortDropDown
                handleCohortSelect={setFirstPopulation}
              />
            </div>
            <h3>Get Value 1</h3>
            <SelectCohortDropDown
              handleCohortSelect={setSecondPopulation}
            />
          </div>
        </div>
      </React.Fragment>
      <div />
    </div>
  );
};

CustomDichotomousCovariates.propTypes = {
  setVariableType: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  covariates: PropTypes.array
};

CustomDichotomousCovariates.defaultProps = {
  covariates: []
}

export default CustomDichotomousCovariates;
