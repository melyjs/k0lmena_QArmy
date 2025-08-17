@Smoke
Feature: Registro en Form fields

    Background:
        Given El usuario navega a la pagina form-fields

    Scenario: Verificar que el sitio no envie el formulario cuando el campo "Nombre" esta vacio
        When El usuario envia el formulario mediante el boton "Submit"
        Then El usuario vuelve al inicio del formulario donde el nombre figura como "Requerido"

    Scenario: Verificar que el fromulario permita mas de un checkbox al seleccionar bebidas
        When El usuario hace click en mas de un item en el campo "What is your favorite drink?"
        Then El usuario puede visualizar su seleccion de bebidas, mas de una

    Scenario: Verificar que el usuario no pueda seleccionar mas de una opcion de color
        When El usuario hace click en varias opciones del campo "What is your favorite color?"
        Then El usuario no puede seleccionar mas de 1 opcion de color y solo la ultima opcion queda seleccionada

    Scenario: Verificar que el usuario pueda seleccionar una opcion del menu desplegable de automatizacion
        When El usuario selecciona una opcion en el menu desplegable "Do you like automation?"
        Then La opcion queda visual en el campo "Do you like automation?"

    Scenario: Verificar que el sistema notifique mediante una ventana emergente que el formulario ha sido enviado
        When El usuario completa los campos requeridos
        And El usuario hace click en el boton "Submit"
        Then El usuario visualiza una ventana emergente con el texto "Message received!"