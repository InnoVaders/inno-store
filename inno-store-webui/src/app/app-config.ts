import * as localDevAppConfig from '../assets/app-config-local.json';

export interface AppConfig {
  /** Graphql Endpoint */
  api: string;
  /** Graphql Subscription Endpoint (Websockets) */
  apiWs: string;
}

export function getAppConfigFromProcessEnv(): AppConfig {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const api = process?.env?.API_URL as string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const apiWs = process?.env?.API_WS_URL as string;
  if (api || apiWs) {
    return {
      api,
      apiWs,
    };
  } else {
    return (localDevAppConfig as any).default;
  }
}
