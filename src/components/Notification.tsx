import { notification } from "antd";

export const Notification = {
  success: (data: any) => {
    notification?.success({
      placement: data?.placement ? data.placement : 'bottomRight',
      duration: 2,
      ...data,
    });
  },
  error: (data: any) => {
    notification?.error({
      placement: data?.placement ? data.placement : 'bottomRight',
      duration: 2,
      ...data,
    });
  },
};
