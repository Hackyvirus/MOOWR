function formatNumber(id) {
  const input = document.getElementById(id);
  
  // Allow only numbers and a single decimal point
  let value = input.value.replace(/[^\d.]/g, "");
  
  // Ensure only one decimal point exists
  if ((value.match(/\./g) || []).length > 1) {
    value = value.replace(/\.(?=.*\.)/g, "");
  }

  // Split the integer and decimal parts (if any)
  let [integerPart, decimalPart] = value.split(".");

  // Format the integer part with commas
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let formattedValue = 
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  // Add the decimal part back if it exists
  if (decimalPart !== undefined) {
    formattedValue += "." + decimalPart;
  }

  // Set the formatted value back to the input
  input.value = formattedValue;
}


function formatNumberPDF(valuePDF) {
  // Convert the value to a string
  valuePDF = valuePDF.toString();

  // Check for a leading minus sign and remove any non-numeric characters except the minus sign
  let isNegative = valuePDF.startsWith("-");
  valuePDF = valuePDF.replace(/\D/g, ""); // Remove non-numeric characters

  // Reapply the minus sign if it was present
  if (isNegative) {
    valuePDF = "-" + valuePDF;
  }

  // Format the value for commas
  let lastThree = valuePDF.slice(-3);
  let otherNumbers = valuePDF.slice(0, -3);

  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }

  let formattedValue =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return formattedValue;
}

let first = false;
let second = false;
let selectElements = [
  "percentage-select1",
  "percentage-select2",
  "percentage-select3",
  "percentage-select4",
  "percentage-select5",
  "percentage-select6",
  "percentage-select7",
  "percentage-select8",
  "percentage-select9",
  "percentage-select10",
];
let userInputes = [
  "userInputrate1",
  "userInputrate2",
  "userInputrate3",
  "userInputrate4",
  "userInputrate5",
  "userInputrate6",
  "userInputrate7",
  "userInputrate8",
  "userInputrate9",
  "userInputrate10",
];

selectElements = selectElements.map((id) => document.getElementById(id));

// BCD Rate Functions
selectElements.forEach((e, index) => {
  e.addEventListener("change", () => {
    if (e.value == "others") {
      console.log(e.value)
      console.log(index)
      document.getElementById(`userInputrate${index + 1}`).style.display =
        "block";
    } else {
      document.getElementById(`userInputrate${index + 1}`).style.display =
        "none";
    }

    bcdRateElement =
      document.querySelector(`#percentage-select${index + 1}`).value == "others"
        ? document.querySelector(`#userInputrate${index + 1}`).value
        : document.querySelector(`#percentage-select${index + 1}`).value;
  });
});

