import axios from 'axios';

const URl = 'https://api-test.innoloft.com';

export const useConfiguration = async(appId: string) => {
  const configurationOptions = {
    method: 'GET',
    url: URl,
    params: `configuration/${appId}`,
  };

  try {
    const response = await axios.request(configurationOptions);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}