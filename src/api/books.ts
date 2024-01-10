import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api/';

const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDZkNTAzZWZhYjEzYTRjZTU2MThhMSIsImlhdCI6MTcwNDIwNzc4OSwiZXhwIjoxNzkwNjA3Nzg5fQ._LE6-PHbC3EcevIXwqccmpWHAr5j-cfDTwqhzikMBFo';

export const getBooksRecomended = async (page: number) => {
  const { data } = await axios(`books/recommend?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const addBooksById = async (id: string) => {
  const { data } = await axios.post(
    `books/add/${id}`,
    {
      id,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};

export const deleteBooksById = async (id: string) => {
  const { data } = await axios.delete(`books/remove/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const readingBook = async (id: string, page: string, isReading: boolean) => {
  let readStatus;

  if(isReading){
    readStatus = "finish";
  }else {
    readStatus = "start";
  }

    const { data } = await axios.post(
      `books/reading/${readStatus}`,
      {
        id,
        page
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );


  return {data, readStatus};

 
};
