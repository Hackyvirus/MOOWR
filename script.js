let first = false,
  second = false,
  indi = false,
  gross = false,
  confirm = false,
  Notconfirm = false,
  domestic = false,
  domestic2 = false,
  imported = false,
  imported2 = false,
  grossIndi = true,
  capPage = false,
  rawPage = false,
  commonPage = false;

let selectElements = [
    "percentage-select0",
    "percentage-select1",
    "percentage-select2",
    "percentage-select3",
    "percentage-select4",
    "percentage-select5",
    "percentage-select6",
    "percentage-select7",
    "percentage-select8",
    "percentage-select9",
  ],
  selectElements2 = [
    "percentage-select00",
    "percentage-select11",
    "percentage-select22",
    "percentage-select33",
    "percentage-select44",
    "percentage-select55",
    "percentage-select66",
    "percentage-select77",
    "percentage-select88",
    "percentage-select99",
  ],
  userInputes = [
    "userInputrate0",
    "userInputrate1",
    "userInputrate2",
    "userInputrate3",
    "userInputrate4",
    "userInputrate5",
    "userInputrate6",
    "userInputrate7",
    "userInputrate8",
    "userInputrate9",
  ],
  userInputes2 = [
    "userInputrate00",
    "userInputrate11",
    "userInputrate22",
    "userInputrate33",
    "userInputrate44",
    "userInputrate55",
    "userInputrate66",
    "userInputrate77",
    "userInputrate88",
    "userInputrate99",
  ];

$(".faq-div .add").click(function () {
  $(this).closest(".faq-div").find(".ans").slideToggle();
  const icon = $(this);
  if (icon.attr("src") === "img/plus.png") {
    icon.attr("src", "img/minus.png");
  } else {
    icon.attr("src", "img/plus.png");
  }
});
$("#gross").click(() => {
  $("#gross").toggleClass("active");
  $("#capQuedomestic").removeClass("active");
  $("#capQueimported").removeClass("active");
  $("#indiztermsYes-container").css("display", "none");
  gross = !gross;
  $("#indi").removeClass("active");
  $("#indiztermsYes").removeClass("active");
  indi = !gross;
  console.log("gross", gross);
  console.log("indi", indi);
});
$("#indi").click(() => {
  $("#indi").toggleClass("active");
  indi = !indi;
  $("#gross").removeClass("active");
  gross = !indi;
  if (indi) {
    $("#indiztermsYes-container").css("display", "flex");
    $("#opt-container").css("display", "flex");
  } else {
    $("#opt-container").css("display", "none");
  }

  console.log("indi", indi);
  console.log("gross", gross);
});
$("#indiztermsYes").click(() => {
  $("#indiztermsYes").toggleClass("active");
  $("#indiztermsNo").removeClass("active");
  confirm = !confirm;
  Notconfirm = !confirm;
});
$("#indiztermsNo").click(() => {
  $("#indiztermsNo").removeClass("active");
  Notconfirm = !Notconfirm;
  confirm = !Notconfirm;
  $("#gross").toggleClass("active");
  $("#capQuedomestic").removeClass("active");
  $("#capQueimported").removeClass("active");
  $("#indiztermsYes-container").css("display", "none");
  gross = !gross;
  $("#indi").removeClass("active");
  $("#indiztermsYes").removeClass("active");
  indi = !gross;
});

$("#cap-que-domestic-yes").click(() => {
  $("#cap-que-domestic-yes").addClass("active");
  domestic = true;
  $("#cap-que-domestic-no").removeClass("active");
  imported = false;
  $("#domestic-goods-title").removeClass("inactive-box");
  $("#domestic-goods-box").removeClass("inactive-box");
  console.log("domestic", domestic);
  console.log("imported", imported);
});

$("#cap-que-domestic-no").click(() => {
  $("#cap-que-domestic-no").addClass("active");
  domestic = false;
  $("#cap-que-domestic-yes").removeClass("active");
  imported = true;
  $("#domestic-goods-title").addClass("inactive-box");
  $("#domestic-goods-box").addClass("inactive-box");
  console.log("domestic", domestic);
  console.log("imported", imported);
});
$("#raw-que-domestic-yes").click(() => {
  $("#raw-que-domestic-yes").toggleClass("active");
  domestic = true;
  $("#raw-que-domestic-no").removeClass("active");
  imported = false;
  $("#domestic-raw-goods-title").removeClass("inactive-box");
  $("#raw-domestic-box").removeClass("inactive-box");
  console.log("domestic", domestic);
  console.log("imported", imported);
});

$("#imported-raw-materials-domestic-sales-next").click(()=>{
  $("#imported-raw-goods2").toggleClass("inactive-box");
  $("#raw-imported-box2").toggleClass("inactive-box");
  $("#Domestic-Raw-Materials-container-next").toggleClass("inactive-box");
})
$("#Domestic-Raw-Materials-container-next").click(()=>{
  $("#Domestic-Raw-Materials-container").toggleClass("inactive-box");
  $("#raw-material-que-next").toggleClass("inactive-box");
})
$("#Raw-being-procured-yes").click(()=>{
  $("#raw-materials-inputs").css("display", "flex");
  $("#Raw-being-procured-yes").addClass("active");
  $("#Raw-being-procured-no").removeClass("active");


})
$("#Raw-being-procured-no").click(()=>{
  $("#raw-materials-inputs").css("display", "none");
  $(".raw-que-domestic").css("display", "none");

  $("#Raw-being-procured-yes").removeClass("active");
  $("#Raw-being-procured-no").addClass("active");
})

$("#raw-que-domestic-no").click(() => {
  $("#raw-que-domestic-no").toggleClass("active");
  domestic = false;
  $("#raw-que-domestic-yes").removeClass("active");
  imported = true;
  $("#domestic-raw-goods-title").addClass("inactive-box");
  $("#raw-domestic-box").addClass("inactive-box");
  console.log("domestic", domestic);
  console.log("imported", imported);
});

$("#rawQuedomestic").click(() => {
  if (indi) {
    $("#rawQuedomestic").toggleClass("active");
    domestic2 = !domestic2;
    $("#rawQueimported").removeClass("active");
    imported2 = !domestic2;
    $("#DPCGContainer").addClass("inactive-box");
    $("#raw-domestic-table-title").toggleClass("inactive-box");
    $("#rawmaterialDomesticTable").toggleClass("inactive-box");
    $("#DPCGContainer2").addClass("inactive-box");
    console.log("domestic2", domestic2);
    console.log("imported2", imported2);
  } else if (gross) {
    $("#rawQuedomestic").toggleClass("active");
    domestic2 = !domestic2;
    $("#rawQueimported").removeClass("active");
    imported2 = !domestic2;
    $("#raw-domestic-box").css("display", "grid");
    $("#capQuedomestic-raw-goods-title").css("display", "block");
    console.log("domestic2", domestic2);
    console.log("imported2", imported2);
  }
});

$("#rawQueimported").click(() => {
  $("#rawQueimported").toggleClass("active");
  imported2 = !imported2;
  $("#rawQuedomestic").removeClass("active");
  domestic2 = !imported2;
  $("#raw-domestic-table-title").addClass("inactive-box");
  $("#rawmaterialDomesticTable").addClass("inactive-box");
  $("#DPCGContainer2").toggleClass("inactive-box");
  console.log("domestic2", domestic2);
  console.log("imported2", imported2);
});

$("#capQuedomestic").click(() => {
  if (indi) {
    $("#capQuedomestic").toggleClass("active");
    domestic = !domestic;
    $("#capQueimported").removeClass("active");
    imported = !domestic;
    $("#DPCGContainer").addClass("inactive-box");
    $("#cap-good-table-title").toggleClass("inactive-box");
    $("#capitalGoodsDomesticTable").toggleClass("inactive-box");
    console.log("domestic", domestic);
    console.log("imported", imported);
  }
});
$("#capQueimported").click(() => {
  $("#capQueimported").toggleClass("active");
  imported = !imported;
  $("#capQuedomestic").removeClass("active");
  domestic = !imported;
  $("#DPCGContainer").toggleClass("inactive-box");
  $("#cap-good-table-title").addClass("inactive-box");
  $("#capitalGoodsDomesticTable").addClass("inactive-box");
  console.log("domestic", domestic);
  console.log("imported", imported);
});

$("#Gross-Individual").click(() => {
  if (gross || indi) {
    capPage = true;
    if (gross) {
      $("#cap-good-que").addClass("active-box");
      $("#gross-indi-box").removeClass("active-box");
      $("#first-nav-item").removeClass("active");
      $("#second-nav-item").addClass("active");
      $("#capQuedomestic-goods-title").addClass("active-box");
      $("#capQuedomestic-goods-box").css("display", "grid");
    } else if (indi) {
      if (confirm) {
        $("#cap-good-que").addClass("active-box");
        $("#gross-indi-box").removeClass("active-box");
        $("#first-nav-item").removeClass("active");
        $("#second-nav-item").addClass("active");
        $("#cap-table-container").addClass("active-box");
        $("#main-section").addClass("active-table-layout");
        $("#FAQs").addClass("active-faq-layout");
        $("#cap-good-que").removeClass("active-box");
      } else {
        alert("Please confirm the terms and conditions");
      }
    } else {
      alert("Choose Right Options");
    }
  } else {
    alert("Please select both Gross/Individual");
  }
});

$("#cap-que-good-next").click(() => {
  rawPage = true;

  if (gross && domestic) {
    $("#second-nav-item").removeClass("active");
    $("#third-nav-item").addClass("active");
    $("#raw-good-que").addClass("active-box");
    $("#cap-good-que").removeClass("active-box");
    // $("#raw-domestic-box").removeClass("inactive-box");
  } else if (gross && imported) {
    $("#second-nav-item").removeClass("active");
    $("#third-nav-item").addClass("active");
    $("#raw-good-que").addClass("active-box");
    $("#cap-good-que").removeClass("active-box");
    $("#capQuedomestic-goods-title").addClass("inactive-box");
    $("#raw-domestic-box").addClass("inactive-box");
  } else {
    alert("Choose Right Options");
  }
});
$("#cap-table-good-next").click(() => {
  if (domestic || imported) {
    rawPage = true;
    if (indi && domestic) {
      $("#second-nav-item").removeClass("active");
      $("#third-nav-item").addClass("active");
      $("#cap-table-container").removeClass("active-box");
      $("#raw-table-container").addClass("active-box");
      $("#cap-table-container").addClass("inactive-box");
      $("#main-section").addClass("active-table-layout");
      $("#FAQs").addClass("active-faq-layout");
    } else if (indi && imported) {
      $("#second-nav-item").removeClass("active");
      $("#third-nav-item").addClass("active");
      $("#cap-table-container").removeClass("active-box");
      $("#raw-table-container").addClass("active-box");
      $("#raw-domestic-table-title").addClass("inactive-box");
      $("#rawmaterialDomesticTable").addClass("inactive-box");
    } else {
      alert("Choose Right Options");
    }
  } else {
    alert("Choose Right Options");
  }
});