// Disposal Listeners
function setupDisposalListeners() {
  document.querySelectorAll('select[id$="ms"]').forEach((select, index) => {
    select.addEventListener("change", () => {
      let rowLetter = String.fromCharCode(97 + index);
      let intendedPeriodElement = document.querySelector(`#${rowLetter}ip`);

      if (select.value === "Sale in DTA") {
        intendedPeriodElement.style.display = "block";
      } else {
        intendedPeriodElement.style.display = "none";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupDisposalListeners);
function resetAllSections() {
  document.getElementById("cap-que").style.display = "none";
  document.getElementById("capital-goods-next").style.display = "none";
  document.getElementById("cap-table").style.display = "none";
  document.getElementById("capital-goods-next2").style.display = "none";
  document.getElementById("raw-table").style.display = "none";
  document.getElementById("raw-materials-next2").style.display = "none";
  document.getElementById("common-que").style.display = "none";
  document.getElementById("raw-que").style.display = "none";
  document.getElementById("raw-materials-next").style.display = "none";
  document.querySelector(".calculate-conatiner").style.display = "none";
  document.getElementById("download-report").style.display = "none";
  document.querySelector(".preview-container").style.display = "none";
}

document.getElementById("left-btn").addEventListener("click", () => {
  document.getElementById("left-btn").style.background = "#2b55d3";
  document.getElementById("right-btn").style.background = "#fff";
  document.getElementById("cap-que").style.display = "block";
  document.getElementById("raw-que").style.display = "none";
  document.getElementById("cap-table").style.display = "none";
  document.getElementById("infor").style.display = "none";
  document.getElementById("raw-table").style.display = "none";
  document.getElementById("capital-goods-next").style.display = "block";
  document.getElementById("capital-goods-next2").style.display = "none";
  first = true;
});

document.getElementById("right-btn").addEventListener("click", () => {
  document.getElementById("infor").style.display = "flex";
  document.getElementById("right-btn").style.background = "#2b55d3";
  document.getElementById("left-btn").style.background = "#fff";
  document.getElementById("capital-goods-next2").style.display = "block";
  document.getElementById("capital-goods-next").style.display = "none";

  document.getElementById("cap-table").style.display = "block";
  document.getElementById("cap-que").style.display = "none";
  document.getElementById("raw-materials-next").style.display = "none";
  document.getElementById("common-que").style.display = "none";
  document.getElementById("calculate").style.display = "none";
  document.getElementById("raw-que").style.display = "none";
  document.getElementById("raw-table").style.display = "none";

  second = true;
});

document.getElementById("capital-goods-next").addEventListener("click", () => {
  document.getElementById("raw-que").style.display = "block";
  document.getElementById("raw-materials-next").style.display = "block";
});

document.getElementById("capital-goods-next2").addEventListener("click", () => {
  document.getElementById("raw-table").style.display = "block";
  document.getElementById("raw-materials-next2").style.display = "block";
});

document.getElementById("raw-materials-next").addEventListener("click", () => {
  document.getElementById("common-que").style.display = "block";
  document.querySelector(".calculate-conatiner").style.display = "flex";
});

document.getElementById("raw-materials-next2").addEventListener("click", () => {
  document.getElementById("common-que").style.display = "block";
  document.getElementById("calculate").style.display = "block";
  document.querySelector(".calculate-conatiner").style.display = "flex";
});

function displayNone() {
  if (document.getElementById("fourth-left-input").value == "Sale in DTA") {
    document.querySelector(".fourth-left").style.display = "flex";
  } else {
    document.querySelector(".fourth-left").style.display = "none";
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

function firstCal() {
  let grossCIF = safeParseFloat(
    document.getElementById("first-left-input").value
  );
  let grossBCD = safeParseFloat(
    document.getElementById("first-right-input").value
  );
  let grossSGD = safeParseFloat(document.getElementById("sgd").value);
  let grossCWD = safeParseFloat(document.getElementById("cwd").value);
  let grossAIDC = safeParseFloat(
    document.getElementById("second-left-input").value
  );
  let grossADD = safeParseFloat(
    document.getElementById("second-right-input").value
  );
  let grossIGST = safeParseFloat(
    document.getElementById("third-left-input").value
  );
  let grossIntendedPeriod = safeParseFloat(
    document.getElementById("third-right-input").value
  );
  let grossDisposal = document.getElementById("fourth-left-input").value;
  let GrossSWS = safeParseFloat(
    parseFloat((safeParseFloat(grossBCD) * 10) / 100)
  );

  let grossCIF2 = safeParseFloat(
    document.getElementById("first-left-input2").value
  );
  let grossBCD2 = safeParseFloat(
    document.getElementById("first-right-input2").value
  );
  let grossSGD2 = safeParseFloat(document.getElementById("sgd2").value);
  let grossCWD2 = safeParseFloat(document.getElementById("cwd2").value);
  let grossAIDC2 = safeParseFloat(
    document.getElementById("second-left-input2").value
  );
  let grossADD2 = safeParseFloat(
    document.getElementById("second-right-input2").value
  );
  let grossIGST2 = safeParseFloat(
    document.getElementById("third-left-input2").value
  );
  let GrossSWS2 = parseFloat((safeParseFloat(grossBCD2) * 10) / 100);
  let lifeCycle = safeParseFloat(
    document.getElementById("first-left-input3").value
  );
  let ExpectedAnnualGrowth = safeParseFloat(
    document.getElementById("first-right-input3").value
  );
  let rateOfInterest = safeParseFloat(
    document.getElementById("second-left-input3").value
  );
  let timeGap = safeParseFloat(
    document.getElementById("second-right-input3").value
  );
  let annualValueofRoDTEP = safeParseFloat(
    document.getElementById("third-left-input3").value
  );
  let GrossAnnualValue = safeParseFloat(
    document.getElementById("third-right-input3").value
  );
  let conversionOfRaw = safeParseFloat(
    document.getElementById("fourth-right-input3").value
  );
  let exportSales = safeParseFloat(
    document.getElementById("export-sales").value
  );
  let domesticSales = safeParseFloat(
    document.getElementById("domestic-sales").value
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
function calculateIndiValue() {
  // Getting input values
  let rateOfInterest = safeParseFloat(
    document.getElementById("second-left-input3").value
  );
  let timeGap = safeParseFloat(
    document.getElementById("second-right-input3").value
  );
  let lifeCycle = safeParseFloat(
    document.getElementById("first-left-input3").value
  );
  let conversionOfRaw = safeParseFloat(
    document.getElementById("fourth-right-input3").value
  );
  let annualValueofRoDTEP = safeParseFloat(
    document.getElementById("third-left-input3").value
  );
  let GrossAnnualValue = safeParseFloat(
    document.getElementById("third-right-input3").value
  );
  let ExpectedAnnualGrowth =
    document.getElementById("first-right-input3").value;

  // Arrays for input values
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
      document.querySelector(`#percentage-select${i + 1}`).value == "others"
    ) {
      bcdRate = parseFloat(
        document.getElementById(`userInputrate${i + 1}`).value
      );
    } else {
      bcdRate = safeParseFloat(
        document.querySelector(`#percentage-select${i + 1}`).value
      );
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
      document.querySelector(`#percentage-select${i + 6}`).value == "others"
    ) {
      bcdRate2 = parseFloat(
        document.getElementById(`userInputrate${i + 6}`).value
      );
    } else {
      bcdRate2 = safeParseFloat(
        document.querySelector(`#percentage-select${i + 6}`).value
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
  // const url = "<?php echo get_template_directory_uri(); ?>/test.pdf";
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

  const previewContainer = document.querySelector(".preview-container");
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
    });

  document
    .getElementById("feedback-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const userName = document.getElementById("user-name").value;
      const userEmail = document.getElementById("user-email").value;
      const experience = Array.from(
        document.querySelectorAll('input[name="experience"]:checked')
      ).map((el) => el.value);
      const userFeedback = document.getElementById("user-feedback").value;
      const newsletterOptIn =
        document.getElementById("newsletter-opt-in").checked;

      jQuery.ajax({
        url: ajax_object.ajax_url,
        type: "POST",
        data: {
          action: "submit_feedback",
          security: ajax_object.nonce,
          name: userName,
          email: userEmail,
          experience: experience,
          feedback: userFeedback,
          newsletter_opt_in: newsletterOptIn ? 1 : 0,
        },
        success: function (response) {
          if (response.success) {
            alert(response.data);
            document.getElementById("custom-feedback-modal").style.display =
              "none";
            downloadPDF(pdfUrl);
          } else {
            alert("There was an error submitting the form. Please try again.");
          }
        },
        error: function () {
          alert("An unexpected error occurred. Please try again.");
        },
      });
    });
}

// Function to handle PDF download
function downloadPDF(pdfUrl) {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Optitx's Report.pdf";
  link.click();

  setInterval(function () {
    location.reload();
  }, 1000);
}

document.getElementById("calculate").addEventListener("click", () => {
  document.getElementById("download-report").style.display = "flex";
  document.querySelector(".preview-container").style.display = "block";
  if (first == true && second == false) {
    firstCal();
  } else if (first == false && second == true) {
    calculateIndiValue();
  }
});
