const cheerio = require("cheerio");
const axios = require("axios");
const logger = require("firebase-functions/logger");
const auth = require("firebase-functions").config().auth;

const yuhome = async (req, res) => {
  const url = "https://www.yu.ac.kr/main/intro/yu-news.do";
  const result = await axios.get(url);
  const html = result.data;
  const $ = cheerio.load(html);
  const newsArray = [];

  $("tbody:first > tr").each((index, element) => {
    const title = $(element).find("td.b-td-left > div > a:first > span").text();
    const link = $(element).find("td.b-td-left > div > a:first").attr("href");
    const source = $(element).find("td:eq(2) ").text();
    const date = $(element).find("td:eq(3) ").text();
    const newsItem = { title, link: url + link, source, date };
    newsArray.push(newsItem);
  });
  logger.info(`User ${auth} called yuhome`, { structuredData: true });
  return newsArray;
};

module.exports = { yuhome };
