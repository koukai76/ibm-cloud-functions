const axios = require('axios');
const { exec } = require('child_process');

(async () => {
  const url = 'https://iam.cloud.ibm.com/identity/token';

  const params = new URLSearchParams();
  params.append('grant_type', 'urn:ibm:params:oauth:grant-type:apikey');
  params.append('apikey', process.env.OW_IAM_NAMESPACE_API_KEY);

  const res = await axios.post(url, params);

  const data = `${process.env.MY_PP}\nAPIGW_ACCESS_TOKEN=${res.data['access_token']}`;

  fs.writeFile('file1.txt', data, err => {
    if (err) throw err;
    console.log('正常に書き込みが完了しました');
  });
})();
