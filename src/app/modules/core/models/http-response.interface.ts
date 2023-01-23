export interface ServerResponse {
  results: ServerResponseUser[],
  info: ServerResponseInfo
}

interface ServerResponseInfo {
  seed: string,
  results: number,
  page: number,
  version: string
}

interface ServerResponseUser {
  gender: string,
  name: ResponseUserName,
  location: ResponseUserLocation,
  email: string,
  login: ResponseUserLogin,
  dob: ResponseUserDob,
  registered: ResponseUserRegistered,
  phone: string,
  cell: string,
  id: ResponseUserId,
  picture: ResponseUserPicture,
  nat: string
}

interface ResponseUserName {
  title: string,
  first: string,
  last: string
}

interface ResponseUserLocation {
  street: ResponseUserStreet,
  city: string,
  state: string,
  country: string,
  postcode: string,
  coordinates: ResponseUserCordinates,
  timezone: ResponseUserTimezone
}

interface ResponseUserStreet {
  number: number,
  name: string,
}

interface ResponseUserCordinates {
  latitude: string,
  longitude: string
}

interface ResponseUserTimezone {
  offset: string,
  description: string
}

interface ResponseUserLogin {
  uuid: string,
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string
}

interface ResponseUserDob {
  date: string,
  age: number
}

interface ResponseUserRegistered {
  date: string,
  age: number
}

interface ResponseUserId {
  name: string,
  value: string
}

interface ResponseUserPicture {
  large: string,
  medium: string,
  thumbnail: string
}