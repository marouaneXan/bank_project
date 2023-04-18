import { AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://idsvr4.azurewebsites.net',
  redirectUri: window.location.origin + '/auth',

  clientId: 'spa',
  responseType: 'code',
  scope: 'openid profile email api1',

  showDebugInformation: true,

};


