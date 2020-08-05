import isNil from 'is-nil'
import isPlainObject from 'is-plain-object'

function encodeParams(data) {
  let ret = []
  for (let d in data) {
    if (!isNil(data[d])) {
      const value = Array.isArray(data[d])
        ? JSON.stringify(data[d])
        : encodeURIComponent(data[d])
      if (value !== '') {
        ret.push([encodeURIComponent(d), value].join('='))
      }
    }
  }

  return ret.join('&')
}

const joinUrlQuery = (url, query) => {
  if (isPlainObject(query)) {
    query = encodeParams(query)
  }

  return [url, ...(query ? [query] : [])].join('?')
}

export default joinUrlQuery
