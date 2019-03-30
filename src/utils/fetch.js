const token = process.env.TOKEN;

const customizedFetch = async (
  endpoint,
  { otherHeaderOptions = {}, method = 'GET', body = null }
) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      ...otherHeaderOptions
    },
    method,
    body
  };

  const response = await fetch(endpoint, options);
  return response.json();
};

export default customizedFetch;
