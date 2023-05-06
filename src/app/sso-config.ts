import { AuthConfig } from 'angular-oauth2-oidc';
import { envirenment } from '../environment/environment';

export const authCodeFlowConfig: AuthConfig = {
  issuer: envirenment.keycloak.issuer,
  redirectUri: envirenment.keycloak.redirectUri,
  clientId: envirenment.keycloak.clientId,
  responseType: 'code',
  scope: envirenment.keycloak.scope,
  requireHttps: false,

  showDebugInformation: true,
  skipIssuerCheck: true,
  strictDiscoveryDocumentValidation:false,
};