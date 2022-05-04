import React from 'react';
import { Popover } from 'react-bootstrap';

const PrivacyPopover = (props:any) => {
  return (
    <Popover id="popover-basic" role="popover" {...props} >
      <Popover.Header as="h3">This is required</Popover.Header>
      <Popover.Body>
        Icecream order will be rejected
      </Popover.Body>
    </Popover>
  );
};

export default PrivacyPopover;