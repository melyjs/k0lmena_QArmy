import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  Submit,
  Requerido,
  Agua,
  Cafe,
  Azul,
  Verde,
  Automatizar,
  Abajo,
  Enter,
  Nombre,
  Mensaje
} from '../locators/exampleLocators';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getByText,
  getElementByRoleAndClickIt
} from '../utils/interactions';

Given("El usuario navega a la pagina form-fields", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('El usuario envia el formulario mediante el boton "Submit"', async function () {
  for (const page of pages) {
    await page.getByRole('button' , {name: Submit})
  }
});

Then('El usuario vuelve al inicio del formulario donde el nombre figura como "Requerido"', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", Requerido)).toBeTruthy();
  }
});

When('El usuario hace click en mas de un item en el campo "What is your favorite drink?"', async function () {
  for (const page of pages) {
    await page.getByText(Agua).click()
    await page.getByText(Cafe).click()
  }
});

Then('El usuario puede visualizar su seleccion de bebidas, mas de una', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", Requerido)).toBeTruthy();
  }
});

When('El usuario hace click en varias opciones del campo "What is your favorite color?"', async function () {
  for (const page of pages) {
    await page.getByText(Azul).click()
    await page.getByText(Verde).click()
  }
});

Then('El usuario no puede seleccionar mas de 1 opcion de color y solo la ultima opcion queda seleccionada', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", Requerido)).toBeTruthy();
  }
});

When('El usuario selecciona una opcion en el menu desplegable "Do you like automation?"', async function () {
  for (const page of pages) {
    await page.getByTestId(Automatizar).click()
    await page.keyboard.press(Abajo)
    await page.keyboard.press(Abajo)
    await page.keyboard.press(Abajo)
    await page.keyboard.press(Enter)
  }
});

Then('La opcion queda visual en el campo "Do you like automation?"', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", Requerido)).toBeTruthy();
  }
});

When('El usuario completa los campos requeridos', async function () {
  for (const page of pages) {
    await page.getByTestId(Nombre).click;
    await page.getByTestId(Nombre).fill("John Doe");
  }
});

When('El usuario hace click en el boton "Submit"', async function () {
  for (const page of pages) {
    await page.getByRole('button' , {name: Submit})
  }
});

Then('El usuario visualiza una ventana emergente con el texto "Message received!"', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "script", Mensaje)).toBeTruthy();
  }
});