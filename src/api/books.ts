import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api/';

const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDZkNTAzZWZhYjEzYTRjZTU2MThhMSIsImlhdCI6MTcwMzA3NTM3MCwiZXhwIjoxNzg5NDc1MzcwfQ.-uuyMGAxB49vTCqyUftA-uh44WdGQXb5yfk1SJ7A0Po';

export const getBooksRecomended = async (page: number) => {
  const { data } = await axios(`books/recommend?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};
