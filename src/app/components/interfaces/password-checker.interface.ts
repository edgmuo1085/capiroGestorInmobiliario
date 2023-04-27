export interface PasswordChecker {
  symbol: boolean;
  upper: boolean;
  lower: boolean;
  passwordNumber: boolean;
  length: boolean;
  valid: boolean;
  strength: number;
}
