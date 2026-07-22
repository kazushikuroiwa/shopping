// 最小限のサービスワーカー。
// これがあることでAndroid ChromeがPWAとして正式インストールでき、
// ホーム画面アイコンにバッジ(件数)を表示できるようになる。
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // 特別なキャッシュ処理はせず、通常どおりネットワークから取得する。
  e.respondWith(fetch(e.request));
});
