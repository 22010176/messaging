export function PostRequest(url, body) {
  return fetch(url, {
    method: 'POST', mode: 'no-cors', cache: 'no-cache', credentials: 'same-origin', redirect: 'follow', referrer: 'no-referrer', body, headers: { "Content-Type": "application/x-www-form-urlencoded", },
  })
}

export function GetRequest(url) { }