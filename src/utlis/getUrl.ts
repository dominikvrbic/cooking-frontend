export const apiUrl = 'http://localhost:1337';

export default function getUrl(url: string) {
  return ` ${apiUrl}${url}`;
}
