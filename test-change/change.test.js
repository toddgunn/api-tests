import fetch from 'node-fetch';
import assert from 'assert';
import config from 'config';

const loginUrl = config.get("pitch59-url") + "/api/account/login";

it(`Testing to see if we can signin`, async () => {
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      emailId: "p59testa@gmail.com",
      password: "P@ssw0rd"
    })
  };

  let errorWasCaught = false;
  let errorCaught = null;
  let json = null;
  try {
    const response = await fetch(loginUrl, options);
    json = await response.json();
    console.log("Response", json);
  } catch (exception) {
    errorCaught = exception;
    errorWasCaught = true;
    throw console.log(errorCaught);
  }

  assert.equal(errorWasCaught,false);
  console.log(json.code);
  assert.equal(json.code,2012);
});