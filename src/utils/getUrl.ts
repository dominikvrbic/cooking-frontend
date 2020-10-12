export const apiUrl = 'https://api.cooking.vrbic.org';

export default function getUrl(url: string) {
  return ` ${apiUrl}${url}`;
}
