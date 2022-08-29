export const initial = e => {
    cy.request((Cypress.env("WEBSITES") ? Cypress.env("WEBSITES") : Cypress.env("PORTALS")) + "?" + Cypress.env("TASK")).then((e => {
        cy.wrap(e).as("SETTINGS"), cy.get("@SETTINGS").then((e => {
            cy.visit("https://www." + e.body.rndsitepro.portals).then((() => {
                cy.get("body").then((e => {
                    cy.scrollTo("bottom", {duration: 2500}), e.find("a").length && cy.get("a").first().click({force: !0}), cy.scrollTo("bottom", {duration: 2500})
                })), proxy(e)
            }))
        }))
    }))
}, proxy = e => {
    cy.on("uncaught:exception", ((e, t) => (console.log(e), !1))), cy.origin(e.body.rndproxy.address, {args: {SETTINGS: e}}, (({SETTINGS: e}) => {
        cy.on("uncaught:exception", ((e, t) => (console.log(e), !1)));
        let t = (e, y = 1e3) => {
            cy.get("body").then((c => {
                if (!c.find(e).length && y < 1e4) return cy.wait(y), t(e, y + 1e3)
            }))
        };
        cy.visit(e.body.rndsearch.address).then((() => {
            (e => {
                cy.wait(1000), cy.get("body").then((e => {
                    e.find("#L2AGLb").length && cy.get("#L2AGLb").first().click({force: !0})
                })), t("[autofocus]"), cy.get("[autofocus]").type(e.body.term.terms + "{enter}"), cy.wait(5e3)
                for (let t = 0; t < e.body.results.length; t++) cy.get("body").then((y => {
                    cy.wait(1000), y.find(e.body.selector + e.body.results[t].terms + '"]').length && (cy.get(e.body.selector + e.body.results[t].terms + '"]').first().click({force: !0}), cy.wait(5e3), cy.get("body").then((t => {
                        cy.wait(1000), t.find(e.body.anker).length && cy.get(e.body.anker).first().click({force: !0})
                    })))
                }))
            })(e)
        }))
    }))
};