
// server/sources/cctv-news.ts
import Parser from 'rss-parser';

const parser = new Parser();

export async function fetchCCTVNews() {
  try {
    const feed = await parser.parseURL('http://news.cctv.com/rss/'); // 替换为实际 RSS 地址
    return feed.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description || item.contentSnippet,
    }));
  } catch (error) {
    console.error('Error fetching CCTV News:', error);
    return [];
  }
}
