import "cypress-fail-fast";
import "cypress-iframe";

Cypress.Server.defaults({preserve: ['session_id', 'remember_token'], ignore: a => Cypress.config().blockHosts.some(b => Cypress.minimatch(new URL(a.url).host, b))}), Cypress.on("uncaught:exception", (a, b) => !1)
