import React, {useState } from 'react';
import { Button, Form as BForm, FormCheck, FormGroup, FormLabel, OverlayTrigger } from 'react-bootstrap';
import PrivacyPopover from './PrivacyPopover';

export default function Form() {
  const [isAgree, setIsAgree] = useState(false);

  const onChange = () => {
    setIsAgree( !isAgree );
  };

  return (
    <BForm className="d-flex justify-content-center align-items-center">
      <FormGroup className="me-3">
        <FormLabel className="d-flex text-center">
          <FormCheck role="policy" checked={isAgree} onChange={onChange} type="checkbox"></FormCheck>
          <OverlayTrigger trigger={['hover', 'click']} placement="right" overlay={PrivacyPopover}>
            <span className="ms-2 user-select-none  position-relative" role="term">Agree with <span className="text-primary cursor-pointer">Privacy Policy.</span></span>
          </OverlayTrigger>
        </FormLabel>
      </FormGroup>
      <Button disabled={!isAgree} role="submit" variant="primary" type="submit">
        Submit
      </Button>
    </BForm>
  );
}
