export default class Validate {
  PLATFORM = "JODI";
  validateEmail(input: string): boolean {
    const emailRegExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(input);
  }

  isPasswordStrong(input: string): boolean {
    const strongPasswordRegex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return strongPasswordRegex.test(input);
  }
  isValidPhonenumber(input: string): boolean {
    return true;
  }
}

export class Employee {}
