export interface UserTypes {
  name?: string;
  password?: string;
  email?: string;
  wallets?: [];
}

export interface AccountTypes {
  email: string;
  password: string;
}

export interface AccountResponseTypes {
  value: { uid: string; displayName: string; refreshToken: string; accessToken: string };
}

export interface RegisterTypes {
  name: string;
  email: string;
  password: string;
}
