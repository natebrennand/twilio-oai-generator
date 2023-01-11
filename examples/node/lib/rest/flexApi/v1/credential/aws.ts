/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { HistoryListInstance } from "./aws/history";

/**
 * Options to pass to update a AwsInstance
 */
export interface AwsContextUpdateOptions {
  /**  */
  testString?: string;
  /**  */
  testBoolean?: boolean;
}
/**
 * Options to pass to each
 */
export interface AwsListInstanceEachOptions {
  /**  */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AwsInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AwsListInstanceOptions {
  /**  */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AwsListInstancePageOptions {
  /**  */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AwsContext {
  history: HistoryListInstance;

  /**
   * Remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AwsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance>;

  /**
   * Update a AwsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AwsInstance
   */
  update(
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance>;
  /**
   * Update a AwsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AwsInstance
   */
  update(
    params: AwsContextUpdateOptions,
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AwsContextSolution {
  sid: string;
}

export class AwsContextImpl implements AwsContext {
  protected _solution: AwsContextSolution;
  protected _uri: string;

  protected _history?: HistoryListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Credentials/AWS/${sid}`;
  }

  get history(): HistoryListInstance {
    this._history =
      this._history || HistoryListInstance(this._version, this._solution.sid);
    return this._history;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AwsInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | AwsContextUpdateOptions
      | ((error: Error | null, item?: AwsInstance) => any),
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["testString"] !== undefined)
      data["TestString"] = params["testString"];
    if (params["testBoolean"] !== undefined)
      data["TestBoolean"] = serialize.bool(params["testBoolean"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AwsInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface AwsPayload extends TwilioResponsePayload {
  credentials: AwsResource[];
}

interface AwsResource {
  account_sid: string;
  sid: string;
  test_string: string;
  test_integer: number;
}

export class AwsInstance {
  protected _solution: AwsContextSolution;
  protected _context?: AwsContext;

  constructor(protected _version: V1, payload: AwsResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.testString = payload.test_string;
    this.testInteger = deserialize.integer(payload.test_integer);

    this._solution = { sid: sid || this.sid };
  }

  accountSid: string;
  sid: string;
  testString: string;
  testInteger: number;

  private get _proxy(): AwsContext {
    this._context =
      this._context || new AwsContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AwsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AwsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AwsInstance
   */
  update(
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance>;
  /**
   * Update a AwsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AwsInstance
   */
  update(
    params: AwsContextUpdateOptions,
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: AwsInstance) => any
  ): Promise<AwsInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the history.
   */
  history(): HistoryListInstance {
    return this._proxy.history;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      sid: this.sid,
      testString: this.testString,
      testInteger: this.testInteger,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AwsSolution {}

export interface AwsListInstance {
  _version: V1;
  _solution: AwsSolution;
  _uri: string;

  (sid: string): AwsContext;
  get(sid: string): AwsContext;

  /**
   * Streams AwsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AwsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AwsInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AwsListInstanceEachOptions,
    callback?: (item: AwsInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AwsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AwsPage) => any
  ): Promise<AwsPage>;
  /**
   * Lists AwsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AwsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AwsInstance[]) => any
  ): Promise<AwsInstance[]>;
  list(
    params: AwsListInstanceOptions,
    callback?: (error: Error | null, items: AwsInstance[]) => any
  ): Promise<AwsInstance[]>;
  /**
   * Retrieve a single page of AwsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AwsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AwsPage) => any
  ): Promise<AwsPage>;
  page(
    params: AwsListInstancePageOptions,
    callback?: (error: Error | null, items: AwsPage) => any
  ): Promise<AwsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AwsListInstance(version: V1): AwsListInstance {
  const instance = ((sid) => instance.get(sid)) as AwsListInstance;

  instance.get = function get(sid): AwsContext {
    return new AwsContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Credentials/AWS`;

  instance.page = function page(
    params?:
      | AwsListInstancePageOptions
      | ((error: Error | null, items: AwsPage) => any),
    callback?: (error: Error | null, items: AwsPage) => any
  ): Promise<AwsPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AwsPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AwsPage) => any
  ): Promise<AwsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new AwsPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class AwsPage extends Page<V1, AwsPayload, AwsResource, AwsInstance> {
  /**
   * Initialize the AwsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AwsSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AwsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AwsResource): AwsInstance {
    return new AwsInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
