import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  setDataToLocalStorage(data: { agent_id: string, token: string }) {
    localStorage.setItem('agent_id', data.agent_id)
    localStorage.setItem('access_token', data.token)
  }
  getToken() {
    return localStorage.getItem('access_token')
  }
  getAgentId() {
    return localStorage.getItem('agent_id')
  }
  clearLocalStorage() {
    localStorage.clear()
  }
  decode(payload: string) {
    return JSON.parse(atob(payload))
  }
  payload(token: string) {
    const payload = token.split('.')[1]
    return this.decode(payload)
  }
  isValid() {
    const token = this.getToken()
    const agent_id = this.getAgentId()
    if (token) {
      const payload = this.payload(token)
      if (payload) {
        return agent_id === payload.agent_id
      }
    }
    return false
  }
  loggedIn() {
    return this.isValid()
  }
}