$("#raw-material-que-next").click(() => {
  commonPage = true;
  $("#third-nav-item").removeClass("active");
  $("#fourth-nav-item").addClass("active");
  $("#common-questions").addClass("active-box");
  $("#raw-good-que").removeClass("active-box");
});
$("#raw-material-table-next").click(() => {
  commonPage = true;
  if (domestic2 && indi) {
    $("#third-nav-item").removeClass("active");
    $("#fourth-nav-item").addClass("active");
    $("#common-questions").addClass("active-box");
    $("#raw-table-container").removeClass("active-box");
    $("#cap-table-container").addClass("inactive-box");
    $("#main-section").removeClass("active-table-layout");
    $("#FAQs").removeClass("active-faq-layout");
  } else if (imported2 && indi) {
    $("#third-nav-item").removeClass("active");
    $("#fourth-nav-item").addClass("active");
    $("#common-questions").addClass("active-box");
    $("#raw-table-container").removeClass("active-box");
    $("#cap-table-container").addClass("inactive-box");
    $("#main-section").removeClass("active-table-layout");
    $("#FAQs").removeClass("active-faq-layout");
  } else {
    alert("Choose Right Options");
  }
});

$("#domestic-capital-goods-container-next").click(()=>{
  $(".domestic-capital-goods-container").toggleClass("inactive-box");
})
$("#being-procured-yes").click(()=>{
  $("#being-procured-no").removeClass("active");
  $("#being-procured-yes").addClass("active");
  $("#CapitalGoods").removeClass("inactive-box");
  $("#domestic-and-imported").addClass("inactive-box");
})
$("#being-procured-no").click(()=>{
  $("#being-procured-no").addClass("active");
  $("#cap-que-domestic").css("display", "none");
  $("#being-procured-yes").removeClass("active");
  $("#CapitalGoods").addClass("inactive-box");
})

$("#first-nav-item").click(() => {
  if (grossIndi) {
    $("#first-nav-item").addClass("active");
    $("#second-nav-item").removeClass("active");
    $("#third-nav-item").removeClass("active");
    $("#fourth-nav-item").removeClass("active");
    $("#gross-indi-box").addClass("active-box");
    $("#raw-good-que").removeClass("active-box");
    $("#gross-indi-box").addClass("active-box");
    $("#raw-good-que").removeClass("active-box");
    $("#cap-good-que").removeClass("active-box");
    $("#cap-table-container").removeClass("active-box");
    $("#raw-table-container").removeClass("active-box");
    $("#common-questions").removeClass("active-box");
    $("#main-section").removeClass("active-table-layout");
    $("#FAQs").removeClass("active-faq-layout");
  } else {
    alert("Please complete the previous steps first.");
  }
});
$("#second-nav-item").click(() => {
  if (capPage) {
    $("#first-nav-item").removeClass("active");
    $("#second-nav-item").addClass("active");
    $("#third-nav-item").removeClass("active");
    $("#fourth-nav-item").removeClass("active");
    $("#raw-good-que").addClass("active-box");
    $("#gross-indi-box").removeClass("active-box");
    $("#raw-good-que").removeClass("active-box");
    $("#common-questions").removeClass("active-box");
    $("#cap-table-container").removeClass("active-box");
    $("#raw-table-container").removeClass("active-box");
    $("#main-section").removeClass("active-table-layout");
    $("#FAQs").removeClass("active-faq-layout");
    if (gross && domestic) {
      $("#cap-good-que").addClass("active-box");
      $("#capQuedomestic-goods-title").addClass("active-box");
      $("#capQuedomestic-goods-box").css("display", "grid");
    } else if (gross && imported) {
      $("#cap-good-que").addClass("active-box");
    } else if (indi && domestic) {
      $("#cap-table-container").addClass("active-box");
      $("#main-section").addClass("active-table-layout");
      $("#FAQs").addClass("active-faq-layout");
      $("#cap-good-que").removeClass("active-box");
      $("#cap-good-table-title").removeClass("inactive-box");
      $("#capitalGoodsDomesticTable").removeClass("inactive-box");
    } else if (indi && imported) {
      $("#cap-table-container").addClass("active-box");
      $("#main-section").addClass("active-table-layout");
      $("#FAQs").addClass("active-faq-layout");
      $("#cap-good-que").removeClass("active-box");
    } else {
      alert("Choose Right Options");
    }
  } else {
    alert("Please complete the previous steps first.");
  }
});
$("#third-nav-item").click(() => {
  if (rawPage) {
    $("#first-nav-item").removeClass("active");
    $("#second-nav-item").removeClass("active");
    $("#third-nav-item").addClass("active");
    $("#fourth-nav-item").removeClass("active");
    $("#gross-indi-box").removeClass("active-box");
    $("#raw-good-que").removeClass("active-box");
    $("#cap-good-que").removeClass("active-box");
    $("#cap-table-container").removeClass("active-box");
    $("#raw-table-container").removeClass("active-box");
    $("#common-questions").removeClass("active-box");
    $("#main-section").removeClass("active-table-layout");
    $("#FAQs").removeClass("active-faq-layout");
    if (gross && domestic) {
      $("#raw-good-que").addClass("active-box");
      $("#capQuedomestic-raw-goods-title").addClass("active-box");
      $("#raw-domestic-box").css("display", "grid");
    } else if (gross && imported) {
      $("#raw-good-que").addClass("active-box");
    } else if (indi && domestic) {
      $("#raw-table-container").addClass("active-box");
      $("#main-section").addClass("active-table-layout");
      $("#FAQs").addClass("active-faq-layout");
      $("#cap-good-que").removeClass("active-box");
      $("#cap-good-table-title").removeClass("inactive-box");
      $("#capitalGoodsDomesticTable").removeClass("inactive-box");
    } else if (indi && imported) {
      $("#raw-table-container").addClass("active-box");
      $("#main-section").addClass("active-table-layout");
      $("#FAQs").addClass("active-faq-layout");
      $("#cap-table-container").removeClass("active-box");
    } else {
      alert("Choose Right Options");
    }
  } else {
    alert("Please complete the previous steps first.");
  }
});
$("#fourth-nav-item").click(() => {
  if (commonPage) {
    $("#first-nav-item").removeClass("active");
    $("#second-nav-item").removeClass("active");
    $("#fourth-nav-item").addClass("active");
    $("#third-nav-item").removeClass("active");
    $("#gross-indi-box").removeClass("active-box");
    $("#raw-good-que").removeClass("active-box");
    $("#cap-good-que").removeClass("active-box");
    $("#cap-table-container").removeClass("active-box");
    $("#raw-table-container").removeClass("active-box");
    $("#common-questions").addClass("active-box");
    $("#main-section").removeClass("active-table-layout");
    $("#FAQs").removeClass("active-faq-layout");
  } else {
    alert("Please complete the previous steps first.");
  }
});


// Get the elements
const learnMoreBtn = document.getElementById("learn-more-btn");
const popupBox = document.getElementById("popup-box");
const closeBtn = document.querySelector(".close-btn3");

function formatNumber(id) {
  const input = document.getElementById(id);
  let value = input.value.replace(/[^\d.]/g, "");
  if ((value.match(/\./g) || []).length > 1) {
    value = value.replace(/\.(?=.*\.)/g, "");
  }
  let [integerPart, decimalPart] = value.split(".");
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let formattedValue =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  if (decimalPart !== undefined) {
    formattedValue += "." + decimalPart;
  }
  input.value = formattedValue;
}

function formatNumberPDF(valuePDF) {
  valuePDF = valuePDF.toString();
  let isNegative = valuePDF.startsWith("-");
  valuePDF = valuePDF.replace(/\D/g, "");
  if (isNegative) {
    valuePDF = "-" + valuePDF;
  }
  let lastThree = valuePDF.slice(-3);
  let otherNumbers = valuePDF.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let formattedValue =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return formattedValue;
}

selectElements.forEach((id, index) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("change", function () {
      console.log(`Selected value for ${id}:`, this.value);
      if (this.value === "others") {
        document.getElementById(userInputes[index]).style.display = "block";
      } else {
        document.getElementById(userInputes[index]).style.display = "none";
      }
    });
  } else {
    console.error(`Element with id ${id} not found`);
  }
});

selectElements2.forEach((id, index) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("change", function () {
      console.log(`Selected value for ${id}:`, this.value);
      if (this.value === "others") {
        document.getElementById(userInputes2[index]).style.display = "block";
      } else {
        document.getElementById(userInputes2[index]).style.display = "none";
      }
    });
  } else {
    console.error(`Element with id ${id} not found`);
  }
});

