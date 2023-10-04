import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "733b3f1f-bb90-4a6a-9616-239d869378c4",
    authority:
      "https://login.microsoftonline.com/56794af1-29b1-4e4b-a447-15e6df4f649b",
    // redirectUri: "http://localhost:3000/login", // Redirect URI for your application
  },
  cache: {
    cacheLocation: "sessionStorage", // Use sessionStorage as the token cache location
    storeAuthStateInCookie: false, // Set to true if using IE11
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Verbose,
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export default msalConfig;
