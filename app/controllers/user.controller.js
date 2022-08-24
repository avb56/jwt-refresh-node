exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.services = (req, res) => res.status(200).json(
  [{ will: "be" }]
)

exports.service1 = (req, res) => res.status(200).json(
  {
    "type": "onePage",
    "forms": [
      {
        "schema": {
          "title": "Форма регистрации",
          "description": "",
          "type": "object",
          "required": ["firstName", "lastName"],
          "properties": {
            "lastName": {
              "type": "string",
              "title": "Фамилия "
            },
            "firstName": {
              "type": "string",
              "title": "Имя"
            },
            "Patronymic": {
              "type": "string",
              "title": "Отчество"
            },
            "age": {
              "type": "integer",
              "title": "Возраст"
            },
            "gender": {
              "type": "boolean",
              "enumNames": ["Мужской", "Женский"],
              "title": "Ваш пол"
            },
            "date": {
              "type": "string",
              "title": "Дата рождения"
            },
            "document": {
              "type": "string",
              "format": "data-url",
              "title": "Ваш документ"
            },
            "password": {
              "type": "string",
              "title": "Пароль",
              "minLength": 3
            },
            "telephone": {
              "type": "string",
              "title": "Телефон",
              "minLength": 10
            }
          }
        },
        "uiSchema": {
          "firstName": {
            "ui:autofocus": true,
            "ui:emptyValue": ""
          },
          "age": {
            "ui:widget": "updown",
            "ui:title": "Age of person",
            "ui:description": "(earthian year)"
          },
          "gender": {
            "ui:widget": "radio"
          },
          "date": {
            "ui:widget": "date"
          },
          "password": {
            "ui:widget": "password",
            "ui:help": "Hint: Make it strong!"
          },
          "telephone": {
            "ui:options": {
              "inputType": "tel"
            }
          }
        },
        "formData": {
          "firstName": "Chuck",
          "lastName": "",
          "age": 75,
          "bio": "Roundhouse kicking asses since 1940",
          "password": "noneed"
        }
      }
    ]
  }
)

exports.service2 = (req, res) => res.status(200).json(
  {
    "type": "onePage",
    "forms": [
      {
        "schema": {
          "title": "Todo",
          "type": "object",
          "required": [
            "title"
          ],
          "properties": {
            "title": {
              "type": "string",
              "title": "Title",
              "default": "A new task"
            },
            "done": {
              "type": "boolean",
              "title": "Done?",
              "default": false
            }
          }
        }
      }
    ]
  }
)
  
exports.dataServicesStatus = (req, res) => {
  res.status(200).json([
    {
      "icon": "Ready",
      "number": "№124145700480",
      "date": "08.06.2022 в 18:00",
      "nameService": "Заявление в Университет",
      "status": "Принято"
    },
    {
      "icon": "InWork",
      "number": "№124145700027",
      "date": "10.05.2022 в 00:00",
      "nameService": "Заявление в ЖКХ",
      "status": "В работе"
    },
    {
      "icon": "Cancel",
      "number": "№124145706578",
      "date": "01.02.2022 в 12:00",
      "nameService": "Заявление на налоговый вычет",
      "status": "Принято"
    },
    {
      "icon": "Cancel",
      "number": "№124145706578",
      "date": "01.02.2022 в 12:00",
      "nameService": "Заявление на налоговый вычет",
      "status": "Отказано"
    },
    {
      "icon": "InWork",
      "number": "№124145700027",
      "date": "10.05.2022 в 00:00",
      "nameService": "Заявление в ЖКХ",
      "status": "В работе"
    },
    {
      "icon": "Ready",
      "number": "№124145700480",
      "date": "08.06.2022 в 18:00",
      "nameService": "Заявление в Университет",
      "status": "Принято"
    }
  ]);
};
