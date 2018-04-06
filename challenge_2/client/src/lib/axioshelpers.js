import axios from 'axios'

const post = (param, object, callback) => {
  axios.post(`/${param}`, object)
  .then(() => {
    callback(null)
  })
  .catch((error) => {
    callback(error)
  })
}

const get = (username, callback) => {
  axios.get(`/confirmation/${username}`)
  .then((data) => {
    callback(data)
  })
  .catch((err) => {
    callback(err)
  })
}

module.exports.post = post;
module.exports.get = get;