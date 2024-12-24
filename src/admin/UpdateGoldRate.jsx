import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, ButtonToolbar, Form, Loader, Schema } from 'rsuite';
import { useDisplayMessage } from '../context/message.context';
import { useServerLink } from '../context/server.context';
import axios from 'axios';

const { NumberType } = Schema.Types;

const changeRateModel = Schema.Model({
  gold24k: NumberType().isRequired('Gold rate is required'),
  silver: NumberType().isRequired('Silver rate is required'),
  gold22k: NumberType().isRequired('Gold rate is required'),
  gold18k: NumberType().isRequired('Gold rate is required'),
});

const UpdateGoldRate = () => {
  const { displayMessage } = useDisplayMessage();
  const { serverLink } = useServerLink();

  const updateRateRef = useRef();

  const [priceData, setPriceData] = useState(null);
  const [isPriceDataLoading, setIsPriceDataLoading] = useState(true);

  const [rateFormValue, setRateFormValue] = useState({
    gold24k: '',
    silver: '',
    gold22k: '',
    gold18k: '',
  });

  // for getting the price of gold and silver
  const getPriceDetails = useCallback(async () => {
    setIsPriceDataLoading(true);

    try {
      const response = await axios.post(
        `${serverLink}/testing/test/gold_rate.php`,
        {
          protectionId: 'Nav##$56',
        }
      );

      // console.log(response.data);

      // set the price of gold and silver for backup and to resetting to original data
      setPriceData(response.data.record);

      // setting the gold and silver price in rate form value
      setRateFormValue({
        gold24k: response.data.record.price_1_gram_24K,
        silver: response.data.record.price_1_gram_24K_s,
        gold22k: response.data.record.price_1_gram_22K,
        gold18k: response.data.record.price_1_gram_18K,
      });

      setIsPriceDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [serverLink]);

  // get the price for single time
  useEffect(() => {
    getPriceDetails();
  }, [getPriceDetails]);

  // console.log(priceData);

  // reset the price of input rate with the real price from database
  const handlePriceReset = () => {
    setRateFormValue({
      gold24k: priceData.price_1_gram_24K,
      silver: priceData.price_1_gram_24K_s,
      gold22k: priceData.price_1_gram_22K,
      gold18k: priceData.price_1_gram_18K,
    });
  };

  // update the input price
  const handleSubmit = () => {
    // check the email and password with the database
    const updateRate = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/admin/update_rate.php`,
          {
            goldRate24k: rateFormValue.gold24k,
            silverRate: rateFormValue.silver,
            goldRate22k: rateFormValue.gold22k,
            goldRate18k: rateFormValue.gold18k,
            protectionId: 'Nav##$56',
          }
        );

        // console.log(response.data);
        if (response.data.status == 'success') {
          displayMessage('info', response.data.message, 4000);

          getPriceDetails();
        } else if (response.data.status == 'error') {
          displayMessage('error', response.data.message, 4000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    updateRate();
  };

  // console.log(rateFormValue);

  return (
    <div className="dis-flex margin-t50 margin-b100 flex-dir-col">
      <div className="margin-b30">
        <h3 className="textCenter">Gold and Silver Rate in Rupees</h3>
      </div>
      {isPriceDataLoading ? (
        <div className="height-width-full dis-flex">
          <Loader content="Loading..." vertical size="sm" />
        </div>
      ) : (
        <Form
          onChange={setRateFormValue}
          formValue={rateFormValue}
          model={changeRateModel}
          ref={updateRateRef}
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="gold24k-9">
            <Form.ControlLabel>Gold Rate 24k</Form.ControlLabel>
            <Form.Control name="gold24k" type="number" />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="silver-9">
            <Form.ControlLabel>Silver Rate 24K</Form.ControlLabel>
            <Form.Control name="silver" type="number" />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="gold22k-9">
            <Form.ControlLabel>Gold Rate 22k</Form.ControlLabel>
            <Form.Control name="gold22k" type="number" />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="gold18k-9">
            <Form.ControlLabel>Gold Rate 18k</Form.ControlLabel>
            <Form.Control name="gold18k" type="number" />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                Change Price
              </Button>
              <Button appearance="default" onClick={handlePriceReset}>
                Reset to Original
              </Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default UpdateGoldRate;
