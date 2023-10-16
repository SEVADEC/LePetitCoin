function getDomain() {
  return window.location.origin;
}

// Utilisation de la fonction pour obtenir le domaine
const domain = getDomain();

const elements = document.querySelectorAll(".option-name");

elements.forEach((element) => {
  const text = element.textContent;
  element.innerHTML = text.replace(/(\(Don\)|\(Besoin\))/g, "");
});

// Modification pour obligation CGU
document.querySelector(".btn-ok").textContent = "j'accepte";

if (window.location.href == domain.toString() + "/") {

  // Crée un nouvel élément div avec la classe "content valign" et des styles personnalisés
  const newDiv = document.createElement("div");
  newDiv.classList.add("content", "valign");
  newDiv.style.color = "";
  newDiv.style.fontSize = "17px";
  newDiv.style.textAlign = "justify";
  newDiv.style.padding = "10px";

  // Ajoute le contenu HTML à l'aide de innerHTML
  newDiv.innerHTML = `
    	<h2></h2>
    	<p class="front-page-text">Des matériaux et objets inutilisés sont entassés dans un coin de votre bureau ? 
    Mettez-les à disposition gratuitement sur « Le petit coin », plateforme de réemploi et de réutilisation collaborative, dédiée aux entreprises, associations et établissements scolaires du Pays du Calaisis.</p>
    <p style="font-style: italic;font-weight:bold;">Pour faire des déchets des uns, une matière première pour les autres.</p>
    	<p></p>
    	<a href="https://www.sevadec.fr/" target="_blank"><img src="https://www.sevadec.fr/wp-content/uploads/2023/04/logo-lpc.png" alt="logos" style="width: 180px;margin:auto;display:flex;"></img></a>
    `;

  // Sélectionne l'élément parent dans lequel insérer le nouvel élément
  const parentElement = document.querySelector("#home-main-wrapper").parentNode;

  // Insère le nouvel élément après l'élément cible
  document
    .querySelector("#home-logo")
    .insertAdjacentElement("afterend", newDiv);
}

const newDivCgu = document.createElement("div");
newDivCgu.classList.add("content", "valign");
newDivCgu.style.color = "";
newDivCgu.style.fontSize = "17px";
newDivCgu.style.textAlign = "justify";
newDivCgu.style.padding = "10px";

newDivCgu.innerHTML = `
	<p>En créant un compte, vous confirmez avoir pris connaissance et accepté les <a class="about-title-item" id="modal2" onclick="$('#popup-2').openModal()" style="cursor: pointer;">conditions générales d'utilisation.</a></p>
`;

if (window.location.href == domain + "/register/") {
  // Sélectionne l'élément parent dans lequel insérer le nouvel élément
  const parentElementRegister =
    document.querySelector("#page-container").parentNode;

  // Insère le nouvel élément après l'élément cible
  document
    .querySelector(
      "#page-content > form > section:nth-child(3) > div.form-actions"
    )
    .insertAdjacentElement("afterend", newDivCgu);
}

// Vérifie si l'élément avec l'ID btn-login est visible
const btnLogin = document.querySelector("#btn-login");
if (
  btnLogin &&
  btnLogin.style.display !== "none" &&
  (location.href.startsWith(domain + "/map") ||
    location.href.startsWith(domain + "/annuaire"))
) {
  if (!document.referrer.startsWith(domain + "/map") && !document.referrer.startsWith(domain + "/annuaire")) { location.href = document.referrer; }
  else { location.href = domain }
}

if (
  btnLogin &&
  btnLogin.style.display !== "none" &&
  (document.referrer.startsWith(domain + "/map") ||
    document.referrer.startsWith(domain + "/annuaire"))
) {
  const logLink = document.querySelector("#modal3");
  logLink.click();
}


if (location.href.startsWith(domain + "/elements/edit/")) {

  // Ajoutez un écouteur d'événement "click" pour détecter les clics sur l'élément d'entrée
  document.querySelector("#field-desactivated2").addEventListener("click", function () {

    // Affichez un message de débogage
    document.querySelector("#send_mail").value = "on";

    // Mettez à jour la valeur de l'élément #admin-message avec la nouvelle valeur
    document.querySelector("#admin-message").value = document.querySelector("#field-desactivated2 input").value !== '' ? "Je souhaite désactiver mon annonce : " + document.querySelector("#field-desactivated2 input").value : '';
  });

}


