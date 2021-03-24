const axios = require('axios');
const { exec } = require('child_process');

(async () => {
  const url = 'https://iam.cloud.ibm.com/identity/token';

  const params = new URLSearchParams();
  params.append('grant_type', 'urn:ibm:params:oauth:grant-type:apikey');
  params.append('apikey', process.env.OW_IAM_NAMESPACE_API_KEY);

  const res = await axios.post(url, params);

  conosole.log(res.status);
  
  exec(
    `export OW_APIGW_ACCESS_TOKEN="${res.data['access_token']}"`,
    (err, stdout, stderr) => {}
  );
})();
