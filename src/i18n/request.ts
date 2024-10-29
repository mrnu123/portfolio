import { NextApiRequest } from 'next';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
  const locale = cookies().get('selectedLanguage')?.value || 'en';
  console.log('Locale:', locale);
  // console.log(locale)
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});