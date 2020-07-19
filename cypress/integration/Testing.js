/// <reference types="Cypress" />

describe("Link Test", () => {
	it("is form working", () => {
		cy.visit("/");
	});
	it('finds the content "About"', () => {
		cy.visit("/");
		cy.contains("About").click();
		cy.url().should("include", "/About");
	});
	it('finds the content "Javascript"', () => {
		cy.visit("/");
		cy.contains("Javascript").click();
		cy.url().should("include", "/Javascript");
	});
	it('finds the content "CSS"', () => {
		cy.visit("/");
		cy.contains("CSS").click();
		cy.url().should("include", "/CSS");
	});
	it('finds the content "Home"', () => {
		cy.visit("/");
		cy.contains("Home").click();
		cy.url().should("include", "/");
	});
	it('finds the content "Add Your Own Code Snippet"', () => {
		cy.visit("/");
		cy.contains("Add Your Own Code Snippet").click();
		cy.url().should("include", "/Add");
	});
});
describe("Form Test", () => {
	it("is error msg 1 displaying", () => {
		cy.visit("/Add");
		cy.get(":nth-child(2) > label > .submissionfield")
			.type("pass")
			.clear("pass");
		cy.get(".error").should("have.value", "");
	});
	it("is error msg 2 displaying", () => {
		cy.get("#codeInput").type("pass").clear("pass");
		cy.get(".error").should("have.value", "");
		cy.get(".button").should("not.be.disabled");
	});
	it("is the button enabled", () => {
		cy.get(".button").should("not.be.disabled");
	});
	it("can the TOC checkbox be checked", () => {
		cy.get('[for="terms"] > input').click().should("have.checked", true);
	});
	it("can the languages dropdown initialize", () => {
		cy.get("#languageInput")
			.select("Javascript")
			.should("have.value", "Javascript");
		cy.get("#languageInput").select("React").should("have.value", "React");
		cy.get("#languageInput").select("HTML").should("have.value", "HTML");
		cy.get("#languageInput").select("CSS").should("have.value", "CSS");
	});
});
