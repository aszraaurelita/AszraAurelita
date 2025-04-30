export default async function handler(req, res) {
    const { query = 'nature', per_page = 9 } = req.query;
  
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`, {
      headers: {
        Authorization: process.env.MiNw1TyIq7MPE48Se63ayIQriqhPr6L9mVduU6eyz8s10YpamyVEo4QQi
      }
    });
  
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  }
  