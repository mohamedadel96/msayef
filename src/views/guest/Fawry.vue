<template>
  <div>please go back and recheck again</div>
</template>

<script>
export default {
  data() {
    return {
      FawryPay: null,
      chargeRequest: null
    };
  },
  mounted() {
    let paymentData = JSON.parse(this.$route.params.paymentData);
    let serverAddress = "https://www.atfawry.com";
    let eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    let productsJSON = "{}";

    let fawry = class FawryPay {
      constructor() {}

      static loadWidget() {
        let div = document.createElement("div");
        div.innerHTML =
          '<iframe id="fawryPluginFrame" src="' +
          serverAddress +
          "/ECommercePlugin/plugin.jsp?lang=" +
          FawryPay.undefinedOrNullToEmpty(FawryPay.chargeRequest.language) +
          "&merchant=" +
          FawryPay.undefinedOrNullToEmpty(FawryPay.chargeRequest.merchantCode) +
          "&merchantRefNum=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.merchantRefNumber
          ) +
          "&userName=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.customer.name
          ) +
          "&mobile=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.customer.mobile
          ) +
          "&email=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.customer.email
          ) +
          "&customerId=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.customer.customerProfileId
          ) +
          "&orderDesc=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.order.description
          ) +
          "&orderExpiry=" +
          FawryPay.undefinedOrNullToEmpty(FawryPay.chargeRequest.order.expiry) +
          "&signature=" +
          FawryPay.undefinedOrNullToEmpty(FawryPay.chargeRequest.signature) +
          "&invoiceCode=" +
          FawryPay.undefinedOrNullToEmpty(FawryPay.chargeRequest.invoiceCode) +
          "&visaCardOnly=" +
          FawryPay.undefinedOrNullToEmpty(FawryPay.chargeRequest.visaCardOnly) +
          "&customerRegisteredAddress=" +
          encodeURIComponent(
            JSON.stringify(FawryPay.chargeRequest.customer.address)
          ) +
          "&preferredShippingOption=" +
          FawryPay.undefinedOrNullToEmpty(
            FawryPay.chargeRequest.preferredShippingOption
          ) +
          '" style=" background-color:rgb(245,245,245);position: fixed; width: 100%;height: 100%;top: 0%;left: 0%;z-index: 999999;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#b2000000, endColorstr=#b2000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#b2000000, endColorstr=#b2000000)";" allowtransparency="false"  />';

        document.body.appendChild(div.childNodes[0]);
      }

      static checkoutJS(chargeRequest, successCallback, errorCallback) {
        FawryPay.chargeRequest = chargeRequest;
        FawryPay.successCallback = successCallback;
        FawryPay.errorCallback = errorCallback;
        FawryPay.loadWidget();
      }

      static checkout(chargeRequest, successPageUrl, failerPageUrl) {
        FawryPay.chargeRequest = chargeRequest;
        FawryPay.successPageUrl = successPageUrl;
        FawryPay.failerPageUrl = failerPageUrl;
        FawryPay.loadWidget();
      }

      static undefinedOrNullToEmpty(value) {
        if (typeof value === "number") return value;
        else if (
          typeof value === "undefined" ||
          value == null ||
          value.toUpperCase() === "null".toUpperCase()
        ) {
          return "";
        }
        return value;
      }
    };

    // Listen to message from child window
    eventer(
      messageEvent,
      function(e) {
        let key = e.message ? "message" : "data";
        let data = e[key];
        if (data == "deleteFrame") deleteFrame();
        else if (data == "getData") sendMessage();
        else if (
          data &&
          data.func &&
          data.func == "paymentDoneCallbackFunction"
        )
          success(data);
        else if (data && data.func && data.func == "requestCanceldCallBack")
          failed(data);
        // run function//
      },
      false
    );

    function success(data) {
      let chargeResponse = {};
      chargeResponse.merchantRefNumber = fawry.chargeRequest.merchantRefNumber;
      chargeResponse.fawryRefNumber = data.billUploadBillAccNum;
      chargeResponse.paymentMethod = data.paymentMethod;
      chargeResponse.shippingOption = data.shippingOption;
      chargeResponse.signature = data.messageSignature;

      if (fawry.successCallback) {
        fawry.successCallback(chargeResponse);
      } else
        window.location.href =
          fawry.successPageUrl +
          "?chargeResponse=" +
          JSON.stringify(chargeResponse);
    }

    function failed(data) {
      if (fawry.errorCallback) {
        fawry.errorCallback(fawry.chargeRequest.merchantRefNumber);
      }
      // window.location.href =
      //   fawry.failerPageUrl +
      //   "?merchantRefNum=" +
      //   fawry.chargeRequest.merchantRefNumber;
      // this.$route.push("/");
    }

    function sendMessage() {
      let iframe = document.getElementById("fawryPluginFrame");
      iframe.contentWindow.postMessage(
        JSON.stringify(fawry.chargeRequest.order.orderItems),
        "*"
      );
    }

    function deleteFrame() {
      let iframe = document.getElementById("fawryPluginFrame");
      if (iframe) {
        iframe.remove();
      }
    }


 let chargeRequest = {};
    chargeRequest.language = "en-gb";
    chargeRequest.merchantCode = "cIUEeFLZOP5KitmTMhLsqw==";
    chargeRequest.merchantRefNumber = paymentData.ref_code;
    chargeRequest.customer = {};
    chargeRequest.customer.name = paymentData.name;
    chargeRequest.customer.mobile = paymentData.phone;
    chargeRequest.customer.email = paymentData.email;
    chargeRequest.order = {};
    chargeRequest.order.description = "test bill inq";
    chargeRequest.order.expiry = "";
    chargeRequest.order.orderItems = [];
    let item = {};
    item.productSKU = paymentData.property_id.toString();
    item.description = "عقار من مصايف";
    item.price = paymentData.deposit;
    item.quantity = "1";
    item.width = "12222";
    item.height = "12222";
    item.length = "12222";
    item.weight = "12222";
    chargeRequest.order.orderItems.push(item);
    chargeRequest.signature = paymentData.signature;
    this.chargeRequest = chargeRequest;

    fawry.checkout(chargeRequest, "http://google", "http://google");
    this.$router.go(-1);
  }
};
</script>

<style scoped>
</style>