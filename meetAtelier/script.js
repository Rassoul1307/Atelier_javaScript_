// const lists = document.getElementById("lists")

// const liNode = document.createElement("li");

// const textnode = document.createTextNode("Atelier meet");

// liNode.append(textnode)

// lists.appendChild(liNode)

// console.log(liNode);

/**
 * <li>Atelier meet</li>
 * ! CREER <li></li> : document.createElement("li")
 * 
 * ! CREER LE TEXT A INSERER DANS <li></li> : document.createTextNode("Atelier meet");
 * 
 * ! AJOUTER(append) LE TEXT DANS LE NODE <li></li> 
 */



document.getElementById("verifierBtn").addEventListener("click", function() {
    let baliseSaisie = document.getElementById("baliseInput").value.toLowerCase();
    let contenu = document.getElementById("contenu").value
    const element = document.getElementById("monElement")

    let isBaliseValide = /^(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)$/.test(baliseSaisie);
    
    if (isBaliseValide) {
        const baliser = document.createElement(baliseSaisie)
        baliser.innerHTML=contenu;
        element.append(baliser)

    } else {
        element.textContent = "La balise <" + baliseSaisie + "> n'est pas une balise HTML valide.";
    }
    document.getElementById("baliseInput").value = ""
    document.getElementById("contenu").value = ""
});






















