export interface Client {
  name: string;
  creationDate: string;
  type: ClientType;
  clientID: string;
  secret: string;
}

export enum ClientType {
  WebApplication, Android, IOS, Other
}

export interface WebApplicationClient extends Client {
  authJSOrigins: string[];
  authRedirectURIs: string[];
}

export interface AndroidClient extends Client {
  signCertFingerprint: string;
  packageName: string;
}

export interface IOSClient extends Client {
  bundleID: string;
  appStoreID: string;
  teamID: string;
}
