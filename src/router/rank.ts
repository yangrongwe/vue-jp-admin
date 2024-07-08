// メニューのフルバージョンはより多く、ランクを引き出し、ここでメンテナンスが容易です。
// プラットフォームはホームルートのランクのみが0であることを規定しているため、バックエンドはランクを返すときに非 0から始める必要があります。
const home = 0,
  dashboard = 1,
  user = 2;

export { home, dashboard, user };