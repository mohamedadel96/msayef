import Api from '../Api'

let body = {
  host: {
    authentication_token: null
  },
  property: null,
  amenity: null
}

export default {
  GET_CITIES() {
    return Api().get('/property/city')
  },
  GET_POLICIES() {
    return Api().get('/property/polices')
  },
  GET_PROPERTY() {
    return Api().get('/property-type')
  },
  CREATE_PROPERTY(payload) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.property = payload
    return Api().post('/properties', body)
  },
  UPDATE_PROPERTIES(payload) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.property = payload
    return Api().put('/properties/edit', body)
  },
  UPDATE_AMENITIES(payload) {
    body.host.authentication_token = JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null
    body.amenity = payload
    return Api().put('/property/amenities', body)
  }
}
