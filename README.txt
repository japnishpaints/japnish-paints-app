Japnish Paints APK Builder v3 — Dashboard Brand Logo

Purpose:
- Builds a real Android debug APK through GitHub Actions.
- Fixes API URLs for Capacitor WebView.
- Uses the supplied Japnish Paints round logo as the Android launcher icon.
- Uses the supplied horizontal JAPNISH PAINTS logo on the app dashboard/header/menu.
- UI-only dashboard branding; backend/business functionality is not changed.

Upload these builder files/folders to the repository ROOT and commit:
- package.json
- capacitor.config.ts
- .github/workflows/build-apk.yml
- android-res/
- dashboard-brand-fix.css
- japnish-dashboard-logo.png

Do NOT delete or replace the existing app.js, config.js, index.html, style.css,
app-update.js, app-version.php, mobile-api.php or redeem-api.php.

After commit, GitHub Actions -> Build Japnish Paints APK should run.
Artifact: JapnishPaints-APK-v68.0.2

Existing wallet, withdrawal, bank, login, roles, products, Coupon/Redeem/Scan,
QR functionality and backend APIs are intentionally left untouched.
