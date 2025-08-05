# Security Configuration Guide

## Overview

This document explains the security measures implemented in the Resolute Solutions website and the limitations when deploying to GitHub Pages.

## ⚠️ GitHub Pages Security Limitations

GitHub Pages has several limitations regarding HTTP security headers:

### Headers That **CANNOT** Be Set on GitHub Pages

- `X-Frame-Options` - Must be set by server, not in HTML meta tags
- `frame-ancestors` (CSP directive) - Only works as HTTP header, not meta tag
- `Strict-Transport-Security` (HSTS) - Must be set by server
- Custom security headers

### Headers That **CAN** Be Set via Meta Tags

- `Content-Security-Policy` (limited directives)
- `X-Content-Type-Options`
- `X-XSS-Protection`
- `Referrer-Policy`
- `Permissions-Policy`

## 🛡️ Implemented Security Measures

### 1. HTML Meta Tag Security Headers

```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" content="..." />
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
<meta http-equiv="X-XSS-Protection" content="1; mode=block" />
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
<meta http-equiv="Permissions-Policy" content="..." />
```

### 2. JavaScript-Based Security (security.js)

- **Frame Busting**: Prevents website from being embedded in iframes
- **DevTools Detection**: Detects when developer tools are opened
- **Context Menu Prevention**: Disables right-click menu
- **Keyboard Shortcut Blocking**: Prevents common debug shortcuts
- **Text Selection Prevention**: Disables text selection and copying
- **Console Obfuscation**: Hides sensitive information in console

### 3. Build-Time Security

- **Code Minification**: Using Terser for code obfuscation
- **Source Map Removal**: Prevents source code exposure
- **Environment Variable Protection**: Sensitive data in env files

## 🚀 Alternative Deployment Options for Better Security

If you need full HTTP header control, consider these alternatives:

### 1. Netlify (Recommended)

- Supports `_headers` file for custom headers
- Free tier available
- Easy GitHub integration
- Automatic HTTPS

### 2. Vercel

- Supports `vercel.json` for header configuration
- Free tier available
- Excellent performance

### 3. Cloudflare Pages

- Custom headers via `_headers` file
- Free tier with DDoS protection
- Global CDN

### 4. Self-Hosted Options

- Full control over server headers
- Can implement HSTS, frame-ancestors, etc.
- Requires server management

## 📝 Current \_headers File

We've included a `public/_headers` file that would work with Netlify:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.emailjs.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=(), ambient-light-sensor=(), accelerometer=(), autoplay=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## 🔧 Security Configuration Details

### Content Security Policy

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self';
connect-src 'self' https://api.emailjs.com;
base-uri 'self';
form-action 'self';
```

### Frame Busting (JavaScript)

Multiple techniques implemented:

1. Basic frame comparison
2. Parent frame checking
3. Iframe injection detection
4. Continuous monitoring

## ⚡ Performance Impact

Security measures have minimal performance impact:

- JavaScript security: ~2KB minified
- Meta tags: Negligible
- Frame busting: Runs only in production

## 🧪 Testing Security

### Test Frame Busting

Try embedding the site in an iframe - it should redirect to the main site.

### Test DevTools Detection

Open developer tools - detection should trigger in production.

### Test CSP

Browser console will show CSP violations if any occur.

## 🔄 Migration to Better Hosting

If you decide to migrate from GitHub Pages:

1. **Export Repository**: Download or clone the repo
2. **Choose Provider**: Netlify, Vercel, or Cloudflare Pages
3. **Connect Repository**: Link your GitHub repo
4. **Configure Headers**: The `_headers` file will automatically work
5. **Update DNS**: Point your domain to the new provider

## 📚 Additional Resources

- [OWASP Security Headers](https://owasp.org/www-project-secure-headers/)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Netlify Headers Documentation](https://docs.netlify.com/routing/headers/)
- [Vercel Headers Documentation](https://vercel.com/docs/concepts/projects/project-configuration#headers)

## ✅ Summary

Current setup provides:

- ✅ Basic XSS protection
- ✅ Content type sniffing prevention
- ✅ Referrer policy control
- ✅ JavaScript-based frame busting
- ✅ DevTools detection and prevention
- ❌ True HTTP header-based frame protection
- ❌ HSTS headers
- ❌ Advanced CSP directives

For maximum security, consider migrating to a platform that supports custom HTTP headers.
