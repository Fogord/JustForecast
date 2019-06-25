const messages = {
  en: {
    availableLanguage: [
      { flag: 'us', language: 'en', name: 'English' },
      { flag: 'ua', language: 'ua', name: 'Українська' },
      { flag: 'ru', language: 'ru', name: 'Русский' }
    ],
    siteNamePart1: 'Just',
    siteNamePart2: 'Forecast',
    siteNameMotto: 'Planning your sales today!',
    someString: 'A string of text',
    errors: {
      error: 'Error',
      requiredUserName: 'User name required.',
      requiredEmail: 'Email required.',
      requiredPassword: 'Pass required.',
      requiredConfirmPassword: 'Configm pass required.',
      notEqualPasswords: 'The passwords are not equal.',
      notSendEmail: 'The mail was`t send.'
    },
    messages: {
      registered: 'You are registered.',
      emailSend: 'The mail was send.',
      forgotPass: 'Forgot password?'
    },
    buttons: {
      save: 'Save',
      close: 'Close',
      cancel: 'Cancel',
      send: 'Send',
      accept: 'Accept',
      ok: 'Ok',
      singUp: 'Sing Up',
      logIn: 'Log In',
      logOut: 'Log Out',
      forgotPaswword: 'Forgot password'
    },
    indicatedFormtext: 'indicates required field',
    processes: {
      home: 'Home',
      notFound: 'Not found',
      forecast: 'Forecast',
      logo: 'Logo'
    },
    home: {
      commonInfo: {
        header: 'Why a forecast is needed?',
        service: 'Pick the best plan for you',
        mistakePercent: 'Mistake percent',
        result: 'The example of forecasting',
        body: [
          'Definition of product availability',
          'Cash flow planning',
          'Defining goals for the future',
          'Sales control',
          'Required goods, in required quantity, in the right place',
          'Working time optimization'
        ],
        chooseInfo: {
          header: 'Why Choose Us?',
          body: [{
            title: 'We Are Honest and Dependable',
            text: 'Our results is most honest answer of what we do'
          }, {
            title: 'We Are Always Improving',
            text: ' Our algorithmic is a high level of machine learning and forecasting technology'
          }, {
            title: 'We Are Passionate',
            text: 'We always think of how a product can help your business'
          }]
        },
        contactsInfo: {
          header: 'Contacts',
          body: [{
            title: '+38 ...',
            subTitle: 'Mobile',
            icon: 'phone',
            action: ''
          }, {
            title: 'JustForecast@gmail.com',
            subTitle: 'Work',
            icon: 'mail',
            action: ''
          }, {
            title: 'Ukraine, Kyiv',
            subTitle: 'Main Street',
            icon: 'location_on',
            action: ''
          }]
        },
        exampleInfo: {
          tableView: 'Table view',
          chartView: 'Chart view',
          month: 'Month',
          fact: 'Fact',
          model: 'Model',
          forecast: 'Forecast',
          mounthes: {
            january: 'January',
            february: 'February',
            march: 'March',
            april: 'April',
            may: 'May',
            june: 'June',
            july: 'July',
            august: 'August',
            september: 'September',
            october: 'October',
            november: 'November',
            december: 'December'
          }
        }
      },
      services: [
        {
          header: 'Instant Forecasting',
          body: [
            'Importing data in one unit of account for 12 months',
            'Prediction for the next 5 months with one algorithm',
            'Forecast isualization'
          ],
          status: 'free',
          action: '/forecast',
          icon: 'money_off'
        },
        {
          header: 'Work through your personal office',
          body: [
            'Importing data with arbitrary detail',
            'Calculation of the most accurate forecast',
            'Automatic selection of the best model based on your data',
            'Self-learning system for further forecasting',
            'Analysis and filtration of factual data',
            'Storing and viewing history',
            'Forecast export'
          ],
          status: 'autorisated',
          action: '/autorisation',
          icon: 'attach_money'
        },
        {
          header: 'Integration in business systems',
          body: [
            'Turnkey deployment and debugging',
            'Adaptation of a system for a business task',
            'Forecast management in a personal office',
            'On-line support'
          ],
          status: 'individual',
          action: '/sendEmail',
          icon: 'work'
        }
      ]
    }
  },
  ua: {
    availableLanguage: [
      { flag: 'us', language: 'en', name: 'English' },
      { flag: 'ua', language: 'ua', name: 'Українська' },
      { flag: 'ru', language: 'ru', name: 'Русский' }
    ],
    siteNamePart1: 'Just',
    siteNamePart2: 'Forecast',
    siteNameMotto: 'Planning your sales today!',
    someString: 'Перевірка',
    errors: {
      error: 'Помилка.',
      requiredUserName: 'Введіть ім\'я користувача',
      requiredEmail: 'Введіть email користувача.',
      requiredPassword: 'Пароль обов\'язковий.',
      requiredConfirmPassword: 'Пароль обов\'язковий.',
      notEqualPasswords: 'Паролі нерівні.',
      notSendEmail: 'Лист не надіслано.'
    },
    messages: {
      registered: 'Ви зареєстровані.',
      emailSend: 'Лист надіслано.',
      forgotPass: 'Забули пароль?'
    },
    buttons: {
      save: 'Зберегти',
      close: 'Закрити',
      cancel: 'Скасувати',
      send: 'Відправити',
      accept: 'Прийняти',
      ok: 'Добре',
      singUp: 'Зареєструватися',
      logIn: 'Увійти',
      logOut: 'Вийти',
      forgotPaswword: 'Нагадати пароль'
    },
    indicatedFormtext: 'відмічені поля обов\'язкові',
    processes: {
      home: 'Дім',
      notFound: 'Не знайдено',
      forecast: 'Прогноз',
      logo: 'Лого'
    },
    home: {
      commonInfo: {
        header: 'Навіщо необхідне прогнозування?',
        service: 'Оберіть найкращий для Вас план',
        mistakePercent: 'Процент похибки',
        result: 'Приклад прогнозування',
        body: [
          'Визначення доступності товару',
          'Планування грошових потоків',
          'Визначення цілей на майбутнє',
          'Контроль продажів',
          'Необхідні товари, в необхідній кількості, у необхідному місці',
          'Оптимізація робочого часу'
        ],
        chooseInfo: {
          header: 'Чому обирають саме нас?',
          body: [{
            title: 'Ми чесні та надійні',
            text: 'Наші результати - це найбільш чесна відповідь на те, що ми робимо'
          }, {
            title: 'Ми завжди вдосконалюємося',
            text: 'Наше рішення - це новітні технології прогнозування з використанням машинного навчання'
          }, {
            title: 'Ми захоплені своєю справою',
            text: 'Завжди думаємо про те, як продукт може допомогти Вашому бізнесу'
          }]
        },
        contactsInfo: {
          header: 'Контакти',
          body: [{
            title: '+38 ...',
            subTitle: 'Мобільний',
            icon: 'phone',
            action: ''
          }, {
            title: 'JustForecast@gmail.com',
            subTitle: 'Робочий email',
            icon: 'mail',
            action: ''
          }, {
            title: 'Україна, Київ',
            subTitle: 'Центральний офіс',
            icon: 'location_on',
            action: ''
          }]
        },
        exampleInfo: {
          tableView: 'Табличне представлення',
          chartView: 'Діаграмне представлення',
          month: 'Місяць',
          fact: 'Факт',
          model: 'Модель',
          forecast: 'Прогноз',
          mounthes: {
            january: 'Січень',
            february: 'Лютий',
            march: 'Березень',
            april: 'Квітень',
            may: 'Травень',
            june: 'Червень',
            july: 'Липень',
            august: 'Серпень',
            september: 'Вересень',
            october: 'Жовтень',
            november: 'Листопад',
            december: 'Грудень'
          }
        }
      },
      services: [{
        header: 'Моментальне прогнозування',
        body: [
          'Імпортування даних по одній розрахунковій одиниці за 12 місяців',
          'Прогнозування на майбутні 5 місяів одним алгоритмом',
          'Візуалізація прогнозу'
        ],
        status: 'free',
        action: '/forecast',
        icon: 'fas fa-chart-line',
        img: '../img/card-danger.png'
      }, {
        header: 'Робота через особистий кабінет',
        body: [
          'Імпортування даних з довільною деталізаціею',
          'Розрахунок найточнішого прогнозу',
          'Автоматичний підбір найкращої моделі на основі Ваших даних',
          'Самонавчання системи для подальшого прогнозування',
          'Аналіз та фильтрація фактичних даних',
          'Зберігання та перегляд історії',
          'Експортування оптиманного прогнозу'
        ],
        status: 'autorisated',
        action: '/autorisation',
        icon: 'fas fa-hryvnia',
        img: 'card-success'
      }, {
        header: 'Інтеграція в системами бізнесу',
        body: [
          'Розгорнення та налагодження системи під ключ',
          'Адаптація системи під бізнес завдання',
          'Управління прогнозуваннями в особостому кабінеті',
          'On-line підтримка'
        ],
        status: 'individual',
        action: '/sendEmail',
        icon: 'fas fa-briefcase',
        img: 'card-warning'
      }]
    }
  },
  ru: {
    availableLanguage: [
      { flag: 'us', language: 'en', name: 'English' },
      { flag: 'ua', language: 'ua', name: 'Українська' },
      { flag: 'ru', language: 'ru', name: 'Русский' }
    ],
    siteNamePart1: 'Just',
    siteNamePart2: 'Forecast',
    siteNameMotto: 'Planning your sales today!',
    errors: {
      error: 'Ошибка.',
      requiredUserName: 'Введите имя пользователя',
      requiredEmail: 'Введите email пользователя.',
      requiredPassword: 'Пароль обязательный.',
      requiredConfirmPassword: 'Пароль обязательный',
      notEqualPasswords: 'Пароли не совпадают.',
      notSendEmail: 'Письмо не направлено.'
    },
    messages: {
      registered: 'Вы зарегистрированы.',
      emailSend: 'Письмо отправлено.',
      forgotPass: 'Забыли пароль?'
    },
    buttons: {
      save: 'Сохранить',
      close: 'Закрыть',
      cancel: 'Отменить',
      send: 'Отправить',
      accept: 'Принять',
      ok: 'Хорошо',
      forgotPaswword: 'Нагадати пароль',
      logOut: 'Вийти',
      logIn: 'Зайти',
      singUp: 'Зарегистрироватся'
    },
    indicatedFormtext: 'отмеченыeполя обязанности зыков',
    processes: {
      home: 'Дом',
      notFound: 'Не найдено',
      forecast: 'Прогноз',
      logo: 'Лого'
    },
    home: {
      commonInfo: {
        header: 'Зачем необходимо прогнозирование?',
        service: 'Выберите лучший для Вас план',
        mistakePercent: 'Процент погрешности',
        result: 'Пример прогнозирования',
        body: [
          'Определение доступности товара',
          'Планирование денежных потоков',
          'Определение целей на будущее',
          'Контроль продаж',
          'Необходимые товары, в необходимом количестве, в нужном месте',
          'Оптимизация рабочего времени'
        ],
        chooseInfo: {
          header: 'Почему выбирают нас?',
          body: [{
            title: 'Мы честные и надежные',
            text: 'Наши результаты - это наиболее честный ответ на то, что мы делаем'
          }, {
            title: 'Мы всегда совершенствуемся',
            text: 'Наше решение - это новейшие технологии прогнозирования с использованием машинного обучения'
          }, {
            title: 'Мы восхищены своим делом',
            text: 'Всегда думаем о том, как продукт может помочь Вашему бизнесу'
          }]
        },
        contactsInfo: {
          header: 'Контакты',
          body: [{
            title: '+38 ...',
            subTitle: 'Мобильный',
            icon: 'phone',
            action: ''
          }, {
            title: 'JustForecast@gmail.com ',
            subTitle: 'Рабочий email',
            icon: 'mail',
            action: ''
          }, {
            title: 'Украина, Киев',
            subTitle: 'Центральный офис',
            icon: 'location_on',
            action: ''
          }]
        },
        exampleInfo: {
          tableView: 'Табличное представление',
          chartView: 'Диаграммное представление',
          month: 'Месяц',
          fact: 'Факт',
          model: 'Модель',
          forecast: 'Прогноз',
          mounthes: {
            january: 'Январь',
            february: 'Февраль',
            march: 'Март',
            april: 'Апрель',
            may: 'Май',
            june: 'Июнь',
            july: 'Июль',
            august: 'Август',
            september: 'Сентябрь',
            october: 'Октябрь',
            november: 'Ноябрь',
            december: 'Декабрь'
          }
        }
      },
      services: [{
        header: 'Моментальное прогнозирование',
        body: [
          'Импорт данных по одной расчетной единицы за 12 месяцев',
          'Прогнозирование на будущие 5 месяцев одним алгоритмом',
          'Визуализация прогноза'
        ],
        status: 'free',
        action: '/forecast',
        icon: 'fas fa-chart-line',
        img: '../img/card-danger.png'
      }, {
        header: 'Работа через личный кабинет ',
        body: [
          'Импорт данных с произвольной детализации',
          'Расчет точного прогноза',
          'Автоматический подбор найлучшей модели на основе Ваших данных',
          'Самообучение системы для дальнейшего прогнозирования',
          'Анализ и фильтрация фактических данных',
          'Хранение и просмотр истории',
          'Экспорт оптиманного прогноза'
        ],
        status: 'autorisated',
        action: '/autorisation',
        icon: 'fas fa-hryvnia',
        img: 'card-success'
      }, {
        header: 'Интеграция в системи бизнеса',
        body: [
          'Развертывание и настройка системы под ключ',
          'Адаптация системы под бизнес задачи',
          'Управление прогнозирование в личном кабинете',
          'On-line поддержка '
        ],
        status: 'individual',
        action: '/sendEmail ',
        icon: 'fas fa-briefcase',
        img: 'card-warning'
      }]
    }
  }
}

export default messages
