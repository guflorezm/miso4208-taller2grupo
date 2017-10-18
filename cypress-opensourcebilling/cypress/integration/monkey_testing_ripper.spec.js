describe('opensourcebilling under ripper monkeys', function() {
    it('visits opensourcebilling and survives monkeys', function() {
        cy.visit('http://demo.opensourcebilling.org');
        cy.get('.submit').click();
        cy.wait(6000);
        randomEvent(20);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

// Obtiene una cadena de texto de forma randomica
function getRandomText(textLength) {
  var text = "";
  var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()/-><;,.?: ";

  for (var i = 0; i < textLength; i++)
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

  return text;
};

/*
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;

    if(monkeysLeft > 0) {
      cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.Dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }
}
*/

function randomEvent(monkeysLeft) {

    var monkeysLeft = monkeysLeft;

    if(monkeysLeft > 0) {
      // Obtenemos el evento al azar de los 4 ( Link, Select, Button, Input )
      var luckyEvent = getRandomInt(1,4);

      switch(luckyEvent){
        // Dispara un evento de Link
        case 1:
          cy.get('a').then($links => {
                if($links.length > 0){
                  var randomLink = $links.get(getRandomInt(0, $links.length));
                  if(!Cypress.Dom.isHidden(randomLink)) {
                      cy.wrap(randomLink).click({force: true});
                      monkeysLeft = monkeysLeft - 1;
                      cy.wait(2000);
                  }
                }
                setTimeout(randomEvent, 1000, monkeysLeft);
          });
          //setTimeout(randomEvent, 1000, monkeysLeft);
          break;

        // Dispara un evento de Select
        case 2:
          cy.get('select').then($Selects => {
              if($Selects.length > 0){
                var randomSelect = $Selects.get(getRandomInt(0, $Selects.length));
                if(!Cypress.Dom.isHidden(randomSelect)) {
                    var selectOptions = randomSelect.options;
                    // Obtenemos una opcion azar del select seleccionado al azar
                    var randomOption = selectOptions[getRandomInt(0,selectOptions.length)];
                    var optionValue = randomOption.value;
                    cy.wrap(randomSelect).select(optionValue);
                    monkeysLeft = monkeysLeft - 1;
                    cy.wait(2000);
                }
              }
              setTimeout(randomEvent, 1000, monkeysLeft);
          });
          //setTimeout(randomEvent, 1000, monkeysLeft);
          break;

        // Dispara un evento de Input
        case 3:
          cy.get('input').then($Inputs => {
              if($Inputs.length > 0){
                var randomInput = $Inputs.get(getRandomInt(0, $Inputs.length));
                if(!Cypress.Dom.isHidden(randomInput)) {
                    // Obtenemos un texto al azar y lo introducimos en el input
                    var randomText = getRandomText(getRandomInt(1, 30));
                    var elementType = randomInput.type.toLowerCase();
                    if(elementType === 'button' || elementType === 'checkbox' || elementType === 'radio' || elementType === 'date' ) {
                      cy.wrap(randomInput).click({force: true});
                    }
                    else {
                      cy.wrap(randomInput).click({force: true}).type(randomText);
                    }

                    monkeysLeft = monkeysLeft - 1;
                }
              }
              setTimeout(randomEvent, 1000, monkeysLeft);
          });
          //setTimeout(randomEvent, 1000, monkeysLeft);
          break;

        // Dispara un evento de Button
        case 4:
          cy.get('button').then($Buttons => {
             if($Buttons.length > 0){
               var randomButton = $Buttons.get(getRandomInt(0, $Buttons.length));
               if(!Cypress.Dom.isHidden(randomButton)) {
                   cy.wrap(randomButton).click({force: true});
                   monkeysLeft = monkeysLeft - 1;
                   cy.wait(2000);
               }
             }
             setTimeout(randomEvent, 1000, monkeysLeft);
          });
          //setTimeout(randomEvent, 1000, monkeysLeft);
          break;
        }
    }
}
