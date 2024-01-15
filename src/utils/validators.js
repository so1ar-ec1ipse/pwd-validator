export const hasMinSix = (pwd) => pwd.length >= 6;

export const hasAtLeastOneUpper = (pwd) => /[A-Z]/.test(pwd);

export const hasAtLeastOneLower = (pwd) => /[a-z]/.test(pwd);

export const hasAtLeastOneDigit = (pwd) => /[\d]/.test(pwd);

export const hasAtLeastOneSpecial = (pwd) => /[!@#$%^&*()_\-+={[}\]|:;"'<,.>]/.test(pwd);
