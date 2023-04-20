import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  // setDataToLocalStorage(acess_token: string) {
  //   sessionStorage.setItem('access_token', acess_token)
  // }
  getAccessToken() {
    return sessionStorage.getItem('access_token')
  }
  clearLocalStorage() {
    sessionStorage.clear()
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
