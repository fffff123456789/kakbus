// Firebase Auth integration (ES module imports from CDN) - v12.6.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// --- Firebase config: paste provided values here ---
const firebaseConfig = {
  apiKey: "AIzaSyBm266oojH-0SXXJtUanDJb-26bdzzWj9Y",
  authDomain: "kakakak-705c0.firebaseapp.com",
  projectId: "kakakak-705c0",
  storageBucket: "kakakak-705c0.firebasestorage.app",
  messagingSenderId: "808452816580",
  appId: "1:808452816580:web:f477696a869e7c5d6e1391",
  measurementId: "G-1TBS0GQ0KR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Helper: show/clear error in a container element
function showError(el, msg) {
  if (!el) {
    alert(msg);
    return;
  }
  el.textContent = msg;
  el.style.display = "block";
}

function clearError(el) {
  if (!el) return;
  el.textContent = "";
  el.style.display = "none";
}

function setupSignup(form) {
  const emailInput = form.querySelector('#email');
  const passwordInput = form.querySelector('#password');
  const errEl = document.getElementById('signup-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError(errEl);
    const email = emailInput?.value?.trim();
    const password = passwordInput?.value;
    if (!email || !password) {
      showError(errEl, 'Please enter email and password.');
      return;
    }
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', cred.user);
      window.location.href = '/';
    } catch (err) {
      console.error('Sign-up failed', err?.code, err?.message || err);
      showError(errEl, (err?.code ? `${err.code}: ` : '') + (err?.message || 'Failed to create account.'));
    }
  });
}

function setupLogin(form) {
  const emailInput = form.querySelector('#email');
  const passwordInput = form.querySelector('#password');
  const errEl = document.getElementById('login-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError(errEl);
    const email = emailInput?.value?.trim();
    const password = passwordInput?.value;
    if (!email || !password) {
      showError(errEl, 'Please enter email and password.');
      return;
    }
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in user:', cred.user);
      window.location.href = '/';
    } catch (err) {
      console.error('Sign-in failed', err?.code, err?.message || err);
      showError(errEl, (err?.code ? `${err.code}: ` : '') + (err?.message || 'Failed to sign in.'));
    }
  });
}

// Google Sign-In
function setupGoogleSignIn(btn) {
  const provider = new GoogleAuthProvider();
  btn.addEventListener('click', async () => {
    const errEl = document.getElementById('login-error');
    clearError(errEl);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in result user:', result.user);
      window.location.href = '/';
    } catch (err) {
      console.error('Google sign-in failed', err?.code, err?.message || err);
      showError(errEl, (err?.code ? `${err.code}: ` : '') + (err?.message || 'Google sign-in failed.'));
    }
  });
}

// Initialize when DOM ready. React will render the pages into DOM, so wait a bit
// Wait for elements rendered by React. Poll until available or timeout.
function waitForElementById(id, callback, interval = 200, timeout = 10000) {
  const start = Date.now();
  const tryAttach = () => {
    const el = document.getElementById(id);
    if (el) {
      callback(el);
      return true;
    }
    if (Date.now() - start > timeout) {
      console.warn(`Timed out waiting for element #${id}`);
      return false;
    }
    return null;
  };

  const res = tryAttach();
  if (res === true || res === false) return;
  const handle = setInterval(() => {
    const r = tryAttach();
    if (r === true || r === false) clearInterval(handle);
  }, interval);
}

// Attach to forms/buttons when they appear
// NOTE: login/signup forms are handled by React components in `src/pages/*` so
// the DOM-based form listeners below would duplicate behavior. We keep just the
// Google sign-in hookup here for non-React usage, but React `SignIn` handles Google sign-in.

// If you prefer DOM-only handlers, uncomment the following lines. For now we
// do not attach the signup/login handlers here to avoid double-submits.
// waitForElementById('signup-form', (el) => setupSignup(el));
// waitForElementById('login-form', (el) => setupLogin(el));
// NOTE: Google sign-in is handled inside the React SignIn page; we do not
// attach a DOM click handler here to avoid duplicate handlers in the browser.

export { auth };
