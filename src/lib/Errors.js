import axios from 'axios';

export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const UNPROCESSABLE_ENTITY = 422;

export const errorToMessage = (e) => {
  if (e instanceof RequestError || e instanceof Error) return e.message;

  return '問題が発生したため現在利用できません\n時間を置いてもう一度お試しください';
};

export const errorToStatus = (e) => {
  if (e instanceof RequestError) return e.statusCode;
  if (axios.isAxiosError(e) && e.response?.status) return e.response.status;

  return null;
};

export class RequestError extends Error {
  response;

  constructor(axiosError) {
    const errorMessage = RequestError.errorToMessage(axiosError);
    super(errorMessage);

    const { response } = axiosError;
    this.response = response;
  }

  get statusCode() {
    if (this.response) return this.response.status;

    return null;
  }

  static errorToMessage(axiosError) {
    const { response } = axiosError;
    const defaultMessage = '問題が発生したため現在利用できません\n時間を置いてもう一度お試しください';
    if (!response) return defaultMessage;

    if (response && response.data) {
      const errorMessage = this.errorBodyToMessage(response.data);
      if (errorMessage) return errorMessage;
    }

    if (response.status === UNAUTHORIZED) return '期限切れもしくは認証に失敗したため現在利用できません\nリロードをお試しください';
    if (response.status === FORBIDDEN) return '権限がありません';
    if (response.status === UNPROCESSABLE_ENTITY) return '入力に誤りがあります';
    return defaultMessage;
  }

  static errorBodyToMessage(body) {
    if (body.errors) {
      const messages = body.errors.map((error) => error.message);
      return messages.filter((message) => message).join('。');
    }

    return '';
  }
}