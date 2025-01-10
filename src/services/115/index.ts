import { http } from '@/utils';

export function get115QrCode() {
  return http.get('/util/115-qrcode');
}
export function get115QrCodeStatus(params: { uid: string; sign: string; time: number }) {
  return http.get('/util/115-qrcode-status', { params });
}

export function get115UserInfo() {
  return http.get('/util/115-user-info');
}
