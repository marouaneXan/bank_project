import { AuthConfig } from 'angular-oauth2-oidc';
import { envirenment } from '../environment/environment';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: envirenment.keycloak.issuer,
  
  // URL of the SPA to redirect the user to after login
  redirectUri: envirenment.keycloak.redirectUri,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: envirenment.keycloak.clientId,

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: envirenment.keycloak.scope,
  requireHttps: false,

  showDebugInformation: true,
  skipIssuerCheck: true,
  strictDiscoveryDocumentValidation:false,
};