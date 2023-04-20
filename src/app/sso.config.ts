import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:8080/auth/realms/test',
  redirectUri: 'http://localhost:4200' + '/',
  clientId: 'testCLIENT',
  responseType: 'code',
  scope: 'openid profile email offline_access',
  showDebugInformation: true,
  timeoutFactor: 0.01,
  checkOrigin: false,
};
