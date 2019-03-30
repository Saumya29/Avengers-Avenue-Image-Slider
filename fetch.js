const customizedFetch = async (
  endpoint,
  { otherHeaderOptions = {}, method = 'GET', body = null }
) => {
  const options = {
    headers:  {
      Authorization: 'Bearer fc1be0ce7f79cfe74502163bbc76613e',
      ...otherHeaderOptions
    },
    method,
    body
  };

  const response = await fetch(endpoint, options);
  return response.json();
};

export default customizedFetch;
