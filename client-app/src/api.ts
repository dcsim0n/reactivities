/**
 * API route definitions
 * Dana Simmons 2020
 */


export default (function(): any {
  const api_root: string = "http://localhost:5000/api/";
  return {
    root: api_root,
    values: api_root + "values",
  }
})();