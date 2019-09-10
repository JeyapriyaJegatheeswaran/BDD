$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeHRMLogin1.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "verify valid credential",
  "description": "",
  "id": "login;verify-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ValidCredentials"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I sign in with username \"Admin\" and password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see dashbord page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I sign in with username \"Admin\" and password \"admin124\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I sign in with username \"Admin\" and password \"Admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("OrangeHRMLogin2.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "verify valid credential",
  "description": "",
  "id": "login;verify-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ValidCredentials"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I sign in with username \"Admin\" and password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see dashbord page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I sign in with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login;verify-invalid-credentials-scenario-2;;1"
    },
    {
      "cells": [
        "Admin",
        "admin124"
      ],
      "line": 17,
      "id": "login;verify-invalid-credentials-scenario-2;;2"
    },
    {
      "cells": [
        "admin",
        "Admin123"
      ],
      "line": 18,
      "id": "login;verify-invalid-credentials-scenario-2;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 10,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I sign in with username \"Admin\" and password \"admin124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 10,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I sign in with username \"admin\" and password \"Admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("OrangeHRMLogin3.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "verify valid credential",
  "description": "",
  "id": "login;verify-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@ValidCredentials"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I sign in with username \"Admin\" and password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see dashbord page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "verify invalid credentials",
  "description": "",
  "id": "login;verify-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I sign in with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login;verify-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login;verify-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "admin124"
      ],
      "line": 18,
      "id": "login;verify-invalid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "Admin123"
      ],
      "line": 19,
      "id": "login;verify-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "verify invalid credentials",
  "description": "",
  "id": "login;verify-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 12,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I sign in with username \"Admin\" and password \"admin124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "verify invalid credentials",
  "description": "",
  "id": "login;verify-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 12,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I sign in with username \"admin\" and password \"Admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("OrangeHRMLogin4.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 7,
  "name": "verify valid credential",
  "description": "",
  "id": "login;verify-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@ValidCredentials"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I sign in with username \"Admin\" and password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see dashbord page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I sign in with username \"Admin\" and password \"admin124\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I launch OrangeHRM application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "verify invalid credentials scenario 2",
  "description": "",
  "id": "login;verify-invalid-credentials-scenario-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@InvalidCredentials"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I sign in with username \"Admin\" and password \"Admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get error message \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});