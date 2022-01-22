var faq = [{
  title: "Login and Registration",
  items: [{
    keywords: "signing up",
    title: "How do I sign up?",
    text: "You can sign up to the application by going to sign up page and filling the form with user phone number, email and  Name. After filling the form you will receive a verification code on your phone number. You can use this code to verify your account. After verification you can login to the application."
  }, {
    keywords: "How to login",
    title: "How do I login?",
    text: "You can login to the application by going to login page and filling the form with your phone number and verification code. After filling the form you will be logged in to the application."
  }]
}, {
  title: "How to Search for a Shop in Search in Kerala",
  items: [{
    keywords: "How to search",
    title: "How do I search for a shop?",
    text: "You can search for a shop by going to search page and filling the form with the shop name. After filling the form you will be redirected to the search results page."
  }]
}, {
  title: "How to add a business to the application",
  items: [{
    keywords: "How to add a business",
    title: "How do I add a business?",
    text: "You can add a business by going to add business page and filling the form with the business details. After filling the form you will be redirected to the add business page."
  }]
}]

function link(text, link) {
  return "<a href=\"" + link + "\" target=\"blank\">" + text + "</a>";
}

function brbr() {
  return br() + br();

}

function br() {
  return "<br/>";
}
