class Deferred {
  #_promise: Promise<any>;
  #_resolve: any;
  #_reject: any;
  constructor() {
    this.#_promise = new Promise((resolve, reject) => {
      this.#_resolve = resolve;
      this.#_reject = reject;
    });
  }
  get promise(): Promise<any> {
    return this.#_promise;
  }
  get resolve(): any {
    return this.#_resolve;
  }
  get reject(): any {
    return this.#_reject;
  }
}
export default Deferred;
