import { useCallback, useEffect, useState } from 'react';
import { Button, Loader, Radio, RadioGroup } from 'rsuite';
import { useServerLink } from '../context/server.context';
import axios from 'axios';
import { useDisplayMessage } from '../context/message.context';

const RadioLabel = ({ children }) => (
  <label style={{ padding: 7 }}>{children}</label>
);

const WebsiteStatus = () => {
  const { serverLink } = useServerLink();
  const { displayMessage } = useDisplayMessage();

  const [siteStatus, setSiteStatus] = useState(0);

  const [isStatusLoading, setIsStatusLoading] = useState(true);

  // get the website status from the database
  const getWebsiteStatus = useCallback(async () => {
    setIsStatusLoading(true);

    try {
      const response = await axios.get(
        `${serverLink}/testing/test/website_status.php`
      );

      //   console.log(response.data);

      // setting delivery status to block cancel order button
      if (response.data.status === 'success') {
        setSiteStatus(response.data.update_status);

        setIsStatusLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [serverLink]);

  // used to get the website status data once
  useEffect(() => {
    getWebsiteStatus();
  }, [serverLink, getWebsiteStatus]);

  // update the website status into the database
  const handleChangeWebsiteStatus = () => {
    const updateWebsiteStatus = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/admin/update_website_status.php`,
          {
            websiteStatus: siteStatus,
          }
        );

        // console.log(response.data);
        if (response.data.status == 'success') {
          displayMessage('info', response.data.message, 4000);

          getWebsiteStatus();
        } else if (response.data.status == 'error') {
          displayMessage('error', response.data.message, 4000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    updateWebsiteStatus();
  };

  // console.log(siteStatus);

  return (
    <div className="padding-lr5 margin-t50 ">
      {isStatusLoading ? (
        <div className="height-width-full dis-flex">
          <Loader content="Loading..." vertical size="md" />
        </div>
      ) : (
        <div>
          <div className=" margin-b30">
            <h3>Change Website status</h3>
          </div>
          <div>
            <RadioGroup
              name="radio-group-inline-picker-label"
              inline
              appearance="picker"
              value={siteStatus}
              onChange={setSiteStatus}
            >
              <RadioLabel>Website Status: </RadioLabel>
              <Radio value={0}>Website is Live</Radio>
              <Radio value={1}>Website on Update</Radio>
            </RadioGroup>
          </div>
          <div className="margin-t20">
            <Button
              appearance="primary"
              onClick={() => handleChangeWebsiteStatus()}
            >
              Change Status
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteStatus;