if (btnLogin && btnLogin.style.display !== "none") {
  const modalLink = document.getElementById("modal5");
  if (modalLink) {
    modalLink.removeAttribute("onclick");
    modalLink.setAttribute("onclick", "$('#popup-3').openModal()");
    modalLink.textContent = "Trouver une correspondance";
  }
}

if (document.querySelector("#listUserActions > li.name.only-for-admin").style.display != "none") {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
  };
}
if (window.location.href == domain + "/elements/add") {
  // Sélectionnez l'élément bouton pour écouter les clics
  let buttonElement = document.querySelector("#field-files > div.input-field.files > button");

  // Fonction de modification de l'attribut "name"
  let modifyAttributeName = function () {
    let liElements = document.querySelectorAll("#field-files > ul.new-file-fields-list.files > li");

    // Parcourez tous les li éléments
    liElements.forEach(function (liElement) {
      // Sélectionnez l'élément <input> dans le <li> spécifié
      let inputElement = liElement.querySelector("div > div.btn.btn-pick-file.btn-neutral > input[type=file]");

      // Obtenez la valeur actuelle de l'attribut "name"
      let originalValue = inputElement.getAttribute("name");

      // Remplacez "files" par "images" dans la valeur d'origine
      let modifiedValue = originalValue.replace('files', 'images');

      // Mettez à jour la valeur de l'attribut "name"
      inputElement.setAttribute("name", modifiedValue);
    });
  };

  // Fonction de gestionnaire d'événements pour le clic sur le bouton
  let handleButtonClick = function () {
    // Appelez la fonction de modification de l'attribut "name"
    modifyAttributeName();
  };

  // Ajoutez l'événement de clic au bouton
  buttonElement.addEventListener("click", handleButtonClick);
}


if (window.location.href == domain + "/register/check-email") {
  const confirmationText = document.querySelector("#page-content > section > p");

  if (confirmationText) {
    confirmationText.innerHTML += "<br>Si vous n'avez pas reçu de mail d'ici les 5 prochaines minutes, vérifiez vos spams (ou junkmail).";
  }
}


if (window.location.href == domain + "/elements/add") {
  const disableElement = document.querySelector("#element-form-content > section:nth-child(3)");

  if (disableElement) {
    disableElement.style.display = "none"; // Masque l'élément
  }
}

// Vérifie si vous êtes sur la page de l'inscription
if (window.location.href === domain + '/register/') {
  // Sélectionne l'élément <label> par son attribut for
  var labelElement = document.querySelector('label[for="input-username"]');

  // Sélectionne l'élément <input> par son ID
  var inputElement = document.getElementById('input-username');

  // Vérifie si l'élément <label> et l'élément <input> ont été trouvés
  if (labelElement && inputElement) {
    // Modifie le texte de l'étiquette
    labelElement.textContent = "Nom de la société et numéro associé (Siret ou RNA ou RNE)";

    // Ajoute un attribut placeholder à l'élément <input>
    inputElement.placeholder = "(Exemple : Ma Société - 12002701600357)";

    // Crée un nouvel élément <p> avec le texte souhaité
    var paragraphElement = document.createElement('p');
    paragraphElement.className = 'newsletter-explanation gogo-neutral';
    paragraphElement.textContent = 'Ce numéro nous permet de vérifier votre entreprise avant validation du compte. Votre nom d\'utilisateur vous sera transmis en même temps que la confirmation de validation du compte. Merci de votre compréhension.';

    // Insère le nouvel élément <p> après l'élément <label>
    labelElement.parentNode.insertBefore(paragraphElement, labelElement.nextSibling);
  }
}


// Sélectionnez l'élément de case à cocher par son ID
var checkbox = document.getElementById('send_mail');

// Vérifiez si l'élément de case à cocher a été trouvé
if (checkbox) {
  // Décochez la case à cocher en supprimant l'attribut "checked"
  checkbox.removeAttribute('checked');

  // Vous pouvez également décocher la case à cocher en utilisant la propriété "checked" avec la valeur "false"
  // checkbox.checked = false;
}