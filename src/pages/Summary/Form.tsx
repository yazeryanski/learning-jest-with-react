import React, {useState } from 'react';
import { Button, Form as BForm, FormCheck, FormGroup, FormLabel } from 'react-bootstrap';

export default function Form() {
  const [isAgree, setIsAgree] = useState(false);

  const onChange = () => {
    setIsAgree( !isAgree );
  };

  return (
    <BForm>
      <FormGroup>
        <FormCheck role="policy" checked={isAgree} onChange={onChange} type="checkbox"></FormCheck>
        <FormLabel>Agree with privacy policy</FormLabel>
      </FormGroup>
      <Button disabled={!isAgree} role="submit" variant="primary" type="submit">
        Submit
      </Button>
    </BForm>
  );
}