function setupDisposalListeners() {
  document.querySelectorAll('select[id$="ms"]').forEach((select, index) => {
    select.addEventListener("change", () => {
      console.log("Index", index);
      let rowLetter = String.fromCharCode(97 + index);
      console.log(rowLetter);
      let intendedPeriodElement = document.querySelector(`#${rowLetter}ip`);
      console.log("intendedPeriodElement", intendedPeriodElement);
      if (select.value === "Sale in DTA") {
        intendedPeriodElement.style.display = "block";
      } else {
        intendedPeriodElement.style.display = "none";
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", setupDisposalListeners);

function displayNone() {
  if (document.getElementById("third-right-input").value == "Sale in DTA") {
    document.querySelector("#fourth-left").style.display = "flex";
  } else {
    document.querySelector("#fourth-left").style.display = "none";
  }
  if (document.getElementById("Dfourth-left-input").value == "Sale in DTA") {
    document.querySelector(".fourth-left2").style.display = "flex";
  } else {
    document.querySelector(".fourth-left2").style.display = "none";
  }
}
function safeParseFloat(value) {
  if (typeof value !== "string") {
    value = String(value);
  }
  return isNaN(parseFloat(value.replace(/,/g, "")))
    ? 0
    : parseFloat(value.replace(/,/g, ""));
}

let totalDutyofcap = 0;
let totalNVPofcap = 0;
let totalSavingsofcap = 0;
let lastNPVofcap = 0;
let lastNPVigstofcap = 0;
let totalBenifitRoDTEPofcap = 0;
let lastNPVFofcap = 0;
let totalofcap =
  totalDutyofcap +
  totalNVPofcap +
  totalSavingsofcap +
  lastNPVofcap +
  lastNPVigstofcap +
  totalBenifitRoDTEPofcap +
  lastNPVFofcap;

let customDutyofindi = 0;
let npvofindi = 0;
let totalSavingsofindi = 0;
let lastNPV2ofindi = 0;
let lastNPVigstofindi = 0;
let totalBenifitRoDTEPofindi = 0;
let lastNPVFofindi = 0;
let totalofindi =
  customDutyofindi +
  npvofindi +
  totalSavingsofindi +
  lastNPV2ofindi +
  lastNPVigstofindi +
  totalBenifitRoDTEPofindi +
  lastNPVFofindi;

let grossCIF,
  grossBCD,
  grossSGD,
  grossCWD,
  grossAIDC,
  grossADD,
  grossIGST,
  grossIntendedPeriod,
  grossDisposal,
  GrossSWS,
  grossCIF2,
  grossBCD2,
  grossSGD2,
  grossCWD2,
  grossAIDC2,
  grossADD2,
  grossIGST2,
  GrossSWS2,
  lifeCycle,
  ExpectedAnnualGrowth,
  rateOfInterest,
  timeGap,
  annualValueofRoDTEP,
  GrossAnnualValue,
  conversionOfRaw,
  exportSales,
  domesticSales,
  deemedExport,
  physicalExport,
  domesticProcurement,
  domesticProcurement2;

function getAllInputValues() {
  grossCIF = safeParseFloat(document.getElementById("first-left-input").value);
  grossBCD = safeParseFloat(document.getElementById("first-right-input").value);
  grossSGD = safeParseFloat(document.getElementById("sgd").value);
  grossCWD = safeParseFloat(document.getElementById("cwd").value);
  grossAIDC = safeParseFloat(
    document.getElementById("second-left-input").value
  );
  grossADD = safeParseFloat(
    document.getElementById("second-right-input").value
  );
  grossIGST = safeParseFloat(document.getElementById("third-left-input").value);
  grossIntendedPeriod = safeParseFloat(
    document.getElementById("fourth-left-input").value
  );
  grossDisposal = document.getElementById("third-right-input").value;
  GrossSWS = safeParseFloat(parseFloat((safeParseFloat(grossBCD) * 10) / 100));

  grossCIF2 = safeParseFloat(
    document.getElementById("first-left-input2").value
  );
  grossBCD2 = safeParseFloat(
    document.getElementById("first-right-input2").value
  );
  grossSGD2 = safeParseFloat(document.getElementById("sgd2").value);
  grossCWD2 = safeParseFloat(document.getElementById("cwd2").value);
  grossAIDC2 = safeParseFloat(
    document.getElementById("second-left-input2").value
  );
  grossADD2 = safeParseFloat(
    document.getElementById("second-right-input2").value
  );
  grossIGST2 = safeParseFloat(
    document.getElementById("third-left-input2").value
  );
  GrossSWS2 = parseFloat((safeParseFloat(grossBCD2) * 10) / 100);
  lifeCycle = safeParseFloat(
    document.getElementById("first-left-input3").value
  );
  ExpectedAnnualGrowth = safeParseFloat(
    document.getElementById("first-right-input3").value
  );
  rateOfInterest = safeParseFloat(
    document.getElementById("second-left-input3").value
  );
  timeGap = safeParseFloat(
    document.getElementById("second-right-input3").value
  );
  annualValueofRoDTEP = safeParseFloat(
    document.getElementById("third-left-input3").value
  );
  GrossAnnualValue = safeParseFloat(
    document.getElementById("third-right-input3").value
  );
  conversionOfRaw = safeParseFloat(
    document.getElementById("fourth-right-input3").value
  );
  exportSales = safeParseFloat(document.getElementById("export-sales").value);
  domesticSales = safeParseFloat(
    document.getElementById("domestic-sales").value
  );

  deemedExport = safeParseFloat(
    document.getElementById("fifth-left-input5").value
  );
  physicalExport = safeParseFloat(
    document.getElementById("fifth-right-input5").value
  );
  domesticProcurement = safeParseFloat(
    document.getElementById("domesticProcurement").value
  );
  domesticProcurement2 = safeParseFloat(
    document.getElementById("domesticProcurement2").value
  );

  console.log("grossCIF", grossCIF);
  console.log("grossBCD", grossBCD);
  console.log("grossSGD", grossSGD);
  console.log("grossCWD", grossCWD);
  console.log("grossAIDC", grossAIDC);
  console.log("grossADD", grossADD);
  console.log("grossIGST", grossIGST);
  console.log("grossIntendedPeriod", grossIntendedPeriod);
  console.log("grossDisposal", grossDisposal);
  console.log("GrossSWS", GrossSWS);
}

function calculateDuty(TotalCIF, TotalExport, totalCustomDuty) {
  let totalDutytoBePaid = 0;
  if (TotalExport >= TotalCIF) {
    return (totalDuty = 0);
  } else {
    let minusedValue = TotalCIF - TotalExport;
    let percentage = (minusedValue / TotalCIF) * 100;
    let duty = (totalCustomDuty * percentage) / 100;
    let duty2 = 0;
    for (let i = 1; i <= 10; i++) {
      duty2 += duty * (15 / 100);
    }
    totalDutytoBePaid = duty2 + duty;
    let Dair = 0;
    let lastNPVrair = 0;
    let npvair = 0;
    for (let i = 0; i < 9; i++) {
      if (Dair == 0) {
        Dair = 9 / 100 + 1;
      } else {
        Dair = Dair * (9 / 100 + 1);
      }
    }
    npvair = totalDutytoBePaid / Dair;
    lastNPVrair += npvair;
    return lastNPVrair;
  }
}
function firstCal() {
  console.log("firstCal");
  SEZGross()
  let totalDuty =
    safeParseFloat(GrossSWS) +
    safeParseFloat(grossBCD) +
    safeParseFloat(grossADD) +
    safeParseFloat(grossAIDC) +
    safeParseFloat(grossSGD) +
    safeParseFloat(grossCWD);
  console.log("1) totalDuty", totalDuty);
  let totalNVP;
  if (grossDisposal === "Sale in DTA") {
    totalNVP =
      (totalDuty /
        Math.pow(
          1 + safeParseFloat(rateOfInterest) / 100,
          safeParseFloat(grossIntendedPeriod)
        )) *
      -1;
  } else {
    totalNVP = 0;
  }
  console.log("2) Total NPV ", totalNVP);

  let totalSavings =
    safeParseFloat(grossIGST) *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(timeGap) / 365);
  console.log("3) total Savings", totalSavings);
  let RawTotalDuty =
    safeParseFloat(grossBCD2) +
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossADD2) +
    safeParseFloat(grossSGD2) +
    safeParseFloat(grossCWD2);
  console.log("4) Total", RawTotalDuty);

  console.log("GrossSWS", GrossSWS2);
  console.log("grossCWD", grossCWD2);
  console.log("grossBCD", grossBCD2);
  console.log("grossSGD", grossSGD2);
  console.log("grossAIDC", grossAIDC2);
  console.log("grossADD", grossADD2);

  let E = 0;
  let totalBenifit = 0;
  let lastNPV = 0;
  let npv;
  let tempRaw = RawTotalDuty;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv = totalBenifit / E;
    lastNPV += npv;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("4) Raw NPV: ", lastNPV);

  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifitigst =
      safeParseFloat(grossIGST2) *
      (parseFloat(safeParseFloat(timeGap)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (Digst == 0) {
      Digst = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Digst = Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    npvigst = totalBenifitigst / Digst;
    lastNPVigst += npvigst;
    grossIGST2 = grossIGST2 * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("5) IGST", lastNPVigst);

  let Drodtep = 0;
  let totalBenifitrodtep = 0;
  let lastNPVrodtep = 0;

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (Drodtep == 0) {
      Drodtep = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Drodtep = Drodtep * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    totalBenifitrodtep =
      safeParseFloat(annualValueofRoDTEP) / safeParseFloat(Drodtep);
    lastNPVrodtep += totalBenifitrodtep;
    annualValueofRoDTEP =
      safeParseFloat(annualValueofRoDTEP) *
      (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("RoDTep Banifit", lastNPVrodtep);

  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;
  let npvair;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (Dair == 0) {
      Dair = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Dair = Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    totalBenifitair = safeParseFloat(GrossAnnualValue) / Dair;
    npvair = totalBenifitair / Dair;
    lastNPVrair += totalBenifitair;
    GrossAnnualValue =
      safeParseFloat(GrossAnnualValue) *
      (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("All indsty rate", lastNPVrair);
  let totalBenifitRoDTEP = (lastNPVrodtep + lastNPVrair) * -1;
  console.log("6) TotalBenifitRoDTEP", totalBenifitRoDTEP);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * RawTotalDuty;
  console.log("7) Fineshed Goods", finishedGoods);

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("8) Last Fineshed good", lastNPVF);

  totalDutyofcap += totalDuty;
  totalNVPofcap += totalNVP;
  totalSavingsofcap += totalSavings;
  lastNPVofcap += lastNPV;
  lastNPVigstofcap += lastNPVigst;
  totalBenifitRoDTEPofcap += parseFloat(totalBenifitRoDTEP);
  lastNPVFofcap += lastNPVF;
  totalExport = deemedExport + physicalExport;
  const TotalDutyTobePaid = calculateDuty(grossCIF, totalExport, totalDuty);
  console.log("grossCIF", grossCIF);
  console.log("TotalExport", totalExport);
  console.log("totalDuty", totalDuty);
  console.log("TotalDutyTobePaid", TotalDutyTobePaid);
  console.log("totalDutyofcap", totalDutyofcap);
  console.log("totalNVPofcap", totalNVPofcap);
  console.log("totalSavingsofcap", totalSavingsofcap);
  console.log("lastNPVofcap", lastNPVofcap);
  console.log("lastNPVigstofcap", lastNPVigstofcap);
  console.log("totalBenifitRoDTEPofcap", totalBenifitRoDTEPofcap);
  console.log("lastNPVFofcap", lastNPVFofcap);

  if (domestic) {
    firstCal2();
  } else {
    updatePDFAndDownload(
      "Nov 2024",
      totalDuty.toFixed(),
      totalNVP.toFixed(),
      totalSavings.toFixed(),
      lastNPV.toFixed(),
      lastNPVigst.toFixed(),
      parseFloat(totalBenifitRoDTEP).toFixed(),
      lastNPVF.toFixed(),
      (
        totalDuty +
        totalNVP +
        totalSavings +
        lastNPV +
        lastNPVigst +
        parseFloat(totalBenifitRoDTEP) +
        lastNPVF
      ).toFixed()
    );
  }
}
function calculateIndiValue() {
  // Getting input values
  console.log("calculateIndiValue");

  // Arrays for input values
  let procuredValues = [
    safeParseFloat(document.getElementById("procured1").value),
    safeParseFloat(document.getElementById("procured2").value),
    safeParseFloat(document.getElementById("procured3").value),
    safeParseFloat(document.getElementById("procured4").value),
    safeParseFloat(document.getElementById("procured5").value),
  ];
  let procuredValues2 = [
    safeParseFloat(document.getElementById("procured6").value),
    safeParseFloat(document.getElementById("procured7").value),
    safeParseFloat(document.getElementById("procured8").value),
    safeParseFloat(document.getElementById("procured9").value),
    safeParseFloat(document.getElementById("procured10").value),
  ];
  let cifValues = [
    safeParseFloat(document.getElementById("taaa").value),
    safeParseFloat(document.getElementById("taba").value),
    safeParseFloat(document.getElementById("taca").value),
    safeParseFloat(document.getElementById("tada").value),
    safeParseFloat(document.getElementById("taea").value),
  ];
  let sgdvalues = [
    safeParseFloat(document.getElementById("sgda").value),
    safeParseFloat(document.getElementById("sgdb").value),
    safeParseFloat(document.getElementById("sgdc").value),
    safeParseFloat(document.getElementById("sgdd").value),
    safeParseFloat(document.getElementById("sgde").value),
  ];
  let sgdvalues2 = [
    safeParseFloat(document.getElementById("sgdf").value),
    safeParseFloat(document.getElementById("sgdg").value),
    safeParseFloat(document.getElementById("sgdh").value),
    safeParseFloat(document.getElementById("sgdi").value),
    safeParseFloat(document.getElementById("sgdj").value),
  ];
  let cwdValues = [
    safeParseFloat(document.getElementById("cwda").value),
    safeParseFloat(document.getElementById("cwdb").value),
    safeParseFloat(document.getElementById("cwdc").value),
    safeParseFloat(document.getElementById("cwdd").value),
    safeParseFloat(document.getElementById("cwde").value),
  ];
  let cwdvalues2 = [
    safeParseFloat(document.getElementById("cwdf").value),
    safeParseFloat(document.getElementById("cwdg").value),
    safeParseFloat(document.getElementById("cwdh").value),
    safeParseFloat(document.getElementById("cwdi").value),
    safeParseFloat(document.getElementById("cwdj").value),
  ];
  let aidcRates = [
    safeParseFloat(document.getElementById("taidcab").value),
    safeParseFloat(document.getElementById("taidcbb").value),
    safeParseFloat(document.getElementById("taidccb").value),
    safeParseFloat(document.getElementById("taidcdb").value),
    safeParseFloat(document.getElementById("taidceb").value),
  ];

  let addRates = [
    safeParseFloat(document.getElementById("tddac").value),
    safeParseFloat(document.getElementById("tddbc").value),
    safeParseFloat(document.getElementById("tddcc").value),
    safeParseFloat(document.getElementById("tdddc").value),
    safeParseFloat(document.getElementById("tddec").value),
  ];

  let igstRates = [
    safeParseFloat(document.getElementById("tigstad").value),
    safeParseFloat(document.getElementById("tigstbd").value),
    safeParseFloat(document.getElementById("tigstcd").value),
    safeParseFloat(document.getElementById("tigstdd").value),
    safeParseFloat(document.getElementById("tigsted").value),
  ];

  let intendedPeriods = [
    safeParseFloat(document.getElementById("aip").value),
    safeParseFloat(document.getElementById("bip").value),
    safeParseFloat(document.getElementById("cip").value),
    safeParseFloat(document.getElementById("dip").value),
    safeParseFloat(document.getElementById("eip").value),
  ];

  let cifValues2 = [
    safeParseFloat(document.getElementById("taaa2").value),
    safeParseFloat(document.getElementById("taba2").value),
    safeParseFloat(document.getElementById("taca2").value),
    safeParseFloat(document.getElementById("tada2").value),
    safeParseFloat(document.getElementById("taea2").value),
  ];

  let aidcRates2 = [
    safeParseFloat(document.getElementById("taidcab2").value),
    safeParseFloat(document.getElementById("taidcbb2").value),
    safeParseFloat(document.getElementById("taidccb2").value),
    safeParseFloat(document.getElementById("taidcdb2").value),
    safeParseFloat(document.getElementById("taidceb2").value),
  ];

  let addRates2 = [
    safeParseFloat(document.getElementById("tddac2").value),
    safeParseFloat(document.getElementById("tddbc2").value),
    safeParseFloat(document.getElementById("tddcc2").value),
    safeParseFloat(document.getElementById("tdddc2").value),
    safeParseFloat(document.getElementById("tddec2").value),
  ];

  let igstRates2 = [
    safeParseFloat(document.getElementById("tigstad2").value),
    safeParseFloat(document.getElementById("tigstbd2").value),
    safeParseFloat(document.getElementById("tigstcd2").value),
    safeParseFloat(document.getElementById("tigstdd2").value),
    safeParseFloat(document.getElementById("tigsted2").value),
  ];

  let customDuty = 0;
  let totalCIF = 0;
  let totalSavings = 0;
  let npv = 0;

  // Calculations for the first set of values
  for (let i = 0; i < 5; i++) {
    let bcdRate;
    if (document.querySelector(`#percentage-select${i}`).value == "others") {
      bcdRate = parseFloat(document.getElementById(`userInputrate${i}`).value);
      console.log("bcdRate", bcdRate);
    } else {
      bcdRate = safeParseFloat(
        document.querySelector(`#percentage-select${i}`).value
      );
      console.log("bcdRate", bcdRate);
    }
    if (bcdRate == NaN) {
      bcdRate = 0;
    }

    let BCD = cifValues[i] * (bcdRate / 100);
    let SWS = (BCD * 10) / 100;
    let AIDC = cifValues[i] * (aidcRates[i] / 100);
    let ADD = (addRates[i] / 100) * cifValues[i];
    let CWD = cwdValues[i];
    let SGD = sgdvalues[i];
    customDuty += BCD + SWS + AIDC + ADD + CWD + SGD;
    totalCIF += cifValues[i];
    console.log(
      "BCD , SWS , AIDC , ADD , CWD , SGD",
      BCD,
      SWS,
      AIDC,
      ADD,
      CWD,
      SGD
    );

    let tempCustomDuty = BCD + SWS + AIDC + ADD + CWD + SGD;
    // NPV calculation
    if (intendedPeriods[i] !== 0) {
      npv +=
        (tempCustomDuty /
          Math.pow(1 + rateOfInterest / 100, intendedPeriods[i])) *
        -1;
    }
    totalSavings += (igstRates[i] * (rateOfInterest / 100) * timeGap) / 365;
  }
  console.log("A) Custom Duty", customDuty);
  console.log("B) Total NPV", npv);
  console.log("C) Total Savings", totalSavings);

  // Raw material total duty calculation
  let customDuty2 = 0;
  for (let i = 0; i < 5; i++) {
    let bcdRate2;
    if (
      document.querySelector(`#percentage-select${i + 5}`).value == "others"
    ) {
      bcdRate2 = parseFloat(
        document.getElementById(`userInputrate${i + 5}`).value
      );
    } else {
      bcdRate2 = safeParseFloat(
        document.querySelector(`#percentage-select${i + 5}`).value
      );
    }
    if (bcdRate2 == NaN) {
      bcdRate2 = 0;
    }

    let BCD2 = cifValues2[i] * (bcdRate2 / 100);
    let SWS2 = (BCD2 * 10) / 100;
    let AIDC2 = cifValues2[i] * (aidcRates2[i] / 100);
    let ADD2 = (addRates2[i] / 100) * cifValues2[i];
    let CWD2 = cwdvalues2[i];
    let SGD2 = sgdvalues2[i];
    customDuty2 += BCD2 + SWS2 + AIDC2 + ADD2 + CWD2 + SGD2;
    console.log(
      "BCD2 + SWS2 + AIDC2 + ADD2 + CWD2 + SGD2",
      BCD2,
      SWS2,
      AIDC2,
      ADD2,
      CWD2,
      SGD2
    );
  }

  console.log("D) Raw Custom Duty", customDuty2);

  let E = 0;
  let totalBenifit2 = 0;
  let lastNPV2 = 0;
  let npv2;
  let tempRaw = customDuty2;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit2 =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv2 = totalBenifit2 / E;
    lastNPV2 += npv2;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }

  console.log("E) Raw NPV", lastNPV2);

  // IGST NPV calculation
  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < lifeCycle; j++) {
      totalBenifitigst =
        igstRates2[i] * (timeGap / 365) * (rateOfInterest / 100);
      Digst =
        Digst === 0
          ? safeParseFloat(rateOfInterest) / 100 + 1
          : Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
      npvigst = totalBenifitigst / Digst;
      lastNPVigst += npvigst;
      igstRates2[i] =
        igstRates2[i] * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
    }
  }
  console.log("E) Raw IGST ", lastNPVigst);

  // RoDTEP NPV calculation
  let Drodtep = 0;
  let totalBenifitrodtep = 0;
  let lastNPVrodtep = 0;

  for (let i = 0; i < lifeCycle; i++) {
    Drodtep =
      Drodtep === 0
        ? safeParseFloat(rateOfInterest) / 100 + 1
        : Drodtep * (safeParseFloat(rateOfInterest) / 100 + 1);
    totalBenifitrodtep = annualValueofRoDTEP / Drodtep;
    lastNPVrodtep += totalBenifitrodtep;
    annualValueofRoDTEP =
      annualValueofRoDTEP * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("Raw rodtep benifit", lastNPVrodtep);

  // AIR value NPV calculation
  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;

  for (let i = 0; i < lifeCycle; i++) {
    Dair =
      Dair === 0
        ? safeParseFloat(rateOfInterest) / 100 + 1
        : Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
    totalBenifitair = GrossAnnualValue / Dair;
    lastNPVrair += totalBenifitair;
    GrossAnnualValue =
      GrossAnnualValue * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("Raw AIR benifit", lastNPVrair);
  let totalBenifitRoDTEP = (lastNPVrodtep + lastNPVrair) * -1;
  console.log("G) Total Rodtep Benifit", totalBenifitRoDTEP);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * customDuty2;
  console.log("7) Fineshed Goods", finishedGoods);

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }

  console.log("H) Finnished Good", lastNPVF);

  customDutyofindi += customDuty;
  npvofindi += npv;
  totalSavingsofindi += totalSavings;
  lastNPV2ofindi += lastNPV2;
  lastNPVigstofindi += lastNPVigst;
  totalBenifitRoDTEPofindi += parseFloat(totalBenifitRoDTEP);
  lastNPVFofindi += lastNPVF;
  console.log("customDutyofindi", customDutyofindi);
  console.log("npvofindi", npvofindi);
  console.log("totalSavingsofindi", totalSavingsofindi);
  console.log("lastNPV2ofindi", lastNPV2ofindi);
  console.log("lastNPVigstofindi", lastNPVigstofindi);
  console.log("totalBenifitRoDTEPofindi", totalBenifitRoDTEPofindi);
  console.log("lastNPVFofindi", lastNPVFofindi);
  let totalExport = deemedExport + physicalExport;
  let totalDutytoBePaid = calculateDuty(totalCIF, totalExport, customDuty);
  console.log("totalCIF", totalCIF);
  console.log("totalExport", totalExport);
  console.log("customDuty", customDuty);
  console.log("totalDutytoBePaid", totalDutytoBePaid);

  if (domestic) {
    calculateIndiValue2();
  } else {
    // Final output logs
    updatePDFAndDownload(
      "Nov 2024",
      customDuty.toFixed(),
      npv.toFixed(),
      totalSavings.toFixed(),
      lastNPV2.toFixed(),
      lastNPVigst.toFixed(),
      parseFloat(totalBenifitRoDTEP).toFixed(),
      lastNPVF.toFixed(),
      (
        customDuty +
        npv +
        totalSavings +
        lastNPV2 +
        lastNPVigst +
        parseFloat(totalBenifitRoDTEP) +
        lastNPVF
      ).toFixed()
    );
  }
}
function firstCal2() {
  console.log("First Cal 2");
  let grossCIF = safeParseFloat(
    document.getElementById("Dfirst-left-input").value
  );
  let grossBCD = safeParseFloat(
    document.getElementById("Dfirst-right-input").value
  );
  let grossSGD = safeParseFloat(document.getElementById("Dsgd").value);
  let grossCWD = safeParseFloat(document.getElementById("Dcwd").value);
  let grossAIDC = safeParseFloat(
    document.getElementById("Dsecond-left-input").value
  );
  let grossADD = safeParseFloat(
    document.getElementById("Dsecond-right-input").value
  );
  let grossIGST = safeParseFloat(
    document.getElementById("Dthird-left-input").value
  );
  let grossIntendedPeriod = safeParseFloat(
    document.getElementById("Dthird-right-input").value
  );
  let grossDisposal = document.getElementById("Dfourth-left-input").value;

  let GrossSWS = safeParseFloat(
    parseFloat((safeParseFloat(grossBCD) * 10) / 100)
  );

  let grossCIF2 = safeParseFloat(
    document.getElementById("Dfirst-left-input2").value
  );
  let grossBCD2 = safeParseFloat(
    document.getElementById("Dfirst-right-input2").value
  );
  let grossSGD2 = safeParseFloat(document.getElementById("Dsgd2").value);
  let grossCWD2 = safeParseFloat(document.getElementById("Dcwd2").value);
  let grossAIDC2 = safeParseFloat(
    document.getElementById("Dsecond-left-input2").value
  );
  let grossADD2 = safeParseFloat(
    document.getElementById("Dsecond-right-input2").value
  );
  let grossIGST2 = safeParseFloat(
    document.getElementById("Dthird-left-input2").value
  );
  let GrossSWS2 = parseFloat((safeParseFloat(grossBCD2) * 10) / 100);

  console.log("grossCIF", grossCIF);
  console.log("grossBCD", grossBCD);
  console.log("grossSGD", grossSGD);
  console.log("grossCWD", grossCWD);
  console.log("grossAIDC", grossAIDC);
  console.log("grossADD", grossADD);
  console.log("grossIGST", grossIGST);
  console.log("grossIntendedPeriod", grossIntendedPeriod);
  console.log("grossDisposal", grossDisposal);
  console.log("GrossSWS", GrossSWS);

  let totalDuty =
    safeParseFloat(GrossSWS) +
    safeParseFloat(grossBCD) +
    safeParseFloat(grossADD) +
    safeParseFloat(grossAIDC) +
    safeParseFloat(grossSGD) +
    safeParseFloat(grossCWD);
  console.log("1) totalDuty", totalDuty);
  let totalNVP;
  if (grossDisposal === "Sale in DTA") {
    totalNVP =
      (totalDuty /
        Math.pow(
          1 + safeParseFloat(rateOfInterest) / 100,
          safeParseFloat(grossIntendedPeriod)
        )) *
      -1;
  } else {
    totalNVP = 0;
  }
  console.log("2) Total NPV ", totalNVP);

  let totalSavings =
    safeParseFloat(grossIGST) *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(timeGap) / 365);
  console.log("3) total Savings", totalSavings);
  let RawTotalDuty =
    safeParseFloat(grossBCD2) +
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossADD2) +
    safeParseFloat(grossSGD2) +
    safeParseFloat(grossCWD2);
  console.log("4) Total", RawTotalDuty);

  console.log("GrossSWS", GrossSWS2);
  console.log("grossCWD", grossCWD2);
  console.log("grossBCD", grossBCD2);
  console.log("grossSGD", grossSGD2);
  console.log("grossAIDC", grossAIDC2);
  console.log("grossADD", grossADD2);

  let E = 0;
  let totalBenifit = 0;
  let lastNPV = 0;
  let npv;
  let tempRaw = RawTotalDuty;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv = totalBenifit / E;
    lastNPV += npv;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("4) Raw NPV: ", lastNPV);

  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifitigst =
      safeParseFloat(grossIGST2) *
      (parseFloat(safeParseFloat(timeGap)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (Digst == 0) {
      Digst = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Digst = Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    npvigst = totalBenifitigst / Digst;
    lastNPVigst += npvigst;
    grossIGST2 = grossIGST2 * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("5) IGST", lastNPVigst);

  // let Drodtep = 0;
  // let totalBenifitrodtep = 0;
  // let lastNPVrodtep = 0;

  // for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
  //   if (Drodtep == 0) {
  //     Drodtep = safeParseFloat(rateOfInterest) / 100 + 1;
  //   } else {
  //     Drodtep = Drodtep * (safeParseFloat(rateOfInterest) / 100 + 1);
  //   }
  //   totalBenifitrodtep =
  //     safeParseFloat(annualValueofRoDTEP) / safeParseFloat(Drodtep);
  //   lastNPVrodtep += totalBenifitrodtep;
  //   annualValueofRoDTEP =
  //     safeParseFloat(annualValueofRoDTEP) *
  //     (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  // }
  // console.log("RoDTep Banifit", lastNPVrodtep);

  // let Dair = 0;
  // let totalBenifitair = 0;
  // let lastNPVrair = 0;
  // let npvair;
  // for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
  //   if (Dair == 0) {
  //     Dair = safeParseFloat(rateOfInterest) / 100 + 1;
  //   } else {
  //     Dair = Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
  //   }
  //   totalBenifitair = safeParseFloat(GrossAnnualValue) / Dair;
  //   npvair = totalBenifitair / Dair;
  //   lastNPVrair += totalBenifitair;
  //   GrossAnnualValue =
  //     safeParseFloat(GrossAnnualValue) *
  //     (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  // }
  // console.log("All indsty rate", lastNPVrair);
  // let totalBenifitRoDTEP = (lastNPVrodtep + lastNPVrair) * -1;
  // console.log("6) TotalBenifitRoDTEP", totalBenifitRoDTEP);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * RawTotalDuty;
  console.log("7) Fineshed Goods", finishedGoods);

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("8) Last Fineshed good", lastNPVF);
  totalDutyofcap += totalDuty;
  totalNVPofcap += totalNVP;
  totalSavingsofcap += totalSavings;
  lastNPVofcap += lastNPV;
  lastNPVigstofcap += lastNPVigst;
  // totalBenifitRoDTEPofcap += parseFloat(totalBenifitRoDTEP);
  lastNPVFofcap += lastNPVF;

  console.log("totalDutyofcap", totalDutyofcap);
  console.log("totalNVPofcap", totalNVPofcap);
  console.log("totalSavingsofcap", totalSavingsofcap);
  console.log("lastNPVofcap", lastNPVofcap);
  console.log("lastNPVigstofcap", lastNPVigstofcap);
  console.log("totalBenifitRoDTEPofcap", totalBenifitRoDTEPofcap);
  console.log("lastNPVFofcap", lastNPVFofcap);

  updatePDFAndDownload(
    "Nov 2024",
    totalDutyofcap.toFixed(),
    totalNVPofcap.toFixed(),
    totalSavingsofcap.toFixed(),
    lastNPVofcap.toFixed(),
    lastNPVigstofcap.toFixed(),
    parseFloat(totalBenifitRoDTEPofcap).toFixed(),
    lastNPVFofcap.toFixed(),
    (
      totalDutyofcap +
      totalNVPofcap +
      totalSavingsofcap +
      lastNPVofcap +
      lastNPVigstofcap +
      parseFloat(totalBenifitRoDTEPofcap) +
      lastNPVFofcap
    ).toFixed()
  );
}
function calculateIndiValue2() {
  // Getting input values
  console.log("calculateIndiValue2");

  // Arrays for input values
  let cifValues = [
    safeParseFloat(document.getElementById("taaa1").value),
    safeParseFloat(document.getElementById("taba2").value),
    safeParseFloat(document.getElementById("taca3").value),
    safeParseFloat(document.getElementById("tada4").value),
    safeParseFloat(document.getElementById("taea5").value),
  ];
  let sgdvalues = [
    safeParseFloat(document.getElementById("sgda1").value),
    safeParseFloat(document.getElementById("sgdb2").value),
    safeParseFloat(document.getElementById("sgdc3").value),
    safeParseFloat(document.getElementById("sgdd4").value),
    safeParseFloat(document.getElementById("sgde5").value),
  ];
  let sgdvalues2 = [
    safeParseFloat(document.getElementById("sgdf6").value),
    safeParseFloat(document.getElementById("sgdg7").value),
    safeParseFloat(document.getElementById("sgdh8").value),
    safeParseFloat(document.getElementById("sgdi9").value),
    safeParseFloat(document.getElementById("sgdj0").value),
  ];
  let cwdValues = [
    safeParseFloat(document.getElementById("cwda1").value),
    safeParseFloat(document.getElementById("cwdb2").value),
    safeParseFloat(document.getElementById("cwdc3").value),
    safeParseFloat(document.getElementById("cwdd4").value),
    safeParseFloat(document.getElementById("cwde5").value),
  ];
  let cwdvalues2 = [
    safeParseFloat(document.getElementById("cwdf6").value),
    safeParseFloat(document.getElementById("cwdg7").value),
    safeParseFloat(document.getElementById("cwdh8").value),
    safeParseFloat(document.getElementById("cwdi9").value),
    safeParseFloat(document.getElementById("cwdj0").value),
  ];
  let aidcRates = [
    safeParseFloat(document.getElementById("taidcab1").value),
    safeParseFloat(document.getElementById("taidcbb2").value),
    safeParseFloat(document.getElementById("taidccb3").value),
    safeParseFloat(document.getElementById("taidcdb4").value),
    safeParseFloat(document.getElementById("taidceb5").value),
  ];

  let addRates = [
    safeParseFloat(document.getElementById("tddac1").value),
    safeParseFloat(document.getElementById("tddbc2").value),
    safeParseFloat(document.getElementById("tddcc3").value),
    safeParseFloat(document.getElementById("tdddc4").value),
    safeParseFloat(document.getElementById("tddec5").value),
  ];

  let igstRates = [
    safeParseFloat(document.getElementById("tigstad1").value),
    safeParseFloat(document.getElementById("tigstbd2").value),
    safeParseFloat(document.getElementById("tigstcd3").value),
    safeParseFloat(document.getElementById("tigstdd4").value),
    safeParseFloat(document.getElementById("tigsted5").value),
  ];

  let intendedPeriods = [
    safeParseFloat(document.getElementById("fip").value),
    safeParseFloat(document.getElementById("gip").value),
    safeParseFloat(document.getElementById("jip").value),
    safeParseFloat(document.getElementById("iip").value),
    safeParseFloat(document.getElementById("jip").value),
  ];

  let cifValues2 = [
    safeParseFloat(document.getElementById("taaa26").value),
    safeParseFloat(document.getElementById("taba27").value),
    safeParseFloat(document.getElementById("taca28").value),
    safeParseFloat(document.getElementById("tada29").value),
    safeParseFloat(document.getElementById("taea20").value),
  ];

  let aidcRates2 = [
    safeParseFloat(document.getElementById("taidcab26").value),
    safeParseFloat(document.getElementById("taidcbb27").value),
    safeParseFloat(document.getElementById("taidccb28").value),
    safeParseFloat(document.getElementById("taidcdb29").value),
    safeParseFloat(document.getElementById("taidceb20").value),
  ];

  let addRates2 = [
    safeParseFloat(document.getElementById("tddac26").value),
    safeParseFloat(document.getElementById("tddbc27").value),
    safeParseFloat(document.getElementById("tddcc28").value),
    safeParseFloat(document.getElementById("tdddc29").value),
    safeParseFloat(document.getElementById("tddec20").value),
  ];

  let igstRates2 = [
    safeParseFloat(document.getElementById("tigstad26").value),
    safeParseFloat(document.getElementById("tigstbd27").value),
    safeParseFloat(document.getElementById("tigstcd28").value),
    safeParseFloat(document.getElementById("tigstdd29").value),
    safeParseFloat(document.getElementById("tigsted20").value),
  ];
  let exportSales = safeParseFloat(
    document.getElementById("export-sales").value
  );
  let domesticSales = safeParseFloat(
    document.getElementById("domestic-sales").value
  );

  let customDuty = 0;
  let totalSavings = 0;
  let npv = 0;

  // Calculations for the first set of values
  for (let i = 0; i < 5; i++) {
    let bcdRate;
    if (
      document.querySelector(`#percentage-select${i}${i}`).value == "others"
    ) {
      bcdRate = parseFloat(
        document.getElementById(`userInputrate${i}${i}`).value
      );
      console.log("userInputrate", bcdRate);
    } else {
      bcdRate = safeParseFloat(
        document.querySelector(`#percentage-select${i}${i}`).value
      );
      console.log("userInputrate", bcdRate);
    }
    if (bcdRate == NaN) {
      bcdRate = 0;
    }
    let BCD = cifValues[i] * (bcdRate / 100);
    let SWS = (BCD * 10) / 100;
    let AIDC = cifValues[i] * (aidcRates[i] / 100);
    let ADD = (addRates[i] / 100) * cifValues[i];
    let CWD = cwdValues[i];
    let SGD = sgdvalues[i];

    console.log(
      "BCD , SWS , AIDC , ADD , CWD , SGD",
      BCD,
      SWS,
      AIDC,
      ADD,
      CWD,
      SGD
    );
    customDuty += BCD + SWS + AIDC + ADD + CWD + SGD;
    let tempCustomDuty = BCD + SWS + AIDC + ADD + CWD + SGD;
    // NPV calculation
    if (intendedPeriods[i] !== 0) {
      npv +=
        (tempCustomDuty /
          Math.pow(1 + rateOfInterest / 100, intendedPeriods[i])) *
        -1;
    }
    totalSavings += (igstRates[i] * (rateOfInterest / 100) * timeGap) / 365;
  }
  console.log("A) Custom Duty", customDuty);
  console.log("B) Total NPV", npv);
  console.log("C) Total Savings", totalSavings);

  // Raw material total duty calculation
  let customDuty2 = 0;
  for (let i = 0; i < 5; i++) {
    let bcdRate2;
    if (
      document.querySelector(`#percentage-select${i + 5}${i + 5}`).value ==
      "others"
    ) {
      bcdRate2 = parseFloat(
        document.getElementById(`userInputrate${i + 5}${i + 5}`).value
      );
      console.log("bcdRate2: ", bcdRate2);
    } else {
      bcdRate2 = safeParseFloat(
        document.querySelector(`#percentage-select${i + 5}${i + 5}`).value
      );
      console.log("bcdRate2: ", bcdRate2);
    }
    if (bcdRate2 == NaN) {
      bcdRate2 = 0;
    }

    let BCD2 = cifValues2[i] * (bcdRate2 / 100);
    let SWS2 = (BCD2 * 10) / 100;
    let AIDC2 = cifValues2[i] * (aidcRates2[i] / 100);
    let ADD2 = (addRates2[i] / 100) * cifValues2[i];
    let CWD2 = cwdvalues2[i];
    let SGD2 = sgdvalues2[i];
    customDuty2 += BCD2 + SWS2 + AIDC2 + ADD2 + CWD2 + SGD2;
    console.log(
      "BCD2 + SWS2 + AIDC2 + ADD2 + CWD2 + SGD2",
      BCD2,
      SWS2,
      AIDC2,
      ADD2,
      CWD2,
      SGD2
    );
  }

  console.log("D) Raw Custom Duty", customDuty2);

  let E = 0;
  let totalBenifit2 = 0;
  let lastNPV2 = 0;
  let npv2;
  let tempRaw = customDuty2;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit2 =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv2 = totalBenifit2 / E;
    lastNPV2 += npv2;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }

  console.log("E) Raw NPV", lastNPV2);

  // IGST NPV calculation
  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < lifeCycle; j++) {
      totalBenifitigst =
        igstRates2[i] * (timeGap / 365) * (rateOfInterest / 100);
      Digst =
        Digst === 0
          ? safeParseFloat(rateOfInterest) / 100 + 1
          : Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
      npvigst = totalBenifitigst / Digst;
      lastNPVigst += npvigst;
      igstRates2[i] =
        igstRates2[i] * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
    }
  }
  console.log("E) Raw IGST ", lastNPVigst);

  // RoDTEP NPV calculation
  let Drodtep = 0;
  let totalBenifitrodtep = 0;
  let lastNPVrodtep = 0;

  for (let i = 0; i < lifeCycle; i++) {
    Drodtep =
      Drodtep === 0
        ? safeParseFloat(rateOfInterest) / 100 + 1
        : Drodtep * (safeParseFloat(rateOfInterest) / 100 + 1);
    totalBenifitrodtep = annualValueofRoDTEP / Drodtep;
    lastNPVrodtep += totalBenifitrodtep;
    annualValueofRoDTEP =
      annualValueofRoDTEP * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("Raw rodtep benifit", lastNPVrodtep);

  // AIR value NPV calculation
  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;

  for (let i = 0; i < lifeCycle; i++) {
    Dair =
      Dair === 0
        ? safeParseFloat(rateOfInterest) / 100 + 1
        : Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
    totalBenifitair = GrossAnnualValue / Dair;
    lastNPVrair += totalBenifitair;
    GrossAnnualValue =
      GrossAnnualValue * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("Raw AIR benifit", lastNPVrair);
  let totalBenifitRoDTEP = (lastNPVrodtep + lastNPVrair) * -1;
  console.log("G) Total Rodtep Benifit", totalBenifitRoDTEP);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * customDuty2;
  console.log("7) Fineshed Goods", finishedGoods);

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }

  console.log("H) Finnished Good", lastNPVF);

  customDutyofindi += customDuty;
  npvofindi += npv;
  totalSavingsofindi += totalSavings;
  lastNPV2ofindi += lastNPV2;
  lastNPVigstofindi += lastNPVigst;
  totalBenifitRoDTEPofindi += parseFloat(totalBenifitRoDTEP);
  lastNPVFofindi += lastNPVF;

  console.log("customDutyofindi", customDutyofindi);
  console.log("npvofindi", npvofindi);
  console.log("totalSavingsofindi", totalSavingsofindi);
  console.log("lastNPV2ofindi", lastNPV2ofindi);
  console.log("lastNPVigstofindi", lastNPVigstofindi);
  console.log("totalBenifitRoDTEPofindi", totalBenifitRoDTEPofindi);
  console.log("lastNPVFofindi", lastNPVFofindi);

  updatePDFAndDownload(
    "Nov 2024",
    customDutyofindi.toFixed(),
    npvofindi.toFixed(),
    totalSavingsofindi.toFixed(),
    lastNPV2ofindi.toFixed(),
    lastNPVigstofindi.toFixed(),
    parseFloat(totalBenifitRoDTEPofindi).toFixed(),
    lastNPVFofindi.toFixed(),
    (
      customDutyofindi +
      npvofindi +
      totalSavingsofindi +
      lastNPV2ofindi +
      lastNPVigstofindi +
      parseFloat(totalBenifitRoDTEPofindi) +
      lastNPVFofindi
    ).toFixed()
  );
}

function SEZGross() {
  // cap materials 
  let totalDuty =
    safeParseFloat(GrossSWS) +
    safeParseFloat(grossBCD) +
    safeParseFloat(grossADD) +
    safeParseFloat(grossAIDC) +
    safeParseFloat(grossSGD) +
    safeParseFloat(grossCWD);
  console.log("1) total Duty", totalDuty);

  let totalSavings =
    safeParseFloat(grossIGST) *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(timeGap) / 365);
  console.log("2) total Savings in IGST", totalSavings);

  // Raw Material 
  let RawTotalDuty =
    safeParseFloat(grossBCD2) +
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossADD2) +
    safeParseFloat(grossSGD2) +
    safeParseFloat(grossCWD2);
  let E = 0;
  let totalBenifit = 0;
  let lastNPV = 0;
  let npv;
  let tempRaw = RawTotalDuty;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv = totalBenifit / E;
    lastNPV += npv;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("1) Raw NPV: ", lastNPV);

  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifitigst =
      safeParseFloat(grossIGST2) *
      (parseFloat(safeParseFloat(timeGap)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (Digst == 0) {
      Digst = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Digst = Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    npvigst = totalBenifitigst / Digst;
    lastNPVigst += npvigst;
    grossIGST2 = grossIGST2 * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("2) IGST", lastNPVigst);

  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;
  let npvair;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (Dair == 0) {
      Dair = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Dair = Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    totalBenifitair = safeParseFloat(GrossAnnualValue) / Dair;
    npvair = totalBenifitair / Dair;
    lastNPVrair += totalBenifitair;
    GrossAnnualValue =
      safeParseFloat(GrossAnnualValue) *
      (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("3) All indsty rate", lastNPVrair);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * RawTotalDuty;
  console.log("finished goods: " + finishedGoods)
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("4) Last Fineshed good", lastNPVF);

  let domesticValueOfProcurement  = domesticProcurement * 1.5;
  console.log("5) domesticValueOfProcurement", domesticValueOfProcurement)
}
function SEZindi(){
  // Arrays for input values
  let procuredValues = [
    safeParseFloat(document.getElementById("procured1").value),
    safeParseFloat(document.getElementById("procured2").value),
    safeParseFloat(document.getElementById("procured3").value),
    safeParseFloat(document.getElementById("procured4").value),
    safeParseFloat(document.getElementById("procured5").value),
  ];
  let procuredValues2 = [
    safeParseFloat(document.getElementById("procured6").value),
    safeParseFloat(document.getElementById("procured7").value),
    safeParseFloat(document.getElementById("procured8").value),
    safeParseFloat(document.getElementById("procured9").value),
    safeParseFloat(document.getElementById("procured10").value),
  ];
  let cifValues = [
    safeParseFloat(document.getElementById("taaa").value),
    safeParseFloat(document.getElementById("taba").value),
    safeParseFloat(document.getElementById("taca").value),
    safeParseFloat(document.getElementById("tada").value),
    safeParseFloat(document.getElementById("taea").value),
  ];
  let sgdvalues = [
    safeParseFloat(document.getElementById("sgda").value),
    safeParseFloat(document.getElementById("sgdb").value),
    safeParseFloat(document.getElementById("sgdc").value),
    safeParseFloat(document.getElementById("sgdd").value),
    safeParseFloat(document.getElementById("sgde").value),
  ];
  let sgdvalues2 = [
    safeParseFloat(document.getElementById("sgdf").value),
    safeParseFloat(document.getElementById("sgdg").value),
    safeParseFloat(document.getElementById("sgdh").value),
    safeParseFloat(document.getElementById("sgdi").value),
    safeParseFloat(document.getElementById("sgdj").value),
  ];
  let cwdValues = [
    safeParseFloat(document.getElementById("cwda").value),
    safeParseFloat(document.getElementById("cwdb").value),
    safeParseFloat(document.getElementById("cwdc").value),
    safeParseFloat(document.getElementById("cwdd").value),
    safeParseFloat(document.getElementById("cwde").value),
  ];
  let cwdvalues2 = [
    safeParseFloat(document.getElementById("cwdf").value),
    safeParseFloat(document.getElementById("cwdg").value),
    safeParseFloat(document.getElementById("cwdh").value),
    safeParseFloat(document.getElementById("cwdi").value),
    safeParseFloat(document.getElementById("cwdj").value),
  ];
  let aidcRates = [
    safeParseFloat(document.getElementById("taidcab").value),
    safeParseFloat(document.getElementById("taidcbb").value),
    safeParseFloat(document.getElementById("taidccb").value),
    safeParseFloat(document.getElementById("taidcdb").value),
    safeParseFloat(document.getElementById("taidceb").value),
  ];

  let addRates = [
    safeParseFloat(document.getElementById("tddac").value),
    safeParseFloat(document.getElementById("tddbc").value),
    safeParseFloat(document.getElementById("tddcc").value),
    safeParseFloat(document.getElementById("tdddc").value),
    safeParseFloat(document.getElementById("tddec").value),
  ];

  let igstRates = [
    safeParseFloat(document.getElementById("tigstad").value),
    safeParseFloat(document.getElementById("tigstbd").value),
    safeParseFloat(document.getElementById("tigstcd").value),
    safeParseFloat(document.getElementById("tigstdd").value),
    safeParseFloat(document.getElementById("tigsted").value),
  ];

  let intendedPeriods = [
    safeParseFloat(document.getElementById("aip").value),
    safeParseFloat(document.getElementById("bip").value),
    safeParseFloat(document.getElementById("cip").value),
    safeParseFloat(document.getElementById("dip").value),
    safeParseFloat(document.getElementById("eip").value),
  ];

  let cifValues2 = [
    safeParseFloat(document.getElementById("taaa2").value),
    safeParseFloat(document.getElementById("taba2").value),
    safeParseFloat(document.getElementById("taca2").value),
    safeParseFloat(document.getElementById("tada2").value),
    safeParseFloat(document.getElementById("taea2").value),
  ];

  let aidcRates2 = [
    safeParseFloat(document.getElementById("taidcab2").value),
    safeParseFloat(document.getElementById("taidcbb2").value),
    safeParseFloat(document.getElementById("taidccb2").value),
    safeParseFloat(document.getElementById("taidcdb2").value),
    safeParseFloat(document.getElementById("taidceb2").value),
  ];

  let addRates2 = [
    safeParseFloat(document.getElementById("tddac2").value),
    safeParseFloat(document.getElementById("tddbc2").value),
    safeParseFloat(document.getElementById("tddcc2").value),
    safeParseFloat(document.getElementById("tdddc2").value),
    safeParseFloat(document.getElementById("tddec2").value),
  ];

  let igstRates2 = [
    safeParseFloat(document.getElementById("tigstad2").value),
    safeParseFloat(document.getElementById("tigstbd2").value),
    safeParseFloat(document.getElementById("tigstcd2").value),
    safeParseFloat(document.getElementById("tigstdd2").value),
    safeParseFloat(document.getElementById("tigsted2").value),
  ];
  let customDuty = 0;
  let totalCIF = 0;
  let totalSavings = 0;

  for (let i = 0; i < 5; i++) {
    let bcdRate;
    if (document.querySelector(`#percentage-select${i}`).value == "others") {
      bcdRate = parseFloat(document.getElementById(`userInputrate${i}`).value);
      console.log("bcdRate", bcdRate);
    } else {
      bcdRate = safeParseFloat(
        document.querySelector(`#percentage-select${i}`).value
      );
      console.log("bcdRate", bcdRate);
    }
    if (bcdRate == NaN) {
      bcdRate = 0;
    }

    let BCD = cifValues[i] * (bcdRate / 100);
    let SWS = (BCD * 10) / 100;
    let AIDC = cifValues[i] * (aidcRates[i] / 100);
    let ADD = (addRates[i] / 100) * cifValues[i];
    let CWD = cwdValues[i];
    let SGD = sgdvalues[i];
    customDuty += BCD + SWS + AIDC + ADD + CWD + SGD;
    totalCIF += cifValues[i];
    console.log(
      "BCD , SWS , AIDC , ADD , CWD , SGD",
      BCD,
      SWS,
      AIDC,
      ADD,
      CWD,
      SGD
    );

    totalSavings += (igstRates[i] * (rateOfInterest / 100) * timeGap) / 365;
  }
  console.log("A) Custom Duty", customDuty);
  console.log("B) Total Savings", totalSavings);

    // Raw material total duty calculation
    let customDuty2 = 0;
    for (let i = 0; i < 5; i++) {
      let bcdRate2;
      if (
        document.querySelector(`#percentage-select${i + 5}`).value == "others"
      ) {
        bcdRate2 = parseFloat(
          document.getElementById(`userInputrate${i + 5}`).value
        );
      } else {
        bcdRate2 = safeParseFloat(
          document.querySelector(`#percentage-select${i + 5}`).value
        );
      }
      if (bcdRate2 == NaN) {
        bcdRate2 = 0;
      }
  
      let BCD2 = cifValues2[i] * (bcdRate2 / 100);
      let SWS2 = (BCD2 * 10) / 100;
      let AIDC2 = cifValues2[i] * (aidcRates2[i] / 100);
      let ADD2 = (addRates2[i] / 100) * cifValues2[i];
      let CWD2 = cwdvalues2[i];
      let SGD2 = sgdvalues2[i];
      customDuty2 += BCD2 + SWS2 + AIDC2 + ADD2 + CWD2 + SGD2;
      console.log(
        "BCD2 + SWS2 + AIDC2 + ADD2 + CWD2 + SGD2",
        BCD2,
        SWS2,
        AIDC2,
        ADD2,
        CWD2,
        SGD2
      );
    }
    console.log("D) Raw Custom Duty", customDuty2);
    let E = 0;
  let totalBenifit2 = 0;
  let lastNPV2 = 0;
  let npv2;
  let tempRaw = customDuty2;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit2 =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv2 = totalBenifit2 / E;
    lastNPV2 += npv2;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }

  console.log("E) Raw NPV", lastNPV2);

  // IGST NPV calculation
  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < lifeCycle; j++) {
      totalBenifitigst =
        igstRates2[i] * (timeGap / 365) * (rateOfInterest / 100);
      Digst =
        Digst === 0
          ? safeParseFloat(rateOfInterest) / 100 + 1
          : Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
      npvigst = totalBenifitigst / Digst;
      lastNPVigst += npvigst;
      igstRates2[i] =
        igstRates2[i] * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
    }
  }
  console.log("E) Raw IGST ", lastNPVigst);

   // AIR value NPV calculation
   let Dair = 0;
   let totalBenifitair = 0;
   let lastNPVrair = 0;
 
   for (let i = 0; i < lifeCycle; i++) {
     Dair =
       Dair === 0
         ? safeParseFloat(rateOfInterest) / 100 + 1
         : Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
     totalBenifitair = GrossAnnualValue / Dair;
     lastNPVrair += totalBenifitair;
     GrossAnnualValue =
       GrossAnnualValue * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
   }
   console.log("Raw AIR benifit", lastNPVrair);
   let DF = 0;
   let finishedGoods = 0;
   let lastNPVF = 0;
   let npvF;
   finishedGoods = (exportSales / (domesticSales + exportSales)) * customDuty2;
   console.log("7) Fineshed Goods", finishedGoods);
 
   for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
     if (DF == 0) {
       DF = 1;
     } else {
       DF = DF * 1.09;
     }
     npvF = finishedGoods / DF;
     lastNPVF += npvF;
     finishedGoods =
       finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
   }
 
   console.log("H) Finnished Good", lastNPVF);

   let valueOfProcured = 0;
   for(let i = 0; i<5;i++){
    console.log("value of procurement:",procuredValues[i]);
    console.log("value of procurement2",procuredValues2[i]);
    valueOfProcured +=(procuredValues[i] * 1.5)+(procuredValues2[i] * 1.5)
   }
   console.log("Value of Total Procured:",valueOfProcured);
}
function EPCGAA() {
  // cap materials 
  let totalDuty =
    safeParseFloat(GrossSWS) +
    safeParseFloat(grossBCD) +
    safeParseFloat(grossADD) +
    safeParseFloat(grossAIDC) +
    safeParseFloat(grossSGD) +
    safeParseFloat(grossCWD);
  let totalDuty2 =
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossBCD2) +
    safeParseFloat(grossADD2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossSGD2) +
    safeParseFloat(grossCWD2);
  console.log("1) total Duty", totalDuty);

  console.log("2) domesticValueOfProcurement", totalDuty2)

  let totalSavings =
    safeParseFloat(grossIGST) *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(timeGap) / 365);
  console.log("3) total Savings in IGST", totalSavings);

  // Raw Material 
  let RawTotalDuty =
    safeParseFloat(grossBCD2) +
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossADD2) +
    safeParseFloat(grossSGD2) +
    safeParseFloat(grossCWD2);

  let E = 0;
  let totalBenifit = 0;
  let lastNPV = 0;
  let npv;
  let tempRaw = RawTotalDuty;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv = totalBenifit / E;
    lastNPV += npv;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("1) Raw NPV: ", lastNPV);

  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifitigst =
      safeParseFloat(grossIGST2) *
      (parseFloat(safeParseFloat(timeGap)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (Digst == 0) {
      Digst = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Digst = Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    npvigst = totalBenifitigst / Digst;
    lastNPVigst += npvigst;
    grossIGST2 = grossIGST2 * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("2) IGST", lastNPVigst);

  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;
  let npvair;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (Dair == 0) {
      Dair = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Dair = Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    totalBenifitair = safeParseFloat(GrossAnnualValue) / Dair;
    npvair = totalBenifitair / Dair;
    lastNPVrair += totalBenifitair;
    GrossAnnualValue =
      safeParseFloat(GrossAnnualValue) *
      (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("3) All indsty rate", lastNPVrair);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * RawTotalDuty;
  console.log("finished goods: " + finishedGoods)
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("4) Last Fineshed good", lastNPVF);

  
}
function EPCGBR() {
  // cap materials 
  let totalDuty =
    safeParseFloat(GrossSWS) +
    safeParseFloat(grossBCD) +
    safeParseFloat(grossADD) +
    safeParseFloat(grossAIDC) +
    safeParseFloat(grossSGD) +
    safeParseFloat(grossCWD);
  console.log("1) total Duty", totalDuty);

  let domesticValueOfProcurement  =((domesticProcurement * 1.5) + (domesticProcurement * 1.5))
  console.log("2) domesticValueOfProcurement", domesticValueOfProcurement)
  let totalSavings =
    safeParseFloat(grossIGST) *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(timeGap) / 365);
  console.log("3) total Savings in IGST", totalSavings);

  // Raw Material 
  let RawTotalDuty =
    safeParseFloat(grossBCD2) +
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossADD2) +
    safeParseFloat(grossSGD2) +
    safeParseFloat(grossCWD2);
  let E = 0;
  let totalBenifit = 0;
  let lastNPV = 0;
  let npv;
  let tempRaw = RawTotalDuty;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifit =
      tempRaw *
      (parseFloat(safeParseFloat(conversionOfRaw)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (E == 0) {
      E = safeParseFloat(rateOfInterest) / 100 + 1;
      console.log("E1", E);
    } else {
      console.log("e BEFORE ", E);
      E = E * (safeParseFloat(rateOfInterest) / 100 + 1);
      console.log("D2", E);
      console.log("rateOfInterest", rateOfInterest);
    }
    npv = totalBenifit / E;
    lastNPV += npv;
    tempRaw = tempRaw * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("1) Raw NPV: ", lastNPV);

  let Digst = 0;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    totalBenifitigst =
      safeParseFloat(grossIGST2) *
      (parseFloat(safeParseFloat(timeGap)) / 365) *
      (parseFloat(safeParseFloat(rateOfInterest)) / 100);
    if (Digst == 0) {
      Digst = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Digst = Digst * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    npvigst = totalBenifitigst / Digst;
    lastNPVigst += npvigst;
    grossIGST2 = grossIGST2 * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("2) IGST", lastNPVigst);

  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;
  let npvair;
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (Dair == 0) {
      Dair = safeParseFloat(rateOfInterest) / 100 + 1;
    } else {
      Dair = Dair * (safeParseFloat(rateOfInterest) / 100 + 1);
    }
    totalBenifitair = safeParseFloat(GrossAnnualValue) / Dair;
    npvair = totalBenifitair / Dair;
    lastNPVrair += totalBenifitair;
    GrossAnnualValue =
      safeParseFloat(GrossAnnualValue) *
      (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("3) All indsty rate", lastNPVrair);

  let DF = 0;
  let finishedGoods = 0;
  let lastNPVF = 0;
  let npvF;
  finishedGoods = (exportSales / (domesticSales + exportSales)) * RawTotalDuty;
  console.log("finished goods: " + finishedGoods)
  for (let i = 0; i < parseFloat(safeParseFloat(lifeCycle)); i++) {
    if (DF == 0) {
      DF = 1;
    } else {
      DF = DF * 1.09;
    }
    npvF = finishedGoods / DF;
    lastNPVF += npvF;
    finishedGoods =
      finishedGoods * (safeParseFloat(ExpectedAnnualGrowth) / 100 + 1);
  }
  console.log("4) Last Fineshed good", lastNPVF);

  
}
async function updatePDFAndDownload(
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8
) {
  console.log("value8", value8);
  console.log(
    value0,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8
  );
  let url;
  if (value8 >= 0) {
    url = "https://hackyvirus.github.io/MOOWR-BETA-VERSION/Profit.pdf";
  } else {
    url = "https://hackyvirus.github.io/MOOWR-BETA-VERSION/Loss.pdf";
  }

  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

  const zero = pdfDoc.getPages()[0];
  const firstPage = pdfDoc.getPages()[1];

  zero.drawText(value0.toString(), {
    x: 60,
    y: 590,
    size: 24,
    color: PDFLib.rgb(1, 0, 0),
  });

  firstPage.drawText(formatNumberPDF(value1).toString(), {
    x: 437,
    y: 674,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value2).toString(), {
    x: 437,
    y: 655,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value3).toString(), {
    x: 437,
    y: 635,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value4).toString(), {
    x: 437,
    y: 600,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value5).toString(), {
    x: 437,
    y: 582,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value6).toString(), {
    x: 437,
    y: 563,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value7).toString(), {
    x: 437,
    y: 544,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(formatNumberPDF(value8).toString(), {
    x: 437,
    y: 524,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  const pdfUrl = URL.createObjectURL(
    new Blob([pdfBytes], { type: "application/pdf" })
  );

  let previewContainer;

  document.querySelector(".preview-container").style.display = "block";
  previewContainer = document.querySelector(".preview-container");

  previewContainer.innerHTML = `<embed src="${pdfUrl}" width="100%" height="100%" type="application/pdf">`;

  document.getElementById("download-report").style.display = "block";

  document
    .getElementById("download-report")
    .addEventListener("click", function () {
      document.getElementById("custom-feedback-modal").style.display = "block";
    });

  document.getElementById("skip").addEventListener("click", function () {
    document.getElementById("custom-feedback-modal").style.display = "none";
    downloadPDF(pdfUrl);
  });
  document
    .getElementById("submit-download")
    .addEventListener("click", function () {
      document.getElementById("custom-feedback-modal").style.display = "none";
      downloadPDF(pdfUrl);
      setTimeout(function () {
        location.reload();
      }, 5000);
    });
}

function downloadPDF(pdfUrl) {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Optitx's Report.pdf";
  link.click();
  setInterval(function () {
    location.reload();
  }, 1000);
}
document.querySelectorAll('input[name="experience"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document
        .querySelectorAll('input[name="experience"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
    }
  });
});

document.getElementById("calculate").addEventListener("click", () => {
  document.getElementById("calculate-conatiner").style.display = "flex";
  if (gross) {
    getAllInputValues();
    firstCal();
  } else if (indi) {
    getAllInputValues();
    calculateIndiValue();
  }
});
