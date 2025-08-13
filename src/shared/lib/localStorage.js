export class useLocalStorage {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }
  static getItem(key) {
    return localStorage.getItem(key);
  }

  static hasItem(key) {
    return !!localStorage.getItem(key);
  }
}
