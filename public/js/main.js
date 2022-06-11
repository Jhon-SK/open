let SELECT = $('.m__select');
let SELECTLIST = $('.select_giro');
let MODAL = $('.modal');
let MODAL_LEGAL = $('.popup_legales')
let MODAL_POLICY = $('.popup_politicas')
let BUTTOMODAL = $('.btn__modal');
let BUTTOMSUMBIT = $(".btn__submit");
let PHONENUMBER;
let RUCNUMBER="";
let EMAIL="";
let PRODUCT = "";
let CHECKBOX = "";
let WIDTHVAL = $(window).width();
let TSOURCE="0101";
let UTM_SOURCE="";
let UTM_MEDIUM="";
let UTM_CAMPAIGN="";
let UTM_CONTENT="";
let URL_PARAM= "";
$( document ).ready(function() {
    new WOW().init();
    URL_PARAM = new URLSearchParams(window.location.search)
    if (URL_PARAM.has('tsource')){
        TSOURCE= URL_PARAM.get('tsource');
    }
    if (URL_PARAM.has('utm_source')){
        UTM_SOURCE= URL_PARAM.get('utm_source');
    }
    if (URL_PARAM.has('utm_medium')){
        UTM_MEDIUM= URL_PARAM.get('utm_medium');
    }
    if (URL_PARAM.has('utm_campaign')){
        UTM_CAMPAIGN= URL_PARAM.get('utm_campaign');
    }
    if (URL_PARAM.has('utm_content')){
        UTM_CONTENT= URL_PARAM.get('utm_content');
    }
});
if (WIDTHVAL > 769){
if (window.location.pathname === "/gracias"){
    $('.nav').hide();
}
}
/* Funcion Jquery que despliega el select usando evento Toggle*/
SELECT.click(function(){
    if (WIDTHVAL < 769){
    $(this).siblings('.select__mobile').toggle();
    } else {
    $(this).siblings('#select_giro').toggle();
    }
});
/* Fin */

/* Funcion Jquery para capturar el valor del select, copiandolo al Label de producto*/
SELECTLIST.change(function () {
    $(this).siblings('.m__select').children('.m__value').text(this.value);
    $(this).siblings('.m__select').children('.m__value').css('color', '#004481');
    $(this).hide();
});
/* Fin */
/* Funcion Jquery para capturar el valor del select, copiandolo al Label de producto*/
function OptionSelection(e){
    $(e).parent().siblings('.m__select').children('.m__value').text(e.text());
    $(e).parent().siblings('.m__select').children('.m__value').css('color', '#004481');
    $(e).parent().hide();
};
/* Fin */

/* Funcion Jquery para capturar evento clic en el boton de modal ubicado en los cards, abre formulario modal*/
BUTTOMODAL.click(function(){
    MODAL.fadeIn('500');
})
/*Fin*/
/* Funcion para aparecer modal de Politicas de privacidad*/
function PolicyRise(){
    MODAL_POLICY.fadeIn('500');
}
/* Fin */

/* Funcion para aparecer modal de Legal*/
function LegalRise(){
    MODAL_LEGAL.fadeIn('500');
}
/* Fin */
/* Funcion para desplegar politicas de privacidad antes del footer*/
function ToggLelegal(e){
   e.parent().siblings('.legal__text').slideToggle(function(){
    e.toggleClass('rotate')
   });
}
/*Fin */
/*Funcion para cerrar modal y popup*/
function ModalClose(e) {
    $(e.parents()[e.parents().length-3]).fadeOut('500');
}
/*Fin*/
function MobMenu(e) {
    e.parent().siblings('.nav__options__mobile').toggle();
    
}
/*Funcion para cerrar select al hacer clic fuera del elemento  */
$("body").click(function(e) {
    if ((e.target.id != 'm__value') && (e.target.id != 'm__select')){
        SELECTLIST.hide();
        }
});
/* Fin */ 

/* Funcion Jquery para capturar los datos del formulario, validarlos y enviarlos*/
BUTTOMSUMBIT.click(function(){
     PHONENUMBER = $(this).parents('.form__submit').siblings().find("input[name='phone'").val();
     PRODUCT = $(this).parents('.form__submit').siblings().find("label[name='product'").text();
     RUCNUMBER = $(this).parents('.form__submit').siblings().find("input[name='ruc']").val();
     EMAIL = $(this).parents('.form__submit').siblings().find("input[name='email']").val();
     CHECKBOX = $(this).parents('.form__submit').find("input[name='term']").is(":checked");
   
   if((PHONENUMBER === "") || (PHONENUMBER === undefined) || (PHONENUMBER.charAt(0) != '9') || (PHONENUMBER.length != "9")){
    alert("Telefono invalido");
   } else if (RUCNUMBER === "") {
    alert("RUC Invalido");
   } else if (EMAIL === "") {
    alert("Email requerido");
   } else if (PRODUCT === "" || PRODUCT === undefined || PRODUCT === "Giro comercial del negocio") {
    alert("Debe seleccionar un producto");
   } else if(CHECKBOX=== false) {
    alert("Debe aceptar los terminos y condiciones");
   } else { 
let datos = {
    "agentId": "",
    "apellidos": "",
    "calle": "",
    "chatId": "",
    "cliente": "OPENPAY_WEB",
    "cp": UTM_MEDIUM,
    "dispositivo": "",
    "email": EMAIL,
    "fabricanteMovil": "",
    "geoCalle": "",
    "geoCiudad": "",
    "geoISP": "",
    "geoLatLng": "",
    "geoNumero": "",
    "geoPais": "",
    "geoProvincia": "",
    "geoRegion": "",
    "idvar": UTM_CONTENT,
    "ipCliente": "",
    "lp": "",
    "microsite": "openpay-bbva.pe",
    "modeloMovil": "",
    "navegador": "",
    "nombre": "",
    "numDoc": RUCNUMBER,
    "observaciones": "CLIENTE SIN CAMPAÑA ICC",
    "operadorRed": "",
    "origen": UTM_SOURCE,
    "parametros": "",
    "pop": "",
    "popCep": "",
    "priority": "1",
    "procedencia": UTM_CAMPAIGN,
    "producto": PRODUCT,
    "regalo": "",
    "resCep": "",
    "resCliente": "",
    "resolucion": "",
    "sistemaOperativo": "",
    "telefono": PHONENUMBER,
    "tipDoc": "",
    "tipo": "c2c",
    "tsource": TSOURCE,
    "tsourceproveedor": "",
    "userAgent": "",
    "versionLanding": ""
  }
    const username = '6YQa@Jxx';
    const password = 'mK$VmxC2J08V';
    let datajson = JSON.stringify(datos);

    console.log(datos);
 
    $.ajax({
      url: 'https://general.ionosfera.pe/api/openpay/createLead',
      method: 'POST',
      contentType: 'application/json',
      headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    },
      data: datajson,
      success: function (res) {
        window.location.href = "gracias" + window.location.search;
      },
      error: function (res){
        console.log(res);
      }
    })
    console.log("echo");
}
})
/* Fin*/