import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CustomSlider from '../CustomSlider';
import CustomResultModal from '../ResultModal';
import useStyles from './styles';
import ButtonOutlineIcon from '../ButtonOutlineIcon';
import InfoTooltip from '../InfoTooltip';

const ReliablityScore = () => {
  const [value, setValue] = useState<number | Array<number>>([0]);
  const [value1, setValue1] = useState<number | Array<number>>([0]);
  const [value2, setValue2] = useState<number | Array<number>>([0]);
  const [value3, setValue3] = useState<number | Array<number>>([0]);
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };
  const handleChange1 = (event: any, newValue: number | number[]) => {
    setValue1(newValue);
  };
  const handleChange2 = (event: any, newValue: number | number[]) => {
    setValue2(newValue);
  };
  const handleChange3 = (event: any, newValue: number | number[]) => {
    setValue3(newValue);
  };

  const testValue = [value, value1, value2, value3];

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [totalTest] = React.useState(12);
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <form className={classes.root}>
      <div className={classes.mainDiv}>
        <div>
          <Typography className={classes.headerText}>
            <strong>
              Adjust the weights of the experiments in the workflow
            </strong>
          </Typography>
          <Typography className={classes.description}>
            You have selected {totalTest} tests in the “Kubernetes conformance
            test” workflow. Successful outcome of each test carries a certain
            weight. We have pre-selected weights for each test for you. However,
            you may review and modify the weigtage against.{' '}
            <strong>The weights are relative to each other.</strong>
          </Typography>
        </div>
        <hr className={classes.horizontalLine} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography className={classes.testHeading}>
            <strong>Kubernetes conformance test</strong>
          </Typography>
        </div>
        <div>
          <div>
            <CustomSlider
              value={typeof value === 'number' ? value : 0}
              testName="Node add test"
              onChangeCommitted={handleChange}
            />
          </div>
          <div>
            <CustomSlider
              value={typeof value1 === 'number' ? value1 : 0}
              testName="Config map multi volume test"
              onChangeCommitted={handleChange1}
            />
          </div>
          <div>
            <CustomSlider
              value={typeof value2 === 'number' ? value2 : 0}
              testName="Networking pod test"
              onChangeCommitted={handleChange2}
            />
          </div>
          <div>
            <CustomSlider
              value={typeof value3 === 'number' ? value3 : 0}
              testName="Proxy-service-test"
              onChangeCommitted={handleChange3}
            />
          </div>
        </div>
        <hr className={classes.horizontalLine} />
        <div className={classes.modalDiv}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ButtonOutlineIcon
              isDisabled={false}
              handleClick={handleModal}
              data-cy="testRunButton"
            >
              <div className={classes.buttonOutlineDiv}>
                <img src="icons/video.png" alt="Play icon" />
                <Typography className={classes.buttonOutlineText}>
                  Demo Launch
                </Typography>
              </div>
            </ButtonOutlineIcon>
            <div style={{ marginLeft: 10 }}>
              <InfoTooltip value="Text Default" />
            </div>
            {open === true ? (
              <CustomResultModal
                isOpen={() => setOpen(false)}
                testValue={testValue}
              />
            ) : (
              <></>
            )}
          </div>
          <div>
            <Typography className={classes.testInfo}>
              Compare the importance of the items above and launch a demo
              version of Kubernetes conformance test to see how it works.
            </Typography>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReliablityScore;