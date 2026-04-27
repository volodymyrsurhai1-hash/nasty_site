const translations = {
  en: {
    htmlLang: "en",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    nameStepTitle: "Patient Information",
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    eyebrow: "Combined oral contraceptives",
    title: "Assessment of Side Effect Risks When Taking COCs",
    back: "Back",
    next: "Next",
    showResult: "Show result",
    resultEyebrow: "Assessment result",
    scoreLabel: "Risk score",
    scoreMeaningLabel: "Score meaning",
    highFactors: "High-risk factors",
    moderateFactors: "Moderate-risk factors",
    noFactors: "None selected",
    disclaimerTitle: "Important disclaimer",
    disclaimerText:
      "This tool is based on a simplified WHO MEC-style rule set and is intended for educational purposes only. It does not replace professional medical consultation.",
    references: "References:",
    editAnswers: "Edit answers",
    restart: "Start again",
    sectionCount: (current, total) => `Section ${current} of ${total}`,
    result: {
      highTitle: "HIGH RISK",
      highMessage:
        "Combined oral contraceptives are contraindicated based on at least one high-risk factor. A healthcare professional should be consulted.",
      moderateTitle: "MODERATE RISK",
      moderateMessage:
        "COCs should be used with caution and medical consultation because one or more moderate-risk factors were selected.",
      lowTitle: "LOW RISK",
      lowMessage:
        "No high-risk or moderate-risk factors were selected. COCs can generally be used, but individual medical advice is still recommended.",
      consultTitle: "MEDICAL CONSULTATION REQUIRED",
      consultMessage:
        "Pregnancy or possible pregnancy was selected. COCs should not be started until pregnancy is ruled out and a healthcare professional gives advice.",
      scoreHigh: "High",
      scoreModerate: "Moderate",
      scoreLow: "Low",
      pregnancyNotice:
        "Pregnancy or possible pregnancy: do not start COCs until pregnancy is excluded. This item is shown separately from the simplified risk score.",
    },
    sections: [
      {
        title: "Basic Information",
        questions: [
          {
            id: "age",
            text: "What is your age?",
            options: [
              ["under35", "Under 35"],
              ["35plus", "35 years or older"],
            ],
          },
        ],
      },
      {
        title: "Smoking Status",
        questions: [
          {
            id: "smoking",
            text: "Do you currently smoke cigarettes?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
          {
            id: "cigarettesPerDay",
            dependsOn: { id: "smoking", value: "yes" },
            text: "If yes, how many cigarettes do you smoke per day?",
            options: [
              ["less15", "Less than 15"],
              ["15plus", "15 or more"],
            ],
          },
        ],
      },
      {
        title: "Cardiovascular Risk",
        questions: [
          {
            id: "hypertension",
            text: "Have you ever been diagnosed with high blood pressure (hypertension)?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
          {
            id: "heartDiseaseOrStroke",
            text: "Do you have a history of heart disease or stroke?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
        ],
      },
      {
        title: "Thromboembolic Risk",
        questions: [
          {
            id: "thrombosisHistory",
            text: "Have you ever had a blood clot (deep vein thrombosis or pulmonary embolism)?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
          {
            id: "familyHistoryThrombosis",
            text: "Do you have a family history of blood clots at a young age?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
        ],
      },
      {
        title: "Neurological Conditions",
        questions: [
          {
            id: "migraineWithAura",
            text: "Do you experience migraines with aura (visual or sensory disturbances)?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
        ],
      },
      {
        title: "Reproductive Status",
        questions: [
          {
            id: "pregnant",
            text: "Are you currently pregnant or do you think you might be pregnant?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
          {
            id: "postpartum36Weeks",
            text: "Have you given birth within the last 3-6 weeks?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
          {
            id: "breastfeeding",
            text: "Are you currently breastfeeding?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
        ],
      },
      {
        title: "Cancer History",
        questions: [
          {
            id: "breastCancer",
            text: "Have you ever been diagnosed with breast cancer?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
        ],
      },
      {
        title: "Diabetes and Metabolic Conditions",
        questions: [
          {
            id: "diabetes",
            text: "Do you have diabetes?",
            options: [
              ["no", "No"],
              ["yes", "Yes"],
            ],
          },
        ],
      },
    ],
    factors: {
      thrombosisHistory: "History of deep vein thrombosis or pulmonary embolism",
      migraineWithAura: "Migraine with aura",
      breastCancer: "Breast cancer history",
      heartDiseaseOrStroke: "Heart disease or stroke history",
      smoking35Plus: "Smoking at age 35 or older",
      postpartum36Weeks: "Birth within the last 3-6 weeks",
      hypertension: "Hypertension",
      diabetes: "Diabetes",
      smokingUnder35: "Smoking under age 35",
      breastfeeding: "Breastfeeding",
      familyHistoryThrombosis: "Family history of blood clots at a young age",
    },
  },
  uk: {
    htmlLang: "uk",
    firstNamePlaceholder: "Ім'я",
    lastNamePlaceholder: "Прізвище",
    nameStepTitle: "Інформація про пацієнта",
    firstNameLabel: "Ім'я",
    lastNameLabel: "Прізвище",
    eyebrow: "Комбіновані оральні контрацептиви",
    title: "Оцінка ризиків розвитку побічних ефектів при прийомі КОК",
    back: "Назад",
    next: "Далі",
    showResult: "Показати результат",
    resultEyebrow: "Результат оцінки",
    scoreLabel: "Бал ризику",
    scoreMeaningLabel: "Значення бала",
    highFactors: "Фактори високого ризику",
    moderateFactors: "Фактори помірного ризику",
    noFactors: "Не вибрано",
    disclaimerTitle: "Важливе застереження",
    disclaimerText:
      "Цей інструмент базується на спрощеній логіці в стилі WHO MEC і призначений лише для освітніх цілей. Він не замінює консультацію медичного фахівця.",
    references: "Джерела:",
    editAnswers: "Змінити відповіді",
    restart: "Почати заново",
    sectionCount: (current, total) => `Розділ ${current} із ${total}`,
    result: {
      highTitle: "ВИСОКИЙ РИЗИК",
      highMessage:
        "Комбіновані оральні контрацептиви протипоказані через наявність щонайменше одного фактора високого ризику. Потрібна консультація медичного фахівця.",
      moderateTitle: "ПОМІРНИЙ РИЗИК",
      moderateMessage:
        "КОК слід використовувати з обережністю та після медичної консультації, тому що вибрано один або кілька факторів помірного ризику.",
      lowTitle: "НИЗЬКИЙ РИЗИК",
      lowMessage:
        "Фактори високого або помірного ризику не вибрані. КОК зазвичай можуть використовуватися, але індивідуальна медична консультація все одно рекомендована.",
      consultTitle: "ПОТРІБНА МЕДИЧНА КОНСУЛЬТАЦІЯ",
      consultMessage:
        "Вибрано вагітність або можливу вагітність. КОК не слід починати, доки вагітність не виключена і медичний фахівець не надасть рекомендацію.",
      scoreHigh: "Високий",
      scoreModerate: "Помірний",
      scoreLow: "Низький",
      pregnancyNotice:
        "Вагітність або можлива вагітність: не починайте КОК, доки вагітність не виключена. Цей пункт показано окремо від спрощеного бала ризику.",
    },
    sections: [
      {
        title: "Базова інформація",
        questions: [
          {
            id: "age",
            text: "Який ваш вік?",
            options: [
              ["under35", "До 35 років"],
              ["35plus", "35 років або більше"],
            ],
          },
        ],
      },
      {
        title: "Статус куріння",
        questions: [
          {
            id: "smoking",
            text: "Чи курите ви зараз сигарети?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
          {
            id: "cigarettesPerDay",
            dependsOn: { id: "smoking", value: "yes" },
            text: "Якщо так, скільки сигарет на день ви курите?",
            options: [
              ["less15", "Менше ніж 15"],
              ["15plus", "15 або більше"],
            ],
          },
        ],
      },
      {
        title: "Серцево-судинний ризик",
        questions: [
          {
            id: "hypertension",
            text: "Чи діагностували у вас коли-небудь підвищений артеріальний тиск (гіпертензію)?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
          {
            id: "heartDiseaseOrStroke",
            text: "Чи були у вас серцеві захворювання або інсульт?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
        ],
      },
      {
        title: "Тромбоемболічний ризик",
        questions: [
          {
            id: "thrombosisHistory",
            text: "Чи був у вас коли-небудь тромб (тромбоз глибоких вен або тромбоемболія легеневої артерії)?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
          {
            id: "familyHistoryThrombosis",
            text: "Чи є у вашій родині випадки тромбів у молодому віці?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
        ],
      },
      {
        title: "Неврологічні стани",
        questions: [
          {
            id: "migraineWithAura",
            text: "Чи бувають у вас мігрені з аурою (зорові або сенсорні порушення)?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
        ],
      },
      {
        title: "Репродуктивний статус",
        questions: [
          {
            id: "pregnant",
            text: "Чи ви зараз вагітні або думаєте, що можете бути вагітні?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
          {
            id: "postpartum36Weeks",
            text: "Чи народжували ви протягом останніх 3-6 тижнів?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
          {
            id: "breastfeeding",
            text: "Чи годуєте ви зараз грудьми?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
        ],
      },
      {
        title: "Онкологічний анамнез",
        questions: [
          {
            id: "breastCancer",
            text: "Чи діагностували у вас коли-небудь рак молочної залози?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
        ],
      },
      {
        title: "Діабет і метаболічні стани",
        questions: [
          {
            id: "diabetes",
            text: "Чи маєте ви діабет?",
            options: [
              ["no", "Ні"],
              ["yes", "Так"],
            ],
          },
        ],
      },
    ],
    factors: {
      thrombosisHistory: "Анамнез тромбозу глибоких вен або тромбоемболії легеневої артерії",
      migraineWithAura: "Мігрень з аурою",
      breastCancer: "Анамнез раку молочної залози",
      heartDiseaseOrStroke: "Анамнез серцевих захворювань або інсульту",
      smoking35Plus: "Куріння у віці 35 років або більше",
      postpartum36Weeks: "Пологи протягом останніх 3-6 тижнів",
      hypertension: "Гіпертензія",
      diabetes: "Діабет",
      smokingUnder35: "Куріння у віці до 35 років",
      breastfeeding: "Грудне вигодовування",
      familyHistoryThrombosis: "Сімейний анамнез тромбозів у молодому віці",
    },
  },
  ru: {
    htmlLang: "ru",
    firstNamePlaceholder: "Имя",
    lastNamePlaceholder: "Фамилия",
    nameStepTitle: "Информация о пациенте",
    firstNameLabel: "Имя",
    lastNameLabel: "Фамилия",
    eyebrow: "Комбинированные оральные контрацептивы",
    title: "Оценка риска COC",
    back: "Назад",
    next: "Далее",
    showResult: "Показать результат",
    resultEyebrow: "Результат оценки",
    scoreLabel: "Балл риска",
    scoreMeaningLabel: "Значение балла",
    highFactors: "Факторы высокого риска",
    moderateFactors: "Факторы умеренного риска",
    noFactors: "Не выбрано",
    disclaimerTitle: "Важный дисклеймер",
    disclaimerText:
      "Этот инструмент основан на упрощенной логике в стиле WHO MEC и предназначен только для образовательных целей. Он не заменяет консультацию медицинского специалиста.",
    references: "Источники:",
    editAnswers: "Изменить ответы",
    restart: "Начать заново",
    sectionCount: (current, total) => `Раздел ${current} из ${total}`,
    result: {
      highTitle: "ВЫСОКИЙ РИСК",
      highMessage:
        "Комбинированные оральные контрацептивы противопоказаны, потому что выбран как минимум один фактор высокого риска. Нужна консультация медицинского специалиста.",
      moderateTitle: "УМЕРЕННЫЙ РИСК",
      moderateMessage:
        "COC следует использовать с осторожностью и после медицинской консультации, потому что выбран один или несколько факторов умеренного риска.",
      lowTitle: "НИЗКИЙ РИСК",
      lowMessage:
        "Факторы высокого или умеренного риска не выбраны. COC обычно могут использоваться, но индивидуальная медицинская консультация все равно рекомендуется.",
      consultTitle: "НУЖНА МЕДИЦИНСКАЯ КОНСУЛЬТАЦИЯ",
      consultMessage:
        "Выбрана беременность или возможная беременность. COC не следует начинать, пока беременность не исключена и медицинский специалист не даст рекомендацию.",
      scoreHigh: "Высокий",
      scoreModerate: "Умеренный",
      scoreLow: "Низкий",
      pregnancyNotice:
        "Беременность или возможная беременность: не начинайте COC, пока беременность не исключена. Этот пункт показан отдельно от упрощенного балла риска.",
    },
    sections: [
      {
        title: "Базовая информация",
        questions: [
          {
            id: "age",
            text: "Ваш возраст?",
            options: [
              ["under35", "Младше 35"],
              ["35plus", "35 лет и старше"],
            ],
          },
        ],
      },
      {
        title: "Курение",
        questions: [
          {
            id: "smoking",
            text: "Вы сейчас курите сигареты?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
          {
            id: "cigarettesPerDay",
            dependsOn: { id: "smoking", value: "yes" },
            text: "Если да, сколько сигарет в день вы курите?",
            options: [
              ["less15", "Меньше 15"],
              ["15plus", "15 или больше"],
            ],
          },
        ],
      },
      {
        title: "Сердечно-сосудистый риск",
        questions: [
          {
            id: "hypertension",
            text: "Вам когда-либо диагностировали повышенное артериальное давление (гипертензию)?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
          {
            id: "heartDiseaseOrStroke",
            text: "У вас были сердечные заболевания или инсульт?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
        ],
      },
      {
        title: "Тромбоэмболический риск",
        questions: [
          {
            id: "thrombosisHistory",
            text: "У вас когда-либо был тромбоз глубоких вен или тромбоэмболия легочной артерии?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
          {
            id: "familyHistoryThrombosis",
            text: "Были ли у близких родственников тромбозы в молодом возрасте?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
        ],
      },
      {
        title: "Неврологические состояния",
        questions: [
          {
            id: "migraineWithAura",
            text: "Бывает ли у вас мигрень с аурой (зрительные или чувствительные нарушения)?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
        ],
      },
      {
        title: "Репродуктивный статус",
        questions: [
          {
            id: "pregnant",
            text: "Вы беременны сейчас или думаете, что можете быть беременны?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
          {
            id: "postpartum36Weeks",
            text: "Вы рожали в течение последних 3-6 недель?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
          {
            id: "breastfeeding",
            text: "Вы сейчас кормите грудью?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
        ],
      },
      {
        title: "История онкологических заболеваний",
        questions: [
          {
            id: "breastCancer",
            text: "У вас когда-либо был диагностирован рак молочной железы?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
        ],
      },
      {
        title: "Диабет и метаболические состояния",
        questions: [
          {
            id: "diabetes",
            text: "У вас есть диабет?",
            options: [
              ["no", "Нет"],
              ["yes", "Да"],
            ],
          },
        ],
      },
    ],
    factors: {
      thrombosisHistory: "История тромбоза глубоких вен или тромбоэмболии легочной артерии",
      migraineWithAura: "Мигрень с аурой",
      breastCancer: "История рака молочной железы",
      heartDiseaseOrStroke: "История сердечного заболевания или инсульта",
      smoking35Plus: "Курение в возрасте 35 лет и старше",
      postpartum36Weeks: "Роды в течение последних 3-6 недель",
      hypertension: "Гипертензия",
      diabetes: "Диабет",
      smokingUnder35: "Курение в возрасте младше 35 лет",
      breastfeeding: "Грудное вскармливание",
      familyHistoryThrombosis: "Семейная история тромбозов в молодом возрасте",
    },
  },
};

const state = {
  lang: "en",
  sectionIndex: -1,
  answers: {},
};

const form = document.querySelector("#riskForm");
const sectionList = document.querySelector("#sectionList");
const stepLabel = document.querySelector("#stepLabel");
const sectionTitle = document.querySelector("#sectionTitle");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const questionPanel = document.querySelector("#questionPanel");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");
const scoreValue = document.querySelector("#scoreValue");
const scoreMeaning = document.querySelector("#scoreMeaning");
const highFactorList = document.querySelector("#highFactorList");
const moderateFactorList = document.querySelector("#moderateFactorList");
const pregnancyNotice = document.querySelector("#pregnancyNotice");
const editButton = document.querySelector("#editButton");
const restartButton = document.querySelector("#restartButton");

function t() {
  return translations[state.lang];
}

function isVisibleQuestion(question) {
  if (!question.dependsOn) {
    return true;
  }

  return state.answers[question.dependsOn.id] === question.dependsOn.value;
}

function getVisibleQuestions(section) {
  return section.questions.filter(isVisibleQuestion);
}

function renderStaticText() {
  document.documentElement.lang = t().htmlLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = t()[key];

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = t()[key];

    if (typeof value === "string") {
      if (element.tagName === "INPUT") {
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function renderSectionList() {
  const sections = t().sections;
  const nameStep = {
    title: t().nameStepTitle,
    isName: true,
  };
  const allSteps = [nameStep, ...sections];
  // sectionIndex -1 maps to allSteps[0], 0 maps to allSteps[1], etc.
  const activeAllIndex = state.sectionIndex + 1;

  sectionList.innerHTML = allSteps
    .map((step, index) => {
      const classes = [
        index === activeAllIndex ? "is-active" : "",
        index < activeAllIndex ? "is-complete" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `<li class="${classes}"><span>${index + 1}</span>${step.title}</li>`;
    })
    .join("");
}

function renderQuestions() {
  const sections = t().sections;
  const totalSteps = sections.length + 1; // +1 for name step
  const currentStep = state.sectionIndex + 2; // step 1 = name, step 2 = section 0, etc.

  if (state.sectionIndex === -1) {
    // Render the name/surname step
    stepLabel.textContent = t().sectionCount(1, totalSteps);
    sectionTitle.textContent = t().nameStepTitle;
    progressBar.style.width = `${(1 / totalSteps) * 100}%`;

    form.innerHTML = `
      <div class="question-section">
        <div>
          <p class="eyebrow">${t().sectionCount(1, totalSteps)}</p>
          <h2>${t().nameStepTitle}</h2>
        </div>
        <div class="question-stack">
          <fieldset class="question-block">
            <legend class="question-text">${t().firstNameLabel}</legend>
            <div class="option-grid" style="grid-template-columns: 1fr;">
              <input type="text" id="firstName" name="firstName" class="text-input"
                placeholder="${t().firstNameLabel}"
                value="${state.answers.firstName || ''}" />
            </div>
          </fieldset>
          <fieldset class="question-block">
            <legend class="question-text">${t().lastNameLabel}</legend>
            <div class="option-grid" style="grid-template-columns: 1fr;">
              <input type="text" id="lastName" name="lastName" class="text-input"
                placeholder="${t().lastNameLabel}"
                value="${state.answers.lastName || ''}" />
            </div>
          </fieldset>
        </div>
      </div>
    `;

    // Attach input listeners for the dynamically rendered inputs
    form.querySelectorAll('input[type="text"]').forEach(input => {
      input.addEventListener("input", (event) => {
        state.answers[event.target.name] = event.target.value.trim();
        nextButton.disabled = !isSectionComplete();
      });
    });

    backButton.disabled = true;
    nextButton.textContent = t().next;
    nextButton.disabled = !isSectionComplete();
    renderSectionList();
    return;
  }

  const section = sections[state.sectionIndex];
  const questions = getVisibleQuestions(section);

  stepLabel.textContent = t().sectionCount(currentStep, totalSteps);
  sectionTitle.textContent = section.title;
  progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

  form.innerHTML = `
    <div class="question-section">
      <div>
        <p class="eyebrow">${t().sectionCount(currentStep, totalSteps)}</p>
        <h2>${section.title}</h2>
      </div>
      <div class="question-stack">
        ${questions.map(renderQuestion).join("")}
      </div>
    </div>
  `;

  backButton.disabled = false;
  nextButton.textContent =
    state.sectionIndex === sections.length - 1 ? t().showResult : t().next;
  nextButton.disabled = !isSectionComplete();
  renderSectionList();
}

function renderQuestion(question) {
  const selectedValue = state.answers[question.id];
  const options = question.options
    .map(([value, label]) => {
      const checked = selectedValue === value ? "checked" : "";

      return `
        <label class="option">
          <input type="radio" name="${question.id}" value="${value}" ${checked} />
          <span>${label}</span>
        </label>
      `;
    })
    .join("");

  return `
    <fieldset class="question-block">
      <legend class="question-text">${question.text}</legend>
      <div class="option-grid">${options}</div>
    </fieldset>
  `;
}

function isSectionComplete() {
  if (state.sectionIndex === -1) {
    return !!(state.answers.firstName && state.answers.lastName);
  }
  const section = t().sections[state.sectionIndex];
  return getVisibleQuestions(section).every((question) => state.answers[question.id]);
}

function saveAnswer(input) {
  state.answers[input.name] = input.value;

  if (input.name === "smoking" && input.value === "no") {
    delete state.answers.cigarettesPerDay;
  }

  renderQuestions();
}

function evaluateRisk() {
  const highFactors = [];
  const moderateFactors = [];
  const factors = t().factors;
  const yes = (id) => state.answers[id] === "yes";

  if (yes("thrombosisHistory")) highFactors.push(factors.thrombosisHistory);
  if (yes("migraineWithAura")) highFactors.push(factors.migraineWithAura);
  if (yes("breastCancer")) highFactors.push(factors.breastCancer);
  if (yes("heartDiseaseOrStroke")) highFactors.push(factors.heartDiseaseOrStroke);
  if (state.answers.age === "35plus" && yes("smoking")) highFactors.push(factors.smoking35Plus);
  if (yes("postpartum36Weeks")) highFactors.push(factors.postpartum36Weeks);

  if (yes("hypertension")) moderateFactors.push(factors.hypertension);
  if (yes("diabetes")) moderateFactors.push(factors.diabetes);
  if (state.answers.age === "under35" && yes("smoking")) moderateFactors.push(factors.smokingUnder35);
  if (yes("breastfeeding")) moderateFactors.push(factors.breastfeeding);
  if (yes("familyHistoryThrombosis")) moderateFactors.push(factors.familyHistoryThrombosis);

  const score = highFactors.length * 3 + moderateFactors.length;
  const isPregnant = yes("pregnant");
  let level = "low";

  if (highFactors.length > 0) {
    level = "high";
  } else if (isPregnant) {
    level = "consult";
  } else if (moderateFactors.length > 0) {
    level = "moderate";
  }

  let scoreLevel = t().result.scoreLow;
  if (score >= 3) {
    scoreLevel = t().result.scoreHigh;
  } else if (score >= 1) {
    scoreLevel = t().result.scoreModerate;
  }

  return { highFactors, moderateFactors, score, scoreLevel, level, isPregnant };
}

function renderList(listElement, items) {
  const listItems = items.length ? items : [t().noFactors];
  listElement.innerHTML = listItems.map((item) => `<li>${item}</li>`).join("");
}

function showResult() {
  const assessment = evaluateRisk();
  const copy = t().result;
  const resultCopy = {
    high: [copy.highTitle, copy.highMessage],
    moderate: [copy.moderateTitle, copy.moderateMessage],
    low: [copy.lowTitle, copy.lowMessage],
    consult: [copy.consultTitle, copy.consultMessage],
  };

  questionPanel.hidden = true;
  resultPanel.hidden = false;
  resultPanel.className = `result-panel ${assessment.level}`;
  resultTitle.textContent = resultCopy[assessment.level][0];
  resultMessage.textContent = resultCopy[assessment.level][1];
  scoreValue.textContent = assessment.score;
  scoreMeaning.textContent = assessment.scoreLevel;

  renderList(highFactorList, assessment.highFactors);
  renderList(moderateFactorList, assessment.moderateFactors);

  pregnancyNotice.hidden = !assessment.isPregnant;
  pregnancyNotice.textContent = copy.pregnancyNotice;

  const csrfTokenElement = document.querySelector('[name=csrfmiddlewaretoken]');
  const csrfToken = csrfTokenElement ? csrfTokenElement.value : '';

  fetch('/save/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken
    },
    body: JSON.stringify({
      firstName: state.answers.firstName,
      lastName: state.answers.lastName,
      score: assessment.score,
      level: assessment.level,
      highFactors: assessment.highFactors,
      moderateFactors: assessment.moderateFactors,
      isPregnant: assessment.isPregnant
    })
  }).then(res => res.json()).then(data => console.log("Result saved", data)).catch(err => console.error(err));
}

function restart() {
  state.sectionIndex = -1;
  state.answers = {};
  resultPanel.hidden = true;
  questionPanel.hidden = false;
  renderApp();
}

function renderApp() {
  renderStaticText();

  if (resultPanel.hidden) {
    renderQuestions();
  } else {
    renderSectionList();
    showResult();
  }
}

form.addEventListener("change", (event) => {
  if (event.target.matches('input[type="radio"]')) {
    saveAnswer(event.target);
  }
});

backButton.addEventListener("click", () => {
  if (state.sectionIndex > -1) {
    state.sectionIndex -= 1;
    renderQuestions();
  }
});

nextButton.addEventListener("click", () => {
  if (!isSectionComplete()) {
    return;
  }

  if (state.sectionIndex === t().sections.length - 1) {
    showResult();
  } else {
    state.sectionIndex += 1;
    renderQuestions();
  }
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    renderApp();
  });
});

editButton.addEventListener("click", () => {
  resultPanel.hidden = true;
  questionPanel.hidden = false;
  renderQuestions();
});

restartButton.addEventListener("click", restart);

renderApp();
