import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getAccessToken() {
    return sessionStorage.getItem('access_token')
  }
  getRefreshToken():any {
    const refresh_token = sessionStorage.getItem('refresh_token')
    return refresh_token || ''
  }
  clearLocalStorage() {
    sessionStorage.clear()
  }
  decode(payload: string) {
    return JSON.parse(atob(payload))
  }
  payload(token: string) {
    const payload = token.split('.')[1]
    return this.decode(payload)
  }
  getAgentIdFromPayload() {
    const token = this.getAccessToken()
    return token ? this.payload(token).sub : ''
  }
  isValid() {
    const token = this.getAccessToken()
    if (token) return true
    return false
  }
  loggedIn() {
    return this.isValid()
  }
}
