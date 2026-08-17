# BlueTools
Next.js utility dashboard ready for Vercel.

## Run
npm install
npm run dev

## Google OAuth
Set `NEXT_PUBLIC_GOOGLE_CLIENT_ID` in Vercel Environment Variables and replace the demo login in `components/LoginModal.jsx` with Google Identity Services callback when ready. Add your Vercel production origin to the Google OAuth configuration.

## QR
QR Generator works in browser. QR Scanner requires HTTPS and camera permission; Vercel provides HTTPS.
