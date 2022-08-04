exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

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
