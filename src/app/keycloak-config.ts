export const environment = {
  production: false,
  keycloak: {
    issuer: 'http://localhost:8080/auth/realms/test',
    redirectUri: 'http://localhost:4200',
    clientId: 'testCLIENT',
    scope: 'openid profile email offline_access',
  },
}
