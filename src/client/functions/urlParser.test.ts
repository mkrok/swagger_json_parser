import { urlParser } from './';

describe('Function urlParser', () => {
  it('should parse links in text correctly', () => {
    const text =
      'This is a text containing some links like [Google](www.google.com) or [Twitter](twitter.com)';
    const parsed =
      'This is a text containing some links like <a href="www.google.com" target="_blank" rel="noreferrer" >Google</a> or <a href="twitter.com" target="_blank" rel="noreferrer" >Twitter</a>';
    expect(urlParser(text)).toEqual(parsed);
  });
  it('should not alter a text which does not contain a link', () => {
    expect(urlParser('All you need is love!')).toEqual('All you need is love!');
  });
});
