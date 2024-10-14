import "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    showToast?: boolean;
  }
}
