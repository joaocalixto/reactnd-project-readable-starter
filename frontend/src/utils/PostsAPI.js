
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = (category) => {

  let URL =  category ? `${api}/${category}/posts` : `${api}/posts`

  return fetch(URL, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const vote = (post, type) =>

    fetch(`${api}/posts/${post.id}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option: type})
    })
    .then(res => {
      console.log("retorno setv "+ JSON.stringify(res));
      return res
    })
    .then(res => res.json())

export const deletePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => {
    console.log("retorno setv "+ JSON.stringify(res));
    return res
  })
  .then(res => res.json())

export const add = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => {
    console.log("retorno setv "+ JSON.stringify(res));
    return res
  })
  .then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
