// addMember.js

const axios = require('axios');

module.exports = async (req, res) => {
  const { email } = req.query;
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.LIST_ID;

  try {
    const response = await axios.post(
      `https://us21.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
             Authorization:`apikey ${apiKey}`,
        },
      }
    );

    if (response.status === 200) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
