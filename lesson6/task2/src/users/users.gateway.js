const baseUrl = 'https://api.github.com/users';

export const getUserData = userName =>
  fetch(`${baseUrl}/${userName}`).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error();
  });