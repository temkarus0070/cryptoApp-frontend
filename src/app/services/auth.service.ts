import { Injectable } from '@angular/core';
import Keycloak, {KeycloakInstance} from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keycloakAuth: KeycloakInstance = new Keycloak();

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://localhost:8080',
        'realm': 'temkarus0070',
        'clientId': 'cryptoApp'
      };
      // @ts-ignore
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({onLoad: 'check-sso'})
        .success((a) => {
          resolve(1);
        })
        .error(() => {
          reject();
        });
    });
  }


  login() {
    this.keycloakAuth.login({redirectUri: "http://localhost:4201"})
  }

  checkAuth(): boolean {
    return <boolean>this.keycloakAuth.authenticated;
  }

  getToken(): string {
    return <string>this.keycloakAuth.token;
  }


  logout() {
    const options = {
      'redirectUri': 'http://localhost:4201',
      'realm': 'temkarus0070',
      'clientId': 'cryptoApp'
    };
    this.keycloakAuth.logout(options);
  }

  constructor() { }
}
